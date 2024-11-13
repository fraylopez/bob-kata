import { expect } from "chai";
import { Event } from "../src/Event.ts";
import { Bob } from "../src/Bob.ts";
import { Memory } from "../src/Memory.ts";


it("Bob doesn't know much", () => {
  const bob = BobTestBuilder.bob();
  expect(bob.knows("name")).to.be.undefined;
});

it("Bob learns a his name", () => {
  const bob = BobTestBuilder.bob();
  bob.learnFrom(BobTestBuilder.nameEvent());
  BobTestApi.expectKnowsHisName(bob, "Bob");
});

it("Bob can create a clone of himself", () => {
  const bob = BobTestBuilder.bob();
  bob.learnFrom(BobTestBuilder.nameEvent());

  const bill = bob.clone();
  expect(bill).to.be.not.equal(bob);
});

it("clones are a different person with different memories", () => {
  const bob = BobTestBuilder.bob();
  bob.learnFrom(BobTestBuilder.nameEvent());

  const bill = bob.clone();
  bill.learnFrom(BobTestBuilder.nameEvent("Bill"));

  BobTestApi.expectKnowsHisName(bill, "Bill");
  BobTestApi.expectKnowsHisName(bob, "Bob");
});


class BobTestBuilder {
  static bob(): Bob {
    return new Bob();
  }

  static nameEvent(name: string = "Bob"): Event {
    return new Event("name", name);
  }
}

class BobTestApi {
  static expectKnowsHisName(bob: Bob, name: string) {
    const memory = bob.knows("name");
    expect(memory).to.be.instanceOf(Memory);
    expect(memory?.id).to.equal("name");
    expect(memory?.data).to.equal(name);
  }
}