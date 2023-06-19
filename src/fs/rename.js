import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const dirPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );
  fs.rename(
    path.join(dirPath, "wrongFilename.txt"),
    path.join(dirPath, "properFilename.md"),
    (error) => {
      if (error) {
        console.error("FS operation failed");
      }
    }
  );
};

await rename();
