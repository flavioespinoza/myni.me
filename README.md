# myni.me

## Main Problem to Solve

Generate unique URLs that consist of 7 alpha-numeric characters that can be coordinated over multiple app instances and DB instances.

## Design Goals

1. We should be able to store a lot of links, since we're not automatically expiring them.
1. Our shortened url should be as short as possible. The whole point of a link shortener is to make short links! Having shorter links than our competition could be a business advantage.
1. Following a shortened url should be fast.
1. The shortened url follower should be resilient to load spikes. One of our links might be the top story on Reddit, for example.

## Questions

1. What is the length of the URL, which is shorter. 
1. What is the traffic, or what is the volume of traffic. 
1. Is the system, a single instance or should we scale it. Let's make some assumptions about traffic and the length of the shortened URL.

### Number of users

Twitter has about 300 million active users per month. If we are 10% as popular as Twitter, that means that we might get 30 million users and that equals to 1 million users a day.

Consider reads and writes, which these 1 million users making our system.

Now, let's make some assumptions on your level that is charging your company for domain is you.

### How to generate unique code

So we'd have to have generate a unique code, which maps to the longer right so let's keep the length of the report to 7 characters.

Using 62 different characters we can generate 7 character the unique ID. It is based in, we can only we can generate seven characters unique ID. We can get 62 to the power of seven. That is about 3.5 trillion combinations of unique IDs. This will significantly reduce chance of collision.

### How to scale

We will need to use a coordination service that keeps everything coordinated.

We can use something like Apache ZooKeeper.

> Zookeeper is a distributed, open-source coordination service for distributed applications. It exposes a simple set of primitives that distributed applications can build upon to implement higher level services for synchronization, configuration maintenance, and groups and naming. It is designed to be easy to program to, and uses a data model styled after the familiar directory tree structure of file systems. It runs in Java and has bindings for both Java and C.

> Coordination services are notoriously hard to get right. They are especially prone to errors such as race conditions and deadlock. The motivation behind ZooKeeper is to relieve distributed applications the responsibility of implementing coordination services from scratch.

- https://zookeeper.apache.org/doc/r3.5.4-beta/zookeeperOver.html