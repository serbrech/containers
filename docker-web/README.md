## Run an aspnet v5 app on dot net core in docker

This uses the microsoft base image for coreclr, setup to run a aspnet5 app on the kestrel webserver.
So much buzzword..

1. `docker build . -t webstep/docker-web`
2. `docker run -p 5000:5000 webstep/docker-web`
3. `open http://<host ip address>:5000`

If you don't know what is your host ip address, this command should help : 

	$(docker-machine ip $(docker-machine active))

