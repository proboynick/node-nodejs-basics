import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const pathToFile = path.join(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "files"),
    "fileToRead.txt"
  );
  try {
    const content = await fs.promises.readFile(pathToFile, {
      encoding: "utf-8",
    });
    console.log(content);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await read();
