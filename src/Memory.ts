import type { Event } from "./Event.ts";

export class Memory {
  public id: string;
  public data: any;

  constructor(event: Event) {
    this.id = event.name;
    this.data = event.data;
  }
}
