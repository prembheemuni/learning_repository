1. System design video by freecodecamp
2. System design fundamentals by https://www.karanpratapsingh.com/courses/system-design


## CAP Thorem :
Cap Theorem tells us that in a event of network partition(when the communication between any two nodes fails in a distributed system). the system has to choose any two among the CONSISTENCY, AVAILABILITY , PARTIOTION TOLERENCE.

Note : node means database replica and network partition means communication failure between distributed systems

1. CONSITENCY : At any point of time at any node(database) the data should be same, the every read request at any node(main or read replica of a databse) shoud return most recent write data. the request takes time because it should update all database nodes because to make system consistent. 

2. AVAILABILITY: The incoming request will always get response. may be its outdated data or a most recent data

3. PARTITION TOLERENCE : If communication between any node fails the other nodes should work as they are supposed to, either we can stut down the node untill the connection established or allow the node to provide the old data to the users.

The Choice : 
1. CA : Consistent and Available, if network partition happens between any two nodes, example: Bank Transactions
2. CP : Consistent and Partition tolerence, if network partition happens, the corresponding node will be shut down, because to make it consistent, and availability fails here because the users who connected to the node will receive errors
3. AP : Availability and Partition Tolerence , if network partition happens, the corresponding node will serve the older data to make it available, here consistency is failing.
   

 ## PACELC Theorem:

1. The PACELC Theorem takes this further by saying that, even when there is no partition (i.e., the system can communicate normally), there are still trade-offs between the properties of latency and consistency.

#### Network partion happens(Some servers cannot talk to each other choose any one below)
  1. Consistent : The data is same across all nodes, the problematic node will be deactivated untill it is resolved, users face api failures unitill resolved
  2. Available : The Node is available with outdated data untill the network connection resoled or re-established

### No Network partition happens( Communication is working fine )
  1. Latency : The request will be resolved at the earliest shows the outdated data
  2. Consistent: The request will be long(because it needs to update all replicas) and it provides latest write data

 

