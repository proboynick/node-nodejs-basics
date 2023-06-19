import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const dirPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );
  const copiedFolder = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files_copy"
  );
  await fs.access(dirPath, async (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      await fs.access(copiedFolder, async (err) => {
        if (!err) {
          console.error("FS operation failed");
        } else {
          await fs.promises
            .mkdir(copiedFolder, { recursive: true })
            .catch(() => {
              console.error("some error");
            });
          const files = await fs.promises.readdir(dirPath, {
            withFileTypes: true,
          });
          for (const file of files) {
            await fs.promises.copyFile(
              path.join(dirPath, file.name),
              path.join(copiedFolder, file.name)
            );
          }
        }
      });
    }
  });
};

await copy();
