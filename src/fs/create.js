import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const pathToFile = path.join(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "files"),
    "fresh.txt"
  );
  (await fs).writeFile(
    pathToFile,
    "I am fresh and young",
    { flag: "wx" },
    (error) => {
      if (error) console.error("FS operation failed");
    }
  );
};

await create();
