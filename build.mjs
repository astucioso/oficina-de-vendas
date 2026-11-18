import { readFile, writeFile } from "node:fs/promises";

const path = (name) => new URL(name, import.meta.url);
const read = (name) => readFile(path(name), "utf8");

const [template, stylesheet, photo] = await Promise.all([
  read("index.html"), read("oficina.css"), readFile(path("oficina.jpg"))
]);

const externalScript = /[ \t]*<script defer src="\.\/([^"]+)"><\/script>\r?\n/g;
const scriptFiles = [...template.matchAll(externalScript)].map((entry) => entry[1]);
if (!scriptFiles.length) throw new Error("Nenhum script encontrado no HTML de origem.");
const sources = await Promise.all(scriptFiles.map(read));
const scripts = sources.map((source) =>
  "<script>\n" + source.replace(/<\/script/gi, "<\\/script") + "\n</script>").join("\n");
const css = stylesheet.replace("./oficina.jpg", "data:image/jpeg;base64," + photo.toString("base64"));
const output = template
  .replace(externalScript, "")
  .replace('<link rel="stylesheet" href="./oficina.css">', () => "<style>\n" + css + "\n</style>")
  .replace("</body>", () => scripts + "\n</body>");
await writeFile(path("Oficina-de-Vendas.html"), output);
process.stdout.write("Oficina-de-Vendas.html pronto para abrir no navegador.\n");
