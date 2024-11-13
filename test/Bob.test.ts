import { expect } from "chai";
import { Event } from "../src/Event.ts";
import { Bob } from "../src/Bob.ts";
import { Memory } from "../src/Memory.ts";


it("Bob doesn't know much", () => {
  const bob = BobTestApi.bob();
  expect(bob.knows("name")).to.be.undefined;
});

it("Bob learns a his name", () => {
  const bob = BobTestApi.bob();
  bob.learnFrom(BobTestApi.nameEvent());
  expectKnowsHisName(bob, "Bob");
});

it("Bob can create a clone of himself", () => {
  const bob = BobTestApi.bob();
  bob.learnFrom(BobTestApi.nameEvent());

  const bill = bob.clone();
  bill.learnFrom(BobTestApi.nameEvent("Bill"));
  expectKnowsHisName(bill, "Bill");
  expectKnowsHisName(bob, "Bob");
});

function expectKnowsHisName(bob: Bob, name: string) {
  const memory = bob.knows("name");
  expect(memory).to.be.instanceOf(Memory);
  expect(memory?.id).to.equal("name");
  expect(memory?.data).to.equal(name);
}

class BobTestApi {
  static bob(): Bob {
    return new Bob();
  }

  static nameEvent(name: string = "Bob"): Event {
    return new Event("name", name);
  }

}