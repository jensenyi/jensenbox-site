import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await cp("index.html", "dist/index.html");
await cp("styles.css", "dist/styles.css");
await cp("app.js", "dist/app.js");
await cp("assets", "dist/assets", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");
await writeFile(
  "dist/server/index.js",
  'export default { fetch(request, env) { return env.ASSETS ? env.ASSETS.fetch(request) : new Response("Jensen Yi Personal Systems"); } };\n'
);
