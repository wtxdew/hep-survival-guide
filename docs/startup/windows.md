---
title: Startup for Windows
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

For Windows users, I suggest utilizing the Windows Subsystem for Linux (WSL) as your local working space instead of a virtual machine. You have two options for server connections: you can connect to the server via SSH using WSL, or you can utilize the VSCode Remote SSH extension to connect directly to the server.

## WSL
### Windows Terminal

For running your bash (WSL) or PowerShell, it is strongly recommended to use a Windows terminal for the reasons of convenience and aesthetic!!

Installation: Install Windows terminal via [Microsoft Store](https://apps.microsoft.com/detail/9N0DX20HK701?rtc=1&hl=zh-tw&gl=TW)

**Reference:**
[Windows 終端機概觀](https://learn.microsoft.com/zh-tw/windows/terminal/)

### Installation

:::warning

During the installation process, make sure you understand what you are typing.

:::

If you are comfortable with Ubuntu, you can refer to Microsoft's official installation guide to install WSL.

[Install WSL](https://learn.microsoft.com/zh-tw/windows/wsl/install)

However, if you prefer to install a different distribution not included in the official list, I can provide guides for two common distros: **Arch** and **Fedora**.

```mdx-code-block
<Tabs>
<TabItem value="Fedora">
```
**Fedora:** You can install Fedora WSL from [Microsoft Store](https://apps.microsoft.com/store/detail/fedora-wsl/9NPCP8DRCHSN) (Recommend) **OR** if you don't want to use Microsoft Store then download the latest msix package from [Release Page](https://github.com/VSWSL/Fedora-WSL/releases/latest)
    - "This is an unofficial Fedora WSL based on the rootfs of Fedora docker images with a few packages installed to make your life easy"
    - [Reference](https://github.com/VSWSL/Fedora-WSL?tab=readme-ov-file#readme)

```mdx-code-block
</TabItem>
<TabItem value="Arch">
```

**Arch:** [How to Setup | ArchWSL official documentation (wsldl-pg.github.io)](https://wsldl-pg.github.io/ArchW-docs/How-to-Setup/)

```mdx-code-block
</TabItem>
</Tabs>
```

---

## VSCode Remote SSH

import vscodeImageUrl from './vscode-ssh-config.png';

### Setup
<img align={"right"} src={vscodeImageUrl} alt="vscode-ssh-config" style={{width: '220px'}} />
- Install the following extensions:
    - Remote - SSH
    - Remote - WSL (optional: if you want to use VSCode to access the WSL)
- After installation, you can connect to the remote server using these extensions.
- I suggest configuring your SSH settings to simplify the connection process. Refer to steps 1 and 2, as shown in the image.
- Here is the guide for [SSH Configuration](https://www.notion.so/ac0479d192014d97bb8965866d2eedea?pvs=21).
