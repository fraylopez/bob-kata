import { Memory } from "./Memory.ts";
import type { Event } from "./Event.ts";

export class Bob {

  private memory: Map<string, Memory> = new Map();

  public learnFrom(event: Event): void {
    this.createMemory(event);
  }

  public knows(id: string) {
    return this.memory.get(id);
  }

  clone() {
    const clone = new Bob();
    for (const memory of this.memory.values()) {
      clone.memory.set(memory.id, memory);
    }
    return clone;
  }


  private createMemory(event: Event): void {
    const memory = new Memory(event);
    this.memory.set(memory.id, memory);
  }
}


