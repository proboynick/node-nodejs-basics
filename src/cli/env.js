const parseEnv = () => {
  const arr = Object.keys(process.env).filter((key) => {
    return key.includes("RSS_");
  });
  let str = "";
  for (const el of arr) {
    str += `${el}=${process.env[el]}; `;
  }
  console.log(str);
};

parseEnv();
