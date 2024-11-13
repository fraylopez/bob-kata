import { expect } from "chai";
import { Event } from "../src/Event.ts";
import { Bob } from "../src/Bob.ts";
import { Memory } from "../src/Memory.ts";


it("Bob doesn't know much", () => {
  const bob = new Bob();
  expect(bob.knows("name")).to.be.undefined;
});

it('Bob learns a his name', () => {
  const bob = new Bob();
  bob.learnFrom(new Event("name", "Bob"));
  expect(bob.knows("name")).to.be.instanceOf(Memory);
});