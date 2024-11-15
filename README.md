# Bob kata

\*Based on the Bobiverse book series by Dennis E. Taylor

## Introduction

The kata is divided into several steps, each one building on top of the previous one.

This is a Domain Modeling kata, so you should focus on the domain and the interactions between the different entities.

It is recommended to be done in a TDD fashion, so you should write tests for each step before implementing it.

## The story

> March 8, 2024
> Robert Johansson, also known as Bob,

- [ ] is (a human)
- [ ] Like most humans, Bob can `learn` by storing `Memories` crafted out of `Events`. He has a `Brain`.

> Bob is also a successful engineer that just sold his company for a lot of money.
> He is now retired and has a lot of free time.
> He is interested in learning new things and has decided to attend to a science conference.
> There, Bob is introduced to a new company that offers a storage service for human heads once they are dead in the believe that in the future they will be able to bring them back to life.
> Bob has more money than he can spend and decides to try it out.

> Bob is hit by a car while crossing the street and dies.

> June 25, 2133
> Bob wakes up. A scientist explains to him that he is a clone of the original Bob and that he has been brought back to life using the memories stored in the original Bob's head.

- [ ] Bob has the same memory he had before. He remembers the accident and the decision to store his head.
- [ ] Bob can learn and store new Memories in his Brain

> The scientist explains to Bob that he has no body, but that he can interact with the world through a computer interface that controls small atonomous IA robots called "ROAMers" (Remote Observation And Manipulation devices).

- [ ] Bob can move a `Roamer` to a given `Position`
- [ ] Bob can order a Roamer to perform a `Command`
- [ ] A Roamer can sense the world around it and store Events but not Memories.
- [ ] Bob can sense what a Roamer senses, meaning he can parse Events from the Roamer's as if they were his own
- [ ] Bob can hold the link between a Roamer and his Brain within a Range, further than that the link is lost and Bob can't sense the Roamer anymore
- [ ] Bob can only command one Roamer at a time

> The scientist gives Bob access to digital information about the world and the current state of technology.

- [ ] Bob can also `learn` from any `InformationSource` he has access to, since information is a bunch of `Events` put together

> The scientist explains to Bob that his goal is to be in control of a space ship that is going to be sent away to find a new planet for humans to live in.

- [ ] Being a digital entity, Bob can create a logical clone of Bob with his current memory
- [ ] Clones can learn new memories and are independent entities with their own name

> He also explains that he's a Von Neumann probe created by the Free American Independent Theocratic Hegemony (F.A.I.T.H.) government to win the space race of finding a new planet for humans to live in.

> [Von Neumann probes](https://en.wikipedia.org/wiki/Self-replicating_spacecraft) are self-replicating spacecrafts that can make copies of themselves using the resources they find in space.

> Bob will be in charge of the Ship and the Roamer that will be sent to space

> August 17, 2133
> Launch day

- [ ] The Ship is Bob's physical support and he is integrated into the ship's computer. For most purposes, Bob is the Ship
- [ ] A single Bob can only control one ship setting a Destination.
- [ ] Acceleration and deceleration are automatic but have a limit of 2.5g

> Bob has a list of planets that are likely to be habitable extracted from human knowledge databases.

> Bob has access to most of [the knowledge](https://www.omnicalculator.com/physics/space-travel) of humanity.
> Bob is its way to the nearest star system, Epsilon Eridani, 10.47 light-years away.

- [ ] Bob wants to calculate the time it will take to get there in the Ship's frame of reference
- [ ] Bob wants to calculate the time it will take to get there in Earth's frame of reference

> Bob has alwas wanted to sees Saturn's rings up close. So cool.

- [ ] The Ship has a limited storage capacity for 4 ROAMers.
- [ ] The Ship has a limited amount of resources that can be used to build 4 extra ROAMers.

> Bob has an available 3D printer to build Roamers parts or any other device, such as more 3D printers or Roamers.

> The resources are limited and Bob needs to be careful with them, but the Roamers can be used to gather more resources while in space.

- [ ] Bob can create new Ships if he has the resources to do so
- [ ] It takes 1 year to build a new Ship
- [ ] Bob can `send` a copy of himself and store it in a new Ship's computer
- [ ] A new ship requires a new Bob to be controlled

> August 2144, Epsilon Eridani
> Habitable planets found: 0
> Potential terraformable planets found: 3
