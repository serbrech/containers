#### Install Xming
Xming is a x server available for windows. In this example we'll use it to run a linux application in a docker container and output the X data to the host machine (running Windows).

Start by downloading xming from `http://sourceforge.net/projects/xming/`

#### Configure Xming
After installing, run `xlaunch.exe` and configure it as the images below:

![alt text](xming-1.png "Configure xming")

![alt text](xming-2.png "Configure xming")

![alt text](xming-3.png "Configure xming")

![alt text](xming-4.png "Configure xming")

#### Run Xming
The following will run xming and configure it for multiwindow, clipboard etc. on the local machine.
Run:
```
xming.exe :0 -multiwindow -clipboard -ac
```

#### Start a container
Next we'll start a new container running on a linux VM and export the display to your local machine.

Connect to a docker machine
```
docker-machine env --shell powershell my-default | iex
```

Check your local IP
```
ipconfig | select-string IPv4
```

Run a container that uses a UI (Duh) and export the display to your IP collected above. For example, Firefox.
```
docker run -e DISPLAY=192.168.0.100:0 jess/firefox
```
