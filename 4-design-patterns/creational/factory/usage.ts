import { FileServiceFactory } from "./file-service-factory";

const fileService = FileServiceFactory.create(
  process.env.NODE_ENV === "production" ? "s3" : "local"
);

fileService.write("users.json", JSON.stringify([{ id: 1, name: "John" }]));
