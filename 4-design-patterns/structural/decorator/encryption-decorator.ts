// Inspired by https://dev.to/jmalvarez/decorator-pattern-in-typescript-na5

import { IFileService } from "../../creational/factory/interface";

export class EncryptionDecorator implements IFileService {
  constructor(private fileService: IFileService) {}

  private encrypt(text: string) {
    // run encryption on text

    const encoded = Buffer.from(text, "utf8").toString("base64");
    return encoded;
  }

  private decrypt(encryptedText: string) {
    // run encryption on text

    return Buffer.from(encryptedText, "base64").toString("utf8");
  }
  write(filename: string, data: string) {
    const encryptedData = this.encrypt(data);
    return this.fileService.write(filename, encryptedData);
  }

  async read(filename: string) {
    const encryptedData = await this.fileService.read(filename);

    if (encryptedData) {
      return this.decrypt(encryptedData);
    }
  }
}
