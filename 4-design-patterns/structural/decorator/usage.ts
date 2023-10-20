import { FileServiceFactory } from "../../creational/factory/file-service-factory";
import { EncryptionDecorator } from "./encryption-decorator";

const localFileWriter = FileServiceFactory.create("local");

const encryptedLocal = new EncryptionDecorator(localFileWriter);

async function run() {
  encryptedLocal.write("encrypted.json", JSON.stringify([{ name: "Chidi" }]));

  const readValue = await encryptedLocal.read("encrypted.json");
  console.log(readValue);
}

run();
