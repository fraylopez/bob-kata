# Bob kata

\*Based on the Bobiverse book series by Dennis E. Taylor

## Introduction

The kata is divided into several steps, each one building on top of the previous one.

This is a Domain Modeling kata, so you should focus on the domain and the interactions between the different entities.

It is recommended to be done in a TDD fashion, so you should write tests for each step before implementing it.

## The story

### Chapter 1

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

### Chapter 2

> June 25, 2133
> Bob wakes up. A scientist explains to him that he is a clone of the original Bob and that he has been brought back to life using the memories stored in the original Bob's head.

- [ ] Bob has the same memory he had before. He remembers the accident and the decision to store his head.
- [ ] Bob can learn and store new Memories in his Brain
- [ ] Bob has perception of `Time`.

> The scientist explains to him that he is now a digital entity deployed in a computer system. So he has no body but some interesting abilities.

- [ ] Bob can modify his perception of Time and `wait` for a given amount of time. From his perspective, time will pass instantly.
- [ ] Bob can slow down his perception of Time and `bulletTime`. From his perspective, time will pass slower.

### Chapter 3

> June 25, 2133
> The scientist explains to Bob that he has no body, but that he can interact with the world through a computer interface that controls small atonomous IA robots called "ROAMers" (Remote Observation And Manipulation devices).

- [ ] Bob can move a `Roamer` to a given `Position`
- [ ] Bob can order a Roamer to perform a `Command`
- [ ] A Command takes `completionTime` to be completed. Bob can `wait` for a Roamer to finish a Command. If Bob `wait`s for a time greater than `completionTime`, the Command is completed but Bob can't do anything else until the Roamer finishes the Command.
- [ ] A Command can fail to be completed. The Command has a `successRate` that determines the probability of success in percentage and a `failureTime`, as a percentage of `completionTime` that determines the time it takes to fail

### Chapter 4

> June 26, 2133
> The scientist asks Bob to practice with the Roamers to get used to them.

- [ ] Bob can move a Roamer to a given Position (x,y,z)
- [ ] Bob can order a Roamer to perform a `PuzzleCommand`.
- [ ] Since it is the first time Bob uses a Roamer, the Command has a `successRate` of 20% and a `completionTime` of 1 minute.
- [ ] Once a Command succeeds, Bob can order a Roamer to perform a `PuzzleCommand` with a `successRate` of 100% and a `completionTime` of 50% of the original time.

### Chapter 4

> June 26, 2133
> The scientist tells Bob that he can perceive the world through the Roamers and that he can learn from the information they gather.

- [ ] A Roamer can sense the world around it and store in an internal memory as Events.
- [ ] Bob can sense what a Roamer senses, meaning he can pull Events from the Roamer's and process them as if they were his own
- [ ] Bob can only command one Roamer at a time. In other words, Bob is single threaded. He can do concurrent actions but no parallel actions.

> The scientist gives Bob access to digital information about the world and the current state of technology.

- [ ] Bob can also `LearnCommand` from any information source he has access to, since information is a bunch of `Events` put together
- [ ] Bob can learn potentially any information, but `successRate` and `completionTime` are determined by the complexity of the information and the amount of information he already knows. You or he "Game master" can determine the `successRate` and `completionTime` of any Command
- [ ] Bob can learn how to speak `SpanishLearnCommand`, with a `successRate` of 100% and a `completionTime` of 1 second.

### Chapter 5

> The scientist explains to Bob that his goal is to be in control of a space ship that is going to be sent away to find a new planet for humans to live in.

> [Von Neumann probes](https://en.wikipedia.org/wiki/Self-replicating_spacecraft) are self-replicating spacecrafts that can make copies of themselves using the resources they find in space.
> He also explains that he's a Von Neumann probe created by the Free American Independent Theocratic Hegemony (F.A.I.T.H.) government to win the space race of finding a new planet for humans to live in.
> Bob will be in charge of the Ship and the Roamer that will be sent to space

- [ ] Being a digital entity, Bob can create a logical clone of Bob with his current memory
- [ ] Clones can learn new memories and are independent entities with their own name

### Chapter 6

> August 17, 2133
> Launch day

- [ ] The Ship is Bob's physical support and he is integrated into the ship's computer. For most purposes, Bob is the Ship
- [ ] A single Bob can only control one ship setting a Destination.
- [ ] Acceleration and deceleration are automatic but have a limit of 2.5g

### Chapter 7

> Bob has a list of planets that are likely to be habitable extracted from human knowledge databases.

> Bob has access to most of [the knowledge](https://www.omnicalculator.com/physics/space-travel) of humanity.
> Bob is its way to the nearest star system, Epsilon Eridani, 10.47 light-years away.

- [ ] Bob wants to calculate the time it will take to get there in the Ship's frame of reference
- [ ] Bob wants to calculate the time it will take to get there in Earth's frame of reference

### Chapter 8

> Bob has alwas wanted to sees Saturn's rings up close. So cool.

### Chapter 9

> Bob has an available 3D printer to build Roamers parts or any other device, such as more 3D printers or Roamers.
> The resources are limited and Bob needs to be careful with them, but the Roamers can be used to gather more resources while in space.

- [ ] The Ship has a limited storage capacity for 4 ROAMers.
- [ ] The Ship has a limited amount of resources that can be used to `BuildRoamerCommand` 4 extra ROAMers.
- [ ] Bob can create new Ships if he has the resources to do so
- [ ] It takes 1 year to build a new Ship
- [ ] Bob can `send` a copy of himself and store it in a new Ship's computer
- [ ] A new ship requires a new Bob to be controlled

> August 2144, Epsilon Eridani
> Habitable planets found: 0
> Potential terraformable planets found: 3
