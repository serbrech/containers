# Cheat Sheet

##### Generate a swarm discovery id
``` 
docker-machine env --shell powershell my-default | iex 
docker run swarm create
```

##### Create a swarm master
``` 
docker-machine create -d hyperv --swarm --swarm-master --swarm-discovery token://<TOKEN-FROM-ABOVE> swarm-master 
```

##### Create three boot2docker Hyper-v VMs used for the swarm
