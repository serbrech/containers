
# General demo cheatsheet

## docker-machine

`eval "$(docker-machine env default)"`

`docker-machine --debug create mynewhost -d virtualbox`



## docker


## docker-compose

in the docker-compose folder : 
this is using the docker-node image


## docker-swarm

[docker-swarm cheatsheet](docker-swarm/cheatsheet.md)

## Some helpers

#### Remove all dead containers
docker rm $(docker ps -a -q)

#### Remove all unnamed images
docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")
