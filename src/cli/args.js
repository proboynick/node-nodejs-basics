const parseArgs = () => {
  let str = "";
  for (let i = 2; i < process.argv.length; i += 2) {
    str += `${process.argv[i].slice(2)} is ${process.argv[i + 1]}, `;
  }
  console.log(str.slice(0, -2));
};

parseArgs();
