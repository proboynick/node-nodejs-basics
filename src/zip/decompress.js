import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const dirPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "files"
);

const decompress = async () => {
  fs.createReadStream(path.join(dirPath, "archive.gz"))
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(path.join(dirPath, "fileToCompress.txt")));
};

await decompress();
