# Cheat Sheet

##### Generate a swarm token
Running the commands below will generate a new swarm token (the last line of the output). The token is used to uniquely identify your swarm and looks something like: `cbe1a72d1f24899c20e075a2b288c266`
``` 
docker-machine env --shell powershell my-default | iex 
docker run swarm create
```

##### Create a swarm master + node
``` 
docker-machine create -d hyper-v --swarm --swarm-master --swarm-discovery token://<token> swarm-master 
```

##### Create two additional nodes
```
1..2 | % { docker-machine create -d hyper-v --swarm --swarm-discovery token://<token> swarm-node-$_ }
```

##### Connect to a swarm master and check its info
```
docker-machine env --swarm --shell powershell swarm-master | iex
docker info
```
