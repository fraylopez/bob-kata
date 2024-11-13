import { Memory } from "./Memory.ts";
import type { Event } from "./Event.ts";

export class Bob {

  private memory: Map<string, Memory> = new Map();

  public learnFrom(event: Event): void {
    if (!this.knows(event.name)) {
      this.createMemory(event);
    }
  }

  public knows(id: string) {
    return this.memory.get(id);
  }

  private createMemory(event: Event): void {
    const memory = new Memory(event);
    this.memory.set(memory.id, memory);
  }
}


