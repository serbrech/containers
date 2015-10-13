#### Install Windows 2016 TP3
This step is omitted from this cheatsheet. Please see [this documentation](https://msdn.microsoft.com/en-us/virtualization/windowscontainers/quick_start/container_setup "Setup") for details.

#### Ensure the Containers feature is enabled
Login to the server and run:
```
powershell -command Get-WindowsFeature -name Containers
```
The containers tab should be checked

#### Start cmd in a container
First, check the computername on your container host: `echo %computername%`. On my machine it happens to be `WINDOWS-5IE6G41`.

Next, we'll start a container and jump into its command prompt
```
docker run -it windowsservercore cmd
```

Once the container started up, run `echo %computername%` again. You should notice it's different from your container hosts name.

#### Build a windows container
The goal here is to build a container that will enable the IIS feature and copy a simple html file to our web directory. If you're still inside your container from the previous example, run `exit` now.

Back on the Container host, create a new file using: `new-item -Type File c:\build\Web\source\index.html` and add the following html to it:
```
<!DOCTYPE html>
<html>
<head>
<title>Docker@Windows</title>
</head>
<body>
<h1>Docker on Windows!</h1>
<p>Yea, it's pretty cool. :-)</p>
</body>
</html>
```


Next, lets create the docker file: `new-item -Type File c:\build\Web\dockerfile` and add the following:
```
FROM windowsservercore
LABEL Description="Hello from Windows" Vendor="webstep" Version="1.0.0"
RUN @powershell -NoProfile -ExecutionPolicy unrestricted -Command "&{Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole}"
ADD ./source/ /inetpub/wwwroot/
```
The dockerfile is based on the windows server core and will ensure that IIS is being installed and that the html file is copied to the wwwroot.

It's time to build the image. We can do so by running:
```
docker build -t hello_windows C:\build\Web
```

When the image is ready we can do `docker images` and it should show our newly created image.

#### Run the container based on our image
Next we can run the container, based on the hello_windows image. Lets expose port 80 and start up cmd.
```
docker run -it -p 80:80 hello_windows cmd
```

This should be enough for us to browse our super fancy site. The IP should be the container hosts IP.
