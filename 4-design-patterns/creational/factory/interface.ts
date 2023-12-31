export interface IFileService {
  write: (filename: string, data: string) => void | Promise<void>;
  read: (filename: string) => Promise<string | undefined>;
}
