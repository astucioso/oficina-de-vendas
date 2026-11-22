(function (root) {
  'use strict';
  const moneyFields = ['price', 'materialCost', 'laborCost', 'packageCost', 'management', 'operationalCost'];
  const rateFields = ['commissionRate', 'taxRate'];
  const cents = value => Math.round((Number(value) + Number.EPSILON) * 100);
  const money = value => cents(value) / 100;
  const rateCharge = (price, rate) => Number((BigInt(price) * BigInt(cents(rate)) + 5000n) / 10000n);
  function calculate(p) {
    const price = cents(p.price), material = cents(p.materialCost), labor = cents(p.laborCost), packaging = cents(p.packageCost), management = cents(p.management), operational = cents(p.operationalCost);
    const commission = rateCharge(price, p.commissionRate), tax = rateCharge(price, p.taxRate);
    const physical = material + labor + packaging, sales = management + operational + commission + tax, total = physical + sales, profit = price - total;
    return {price, material, labor, packaging, management, operational, commission, tax, physical, sales, total, profit, margin: price > 0 ? 100 * profit / price : null, perPiecePrice: price / p.quantity, perPieceProfit: profit / p.quantity};
  }
  function targetPrice(p, target = true) {
    const rate = (cents(p.commissionRate) + cents(p.taxRate)) / 10000;
    const margin = target && p.targetMargin != null ? p.targetMargin / 100 : 0;
    const fixedProfit = target && p.targetProfit != null ? cents(p.targetProfit) : 0;
    if (rate + margin >= 1) return null;
    const c = calculate(p), fixed = c.physical + c.management + c.operational;
    let price = Math.max(margin > 0 ? 1 : 0, Math.ceil((fixed + fixedProfit) / (1 - rate - margin) - 1e-9));
    for (let tries = 0; tries < 100; tries++, price++) {
      const r = calculate({...p, price: price / 100});
      if (r.profit >= fixedProfit && (!margin || r.profit + 1e-9 >= r.price * margin)) return price;
    }
    return null;
  }
  function warnings(p) {
    const messages = [];
    if (cents(p.price) < cents(p.tariffPriceMin) || cents(p.price) > cents(p.tariffPriceMax)) messages.push('Preço fora da faixa tarifária da base. O operacional foi mantido manualmente; confira uma nova cotação no Mercado Livre.');
    if (Number(p.taxRate) + Number(p.commissionRate) >= 100) messages.push('A soma das taxas percentuais chegou a 100% ou mais. Não existe preço de equilíbrio com estes custos.');
    if (p.quantity === 3) messages.push('Peso bruto estimado: 950 g. Há só 50 g de folga até 1 kg; conferir pacote pronto e peso volumétrico.');
    return messages;
  }
  function parseInput(value, key) {
    let text = String(value).trim().replace(/\s|R\$/g, '');
    if (!text) return null;
    if (text.includes(',')) text = text.replace(/\./g, '').replace(',', '.');
    if (!/^\d+(?:\.\d{0,2})?$/.test(text)) return null;
    const n = Number(text), max = rateFields.includes(key) ? 100 : 1000000;
    return Number.isFinite(n) && n >= 0 && n <= max ? money(n) : null;
  }
  function csv(products) {
    const columns = ['SKU','Produto','Peças por pedido','Preço pedido','Preço por peça','Matéria-prima total','Mão de obra total','Embalagem total','Custo físico','Gestão por pedido','Comissão ML %','Comissão ML R$','Simples %','Simples R$','Operacional ML','Custo total informado','Sobra por pedido','Margem %','Cenário','Preço ML observado','Ajuste ML pendente'];
    const br = v => Number(v).toFixed(2).replace('.', ',');
    const quote = v => '"' + String(v).replace(/"/g, '""') + '"';
    const lines = products.map(p => {
      const c = calculate(p);
      return [p.sku,p.name,p.quantity,br(c.price/100),br(c.perPiecePrice/100),br(c.material/100),br(c.labor/100),br(c.packaging/100),br(c.physical/100),br(c.management/100),br(p.commissionRate),br(c.commission/100),br(p.taxRate),br(c.tax/100),br(c.operational/100),br(c.total/100),br(c.profit/100),c.margin==null?'':br(c.margin),p.modified?'Simulação local':'Base comercial',br(p.listingPrice??p.price),p.priceAdjustmentPending?'Sim':'Não'].map(quote).join(';');
    });
    return '\uFEFF' + [columns.map(quote).join(';'),...lines].join('\r\n');
  }
  const api = Object.freeze({cents, money, calculate, targetPrice, warnings, parseInput, csv, moneyFields, rateFields, fields:[...moneyFields,...rateFields]});
  root.DurvexModel = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
