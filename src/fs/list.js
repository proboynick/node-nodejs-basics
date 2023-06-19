import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const dirPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );
  await fs.access(dirPath, async (error) => {
    if (error) {
      console.error("FS operation failed");
    } else {
      const files = await fs.promises.readdir(dirPath, { withFileTypes: true });
      for (const file of files) {
        console.log(file.name);
      }
    }
  });
};

await list();
