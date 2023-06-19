import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const pathToFile = path.join(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "files"),
    "fileToRead.txt"
  );
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(pathToFile);
    const chunks = [];

    stream
      .on("data", (chunk) => chunks.push(chunk))
      .on("end", () => {
        const data = Buffer.concat(chunks);
        resolve(process.stdout.write(data));
      })
      .on("error", reject);
  });
};

await read();
