FROM microsoft/aspnet

COPY ./DockerHello/ /demo/
WORKDIR /demo
RUN xbuild DockerHello.sln
ENTRYPOINT ["mono", "DockerHello/bin/Debug/DockerHello.exe"]