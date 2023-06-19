import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const pathToFile = path.join(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "files"),
    "fileToCalculateHashFor.txt"
  );
  try {
    const content = await fs.promises.readFile(pathToFile, {
      encoding: "utf-8",
    });
    const hash = crypto.createHash("sha256");
    hash.update(content);
    console.log(hash.digest("hex"));
  } catch (error) {
    console.error("FS operation failed");
  }
};

await calculateHash();
