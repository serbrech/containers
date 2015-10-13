# Cheat Sheet

#### Generate a swarm token
Running the commands below will generate a new swarm token (the last line of the output). The token is used to uniquely identify your swarm and looks something like: `cbe1a72d1f24899c20e075a2b288c266`
```
docker-machine env --shell powershell my-default | iex
docker run swarm create
```

#### Create a swarm master + node
```
docker-machine create -d hyper-v --hyper-v-memory "3072" --swarm --swarm-master --swarm-discovery token://<token> swarm-master
```

#### Create two additional nodes
```
docker-machine create -d hyper-v --hyper-v-memory "1024" --swarm --swarm-discovery token://<token> swarm-node-1
docker-machine create -d hyper-v --hyper-v-memory "2048" --swarm --swarm-discovery token://<token> swarm-node-2
```

#### Connect to a swarm master and check its info
```
docker-machine env --swarm --shell powershell swarm-master | iex
docker info
```

#### Discovery service
Swarm currently supports five different discovery services out of the box. `docker hub`, `consul`, `etcd`, `static file` and `zookeeper`. To use another discovery protocol, replace the `token://<token>` with `consul://<token>`, `etcd://<token>`, `file://<token>` or `zk://<token>`.

In this example we'll only use the docker hub discovery service. The info can be viewed by running either of the commands below:
```
docker info
https://discovery-stage.hub.docker.com/v1/clusters/<token>
```

#### Run a container in the swarm
```
docker run -m 600mb -p 8080:2368 -d ghost
docker ps
```
Notice that under names you'll see something like `swarm-node-1/sad_bardeen`. When running in a swarm, name will be <node>/<containerName>. Also, note that we're allocating 600mb of resources for each container.

Fire up a few more containers:
```
1..5 | % { docker run -m 600mb -p 808$($_):2368 -d ghost }
```

#### Constraint Filters
We can filter the available nodes by using constraints. These constraints are typically node specific attributes. For example, we can specify that ghost can only run on nodes which has the label environment=test set. Arbitrary labels can be set on nodes in addition to built-in ones. Such as operating system, node id or execution driver.
```
docker run -m 400mb -p 8082:2368 -e constraint:environment==test -d ghost
```

#### Affinity Filters
Affinity filters are used control containers in relation to eachother. For example, we can specify that ghost can only be ran on nodes that is also running nginx.
```
docker run -d --name nginx nginx
docker run -m 400mb -p 8082:2368 -e affinity:container==nginx -d ghost
```
