import { Transform, pipeline } from "stream";

const readable = process.stdin;
const writable = process.stdout;

const transformData = new Transform({
  transform(chunk, enc, callBack) {
    const transformed = chunk.toString().trim().split("").reverse().join("");

    this.push(transformed + "\n");

    callBack();
  },
});

const transform = async () => {
  pipeline(readable, transformData, writable, (error) => {
    console.log(error.message);
  });
};

await transform();
