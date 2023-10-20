import { LocalFileService } from "./local-file-service";
import { S3Service } from "./s3-service";
import { IFileService } from "./interface";

const AWS_ACCESS_ID = "sample-id";
const AWS_SECRET = "exmaple-secret";
const BUCKET_NAME = "some-bucket-name";

type ServiceTypes = "s3" | "local" | "azure";
export class FileServiceFactory {
  static create(type: ServiceTypes): IFileService {
    let fileService = new LocalFileService();

    if (type === "s3") {
      fileService = new S3Service({
        bucketName: BUCKET_NAME,
        accessSecret: AWS_SECRET,
        accessKeyID: AWS_ACCESS_ID,
        region: "eu-west-2",
      });
    }

    if (type === "azure") {
      //create azure instance
    }

    return fileService;
  }
}

function createFileServiceInstance(type: ServiceTypes) {
  let fileService = new LocalFileService();

  if (type === "s3") {
    fileService = new S3Service({
      bucketName: BUCKET_NAME,
      accessSecret: AWS_SECRET,
      accessKeyID: AWS_ACCESS_ID,
      region: "eu-west-2",
    });
  }

  if (type === "azure") {
    //create azure instance
  }

  return fileService;
}
