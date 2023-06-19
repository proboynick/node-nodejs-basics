import { error } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const dirPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );
  fs.unlink(path.join(dirPath, "fileToRemove.txt"), (error) => {
    if (error) {
      console.error("FS operation failed");
    }
  });
};

await remove();
