import { customEvent } from "./event-emitter";

customEvent
  .once("ping", () => console.log("started pinging"))
  .on("ping", (num) => console.log(`ping #${num} from module`));
