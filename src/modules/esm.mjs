import path from "path";
import { release, version } from "os";
import { createServer } from "http";
import("./files/c.js");
import { fileURLToPath } from "url";
import aFile from "./files/a.json" assert { type: "json" };
import bFile from "./files/b.json" assert { type: "json" };

export const random = Math.random();

let unknownObject = random > 0.5 ? aFile : bFile;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${process.cwd()}`);

export const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
