# Some helpers

## Remove all dead containers
docker rm $(docker ps -a -q)

## Remove all unnamed images
docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")