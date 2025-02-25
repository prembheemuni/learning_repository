### sharding in mongodb

- `Config server` mongodb allows us to create a max of 3 config servers. each config server must be deployed as replica server, those are primary
secondary and secondary. it contains the meta data for the cluster. for example list of shards, shard keys. if one fails other one works are primary
mongodb uses majority voting system to maintain high availability
- `shard` mongodb supports 1000 shards in sharded cluster. formula is number of shards = (totalDataSize / shardCapacity) + buffer
- `mongo router`

### Shard implementaion in mongodb
```
mongodb --configsvr --replSet configReplSet --dbpath c:\data\configdb1 --port 27019
mongodb --configsvr --replSet configReplSet --dbpath c:\data\configdb2 --port 27020
mongodb --configsvr --replSet configReplSet --dbpath c:\data\configdb3 --port 27021

// initializing the config replica set

// making cs1 as primary

mongo --port 27019
rs.initiate({_id : "configReplSet", configsrv:true, members:[{_id:0, host:'localhost:27019'},{_id:1, host:'localhost:27020'},{_id:3, host:'localhost:27021'}]))

rs.status()

// creating mongo router

mongos --configdb configReplSet/localhost:27019,


// creating shards

mongod --shardsvr --dbpath c:\data\shartd2 --port 27022


// adding shards

mongo --port 27078 // connect to router

sh.addShard('localhost:27022')

// enable sharding

sh.enableSharding("TestDB")


// shard the collection

sh.shardCollection("TestDB.users",{"email" : 1})

// note : shard key should be unique

sh.status()


```


Steps:

- Create config servers
- initialize config servers
- start mongo router using mongos
- add shards
- enable sharding on database
- shard collection with unique key





Revised steps:

- Create directories for cs1, cs2, cs3, shard1 shard2
- Start config servers as replica set
- Initialise config server replica set
- verify status as rs.status
- start the mongos router
- Start the shard router
