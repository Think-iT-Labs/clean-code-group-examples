import fs from "fs";
import { IFileService } from "./interface";

export class LocalFileService implements IFileService {
  write(filename: string, content: string) {
    if (!fs.existsSync("localdata")) {
      fs.mkdirSync("localdata");
    }
    fs.writeFileSync(`localdata/${filename}`, content, "utf-8");
  }

  async read(filename: string) {
    return fs.readFileSync(`localdata/${filename}`, {
      encoding: "utf-8",
    });
  }
}
