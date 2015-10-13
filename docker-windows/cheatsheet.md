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

#### Testing stuff...

On your host, run:
```
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "&{$Branch='dev';iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))}"
```
