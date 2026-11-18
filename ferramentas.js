(() => {
  'use strict';

  const BASE_BP = 10000;
  const MEIO_CENTAVO_BP = BASE_BP / 2;
  const PRECO_MAXIMO = 10000000;

  const faixasShopee = [
    { inicio: 1, fim: 899, percentualBp: 2000, fixoBp: 5000, fixo: 0 },
    { inicio: 900, fim: 7999, percentualBp: 2000, fixoBp: 0, fixo: 450 },
    { inicio: 8000, fim: 9999, percentualBp: 1400, fixoBp: 0, fixo: 1600 },
    { inicio: 10000, fim: 19999, percentualBp: 1400, fixoBp: 0, fixo: 2000 },
    { inicio: 20000, fim: PRECO_MAXIMO, percentualBp: 1400, fixoBp: 0, fixo: 2600 }
  ];

  function inteiroNoIntervalo(valor, campo, minimo, maximo) {
    if (!Number.isSafeInteger(valor) || valor < minimo || valor > maximo) {
      throw new RangeError(campo + ' deve ser um inteiro entre ' + minimo + ' e ' + maximo + '.');
    }
    return valor;
  }

  function validarCustos({
    custo,
    unidades = 1,
    embalagem = 0,
    fixoGestao = 0,
    impostoBp = 0,
    extras = 0,
    adicionaisBp = 0
  }) {
    const maximo = Number.MAX_SAFE_INTEGER;
    inteiroNoIntervalo(custo, 'custo', 0, maximo);
    inteiroNoIntervalo(unidades, 'unidades', 1, maximo);
    inteiroNoIntervalo(embalagem, 'embalagem', 0, maximo);
    inteiroNoIntervalo(fixoGestao, 'fixoGestao', 0, maximo);
    inteiroNoIntervalo(extras, 'extras', 0, maximo);
    inteiroNoIntervalo(impostoBp, 'impostoBp', 0, BASE_BP);
    inteiroNoIntervalo(adicionaisBp, 'adicionaisBp', 0, BASE_BP);

    const fabricacao = custo * unidades;
    const custosFixos = fabricacao + embalagem + fixoGestao + extras;
    inteiroNoIntervalo(custosFixos, 'soma dos custos fixos', 0, maximo);
    return { fabricacao, embalagem, fixoGestao, extras, impostoBp, adicionaisBp, custosFixos };
  }

  function taxaEmCentavos(preco, taxaBp) {
    return Math.floor((preco * taxaBp + MEIO_CENTAVO_BP) / BASE_BP);
  }

  function apurar(preco, custos, faixa) {
    const fixoShopee = faixa.fixo + taxaEmCentavos(preco, faixa.fixoBp);
    const percentualShopee = taxaEmCentavos(preco, faixa.percentualBp);
    const taxaShopee = fixoShopee + percentualShopee;
    const imposto = taxaEmCentavos(preco, custos.impostoBp);
    const adicionais = taxaEmCentavos(preco, custos.adicionaisBp);
    const sobra = preco - taxaShopee - imposto - adicionais - custos.custosFixos;

    return {
      preco,
      fabricacao: custos.fabricacao,
      embalagem: custos.embalagem,
      fixoGestao: custos.fixoGestao,
      fixoShopee,
      percentualShopee,
      taxaShopee,
      imposto,
      extras: custos.extras,
      adicionais,
      sobra
    };
  }

  function calcular(entrada) {
    const preco = inteiroNoIntervalo(entrada.preco, 'preco', 0, PRECO_MAXIMO);
    const custos = validarCustos(entrada);
    const faixa = faixasShopee.find((item) => preco <= item.fim);
    const resultado = apurar(preco, custos, faixa);
    const margemBp = preco === 0 ? null : Math.round(resultado.sobra * BASE_BP / preco);

    if (!Number.isSafeInteger(resultado.sobra) || (margemBp !== null && !Number.isSafeInteger(margemBp))) {
      throw new RangeError('O resultado excede o intervalo de inteiros seguros.');
    }

    return { ...resultado, margemBp };
  }

  function piso(entrada, margemBp) {
    inteiroNoIntervalo(margemBp, 'margemBp', 0, BASE_BP);
    const custos = validarCustos(entrada);
    if (custos.custosFixos > PRECO_MAXIMO) {
      return null;
    }

    for (const faixa of faixasShopee) {
      const percentuais = [faixa.fixoBp, faixa.percentualBp, custos.impostoBp, custos.adicionaisBp];
      const somaPercentuaisBp = percentuais.reduce((total, taxa) => total + taxa, 0);
      const saldoPorCentavoBp = BASE_BP - margemBp - somaPercentuaisBp;
      const custosNaFaixaBp = (custos.custosFixos + faixa.fixo) * BASE_BP;
      const folgaArredondamentoBp = percentuais.filter((taxa) => taxa > 0).length * MEIO_CENTAVO_BP;
      const minimoPossivelBp = custosNaFaixaBp - folgaArredondamentoBp;
      let inicio = faixa.inicio;
      let fim = faixa.fim;

      // Os limites lineares incluem até meio centavo de erro por taxa.
      // Dentro deles, conferimos todos os centavos com os descontos arredondados.
      if (saldoPorCentavoBp > 0) {
        inicio = Math.max(inicio, Math.ceil(minimoPossivelBp / saldoPorCentavoBp));
        fim = Math.min(fim, Math.ceil((custosNaFaixaBp + folgaArredondamentoBp) / saldoPorCentavoBp));
      } else if (saldoPorCentavoBp < 0) {
        fim = Math.min(fim, Math.floor(minimoPossivelBp / saldoPorCentavoBp));
      } else {
        if (minimoPossivelBp > 0) {
          continue;
        }
        // Com saldo linear zero, os erros se repetem a cada 10.000 centavos.
        fim = Math.min(fim, inicio + BASE_BP - 1);
      }

      for (let preco = inicio; preco <= fim; preco += 1) {
        const { sobra } = apurar(preco, custos, faixa);
        if (sobra * BASE_BP >= margemBp * preco) {
          return preco;
        }
      }
    }

    return null;
  }

  window.OFICINA_CALC = Object.freeze({ calcular, piso });
})();
