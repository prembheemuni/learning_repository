

`Running Kafka` 

```
docker run -p 2181:2181 zookeeper  

docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.1.3:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.3:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

`Running consul`

```
consul agent -dev
```

`Mongo restart in mac`

```
 brew services restart mongodb-community@7.0;
```



