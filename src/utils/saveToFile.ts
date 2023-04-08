import fs from "node:fs";

export default function saveToFile(filePath: string, data: string | NodeJS.ArrayBufferView) {
  fs.writeFile(filePath, data, (err) => {
    if (err) console.log(err);
  })
}