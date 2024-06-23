---
title: Startup for MacOS
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

MacOS is a unix like OS, that means the workflow on Mac will similar with Linux. And the experiment even better than some Linux ditro like Ubuntu.
To setup the working enviroment for MacOS, we need to do some preparation.

In this page, only the macOS exclusive setup will be introduced.
For the common unix setup, please check the [Linux page](./linux.md).

## Working Flow

MacOS has the advantages of both windows and linux.
You can work with VSCode, as you would on Windows, or use Vim and the terminal, as in a Linux distribution.
Alternatively, you can use both depending on the situation!
For the VSCode section, check out the VSCode page.

---

## Setup


### Package manger: Homebrew

[Homebrew](https://brew.sh/) is the most commonly used package manager on OSX and and I highly recommend using it. It enables the installation of almost any software you might need. For Macs with Apple Silicon chips, applications installed via Homebrew are found in the `/opt/homebrew` directory.

**Installation :** follow the [official guide](https://brew.sh/).

You can install the software using Homebrew with the command 
```
brew install <package>
```

### Terminal emulator: iTerm2

There are several options for OSX, but the most popular one is **iTerm2**. For beginners, I recommend **iTerm2** due to its rich functionality as a terminal emulator. Once you become more nerdy, you might want to explore other terminals. At that point, I would suggest trying **Alacritty**.

**Installation**: there are two ways to install iTerm2.
<Tabs>
<TabItem value="Downloads">

You can install it from the package available on the [official website](https://iterm2.com/downloads.html).

</TabItem>
<TabItem value="CLI">

Alternatively, if you prefer using Homebrew to manage all your applications, you can install it with the follow command:
```bash
brew install --cask iterm2
```

</TabItem>
</Tabs>

### CERN ROOT

[Root](https://root.cern/) is a data analysis tool used in High Energy Physics (HEP). At present, all HEP members are required to use it.

- **Install ROOT:** On OS X, you can easily install ROOT using Homebrew with this one-line command: `brew install root`.

:::note
In most operating systems, such as Ubuntu, there isn't an easy way to install ROOT. You typically need to find a specific distro’s binary file or build it yourself. This process requires some Linux knowledge, which can be challenging for new students.
:::


### Editor: Vim

You need to select a command-line text editor to edit plain text files in the terminal, even if you choose to use Visual Studio Code. Traditionally, there are two choices: **vim** or **nano**.

:::tip
 I personally recommend **vim (neovim)**. --Tong
:::

- **Install vim:** Typically, vim and nano come preinstalled in the system. If the command is not found, you can use the homebrew install command to install it: `brew install vim`.
- **Install Neovim:** To use Neovim, enter `brew install neovim` in your command line.

### Editor: VSCode

You also can use vscode as your main editor.

### XQuartz

To display the remote x11 window on local, except to do the X11forwarding you also need to install the X11 software in your computer. For mac, the only selection is XQuartz.

**Installation:** https://www.xquartz.org/

---

## Environment Setup

### **SSH config**

Refer to this page [SSH](https://www.notion.so/SSH-ac0479d192014d97bb8965866d2eedea?pvs=21).

:::warning

**Caution**

macOS utilizes BSD tools, which can differ from the typical Linux tools provided by GNU. Therefore, some commands may have different behaviors between macOS and Linux, such as **`sed`**.

If you prefer to use the GNU utilities, you can install them via Homebrew with the following command:

```bash
brew install coreutils
```

After installation, you can use the GNU version of commands by prefixing them with 'g' (e.g., **`gsed`**).

:::
