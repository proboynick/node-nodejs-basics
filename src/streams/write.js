import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readLine from "readline";

const write = async () => {
  const pathToFile = path.join(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "files"),
    "fileToWrite.txt"
  );
  const writeStream = fs.createWriteStream(pathToFile);
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  process.on("SIGINT", () => {
    process.exit();
  });

  rl.write("Enter your text(To exit press ctrl-c):\n");
  rl.on("line", (data) => {
    writeStream.write(`${data}\n`);
  });
};

await write();
