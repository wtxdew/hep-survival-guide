---
id: computer_selection
title: 2FA Setup for Mac
sidebar_position: 3
---

# 2FA wouldn’t ruin your live (MacOS only)

## [2FA for CERN](https://cern.service-now.com/service-portal?id=outage&n=OTG0156449)
2FA would be required since Sep 2nd, 2025. It required users check 2FA code on smartphone but it is very inconvenient for SSH connection. So this section shows how I paste 2FA code without my smartphone.

## Requirements
* [raycast](https://www.raycast.com/) A spotlight like program. By typing command, you can access a lots of functions in your computer, this program is MacOS only. For windows / Linux users, you need to find an alternative program.
* [One Time Password](https://www.raycast.com/lachero/one-time-password) A raycast plugin to get 2FA code, you need to configure the detail of this program
* **Super Key** This is the core of 2FA, a string you can find code `IESLXGFTYGUHJNBHGT` as super key, you need to put it into raycast One Time Password plugin.
```
otpauth://totp/CERN:ltsai?secret=IESLXGFTYGUHJNBHGT&digits=6&algorithm=SHA1&issuer=CERN&period=30
```

## Setup
1. Install **Raycast** and **One Time Passwrod**
2. Find super key from QR code or link. [CERN Tutorials: step3](https://cern.service-now.com/service-portal?id=kb_article&n=KB0006587)
3. Open **Raycast** and search for **One Time Password**
4. Click “Scan QR” or “Enter super key” in “create new” entry.
5. Accomplish the setup


## How do use
Once you need to access 2FA code, open **Raycast** and **One Time Password** for coping 2FA code to clipboard. Such as you can paste it to browser and terminal in second.



## Additional tips: Use ControlMaster preventing SSH login again and again
SSH provides a lots of feature and you can set them into config file instead of write arguments every time.

```
#!/usr/bin/env sh
### test control master by command
ssh -o ControlMaster=auto \
    -o ControlPath=~/.ssh/master_%h_%p_%r \
    -o Protocol=2 \
    -o ForwardAgent=yes \
    -o ForwardX11=yes \
    -o ForwardX11Trusted=no \
    your_account@lxplus.cern.ch
```

The control master is designed to put a connection file in your computer, once you need to establish several connections to lxplus, the login process would be required only in first connection.

If this command worked, you can edit `~/.ssh/config` file to prevent writing arguments every time.

```
### content of ~/.ssh/config
Host lxplus lxplus.cern.ch
  ControlMaster auto
  ControlPath ~/.ssh/master_%h_%p_%r
  HostName lxplus.cern.ch
  User your_account
  Compression yes
  # Use SSHv2 only
  Protocol 2
  # Forward you SSH key agent so that it can be used on further hops
  ForwardAgent yes
  ForwardX11 no
  ForwardX11Trusted no
  # For X11
  #ForwardX11 yes
  #ForwardX11Trusted no
```

Once the config finished. Then you can use command `ssh lxplus` access lxplus and `scp lxplus:/dir/to/your/file newfile` coping files. Once the first connection is alive, the secondary connection follows the same login information.

