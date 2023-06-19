import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";
import { pipeline } from "stream";

const dirPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "files"
);
const readable = fs.createReadStream(path.join(dirPath, "fileToCompress.txt"));
const writable = fs.createWriteStream(path.join(dirPath, "archive.gz"));
const gzip = zlib.createGzip();

const compress = async () => {
  pipeline(readable, gzip, writable, (error) => {
    console.log(error);
  });
};

await compress();
