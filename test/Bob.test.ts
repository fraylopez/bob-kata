import { expect } from "chai";
import { Event } from "../src/Event.ts";
import { Bob } from "../src/Bob.ts";
import { Memory } from "../src/Memory.ts";


it("Bob doesn't know much", () => {
  const bob = BobTestApi.bob();
  expect(bob.knows("name")).to.be.undefined;
});

it('Bob learns a his name', () => {
  const bob = BobTestApi.bob();
  bob.learnFrom(BobTestApi.nameEvent());
  expect(bob.knows("name")).to.be.instanceOf(Memory);
});


class BobTestApi {
  static bob(): Bob {
    return new Bob();
  }

  static nameEvent(): Event {
    return new Event("name", "Bob");
  }

}