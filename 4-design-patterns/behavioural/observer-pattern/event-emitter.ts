// Exmaple from https://medium.com/@brianjleeofcl/what-they-probably-didnt-teach-you-pt-1-node-js-event-emitters-observer-pattern-7dd02b67c061
import { EventEmitter } from "events";

export const customEvent = new EventEmitter();

let count: number = 0;
setInterval(() => {
  customEvent.emit("ping", count);
  count++;
}, 3000);
