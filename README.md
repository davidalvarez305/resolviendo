Run local application:

Step (1): Start XServer.

Step (2): Start Android Studio & run emulator.

Step (3): Start Windows Command Prompt bridge.

Kill the existing server:
```
adb kill-server
```

And then restart the server:
```
adb -a nodaemon server start
```

Step (4): Run Socat TCP-Listen on WSL2:

```
socat -d -d TCP-LISTEN:5037,reuseaddr,fork TCP:$(cat /etc/resolv.conf | tail -n1 | cut -d " " -f 2):5037
```

Step (5): Start React-Native:

```
cd mobile && yarn start
```

Step (6): Start Android App:

```
cd mobile && yarn android
```
