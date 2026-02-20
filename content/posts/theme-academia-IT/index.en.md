---
weight: 1
title: "Mounting Remote Folders on macOS with FUSE-T and SSHFS"
date: 2026-02-20T20:20:01+08:00
lastmod: 2026-02-20T20:20:01+08:00
draft: false
author: "Gustavo"
authorLink: "https://gquino.com"
description: "Mounting remote folder on macOS."

images: []
resources:
- name: "featured-image"
  src: "featured-image.jpg"

tags: ["macOS", "SSHFS", "FUSE-T", "remote-storage", "dev-tools"]
categories: ["Academia"]

lightgallery: true

toc:
  auto: false
---

Mounting a remote server as if it were a local folder can make your workflow much smoother, especially when working with shared lab or project storage. On modern macOS (Intel and Apple Silicon), the combination of **FUSE-T** and **SSHFS** is a clean way to do this without lowering your system's security settings.

This post walks through setting up FUSE-T and SSHFS to mount a remote folder (e.g. a home or group directory on a Linux server) directly into Finder.

---

## Overview

We'll:

1. Install **FUSE-T** and **sshfs-mac** via Homebrew
2. Fix a small library compatibility issue with a symlink
3. Create a local mount point
4. Add a convenient shell alias so mounting is a one-liner
5. Cover basic usage and unmounting
6. Handle the Finder name "fuse-t" vs "Rlab"
7. Adjust macOS privacy permissions if needed

> These steps assume:
> - You have [Homebrew](https://brew.sh/) installed
> - You can SSH into your remote host (e.g. `ssh username@server` works)

---

## 1. Install Required Tools

First, install FUSE-T (the filesystem layer) and SSHFS (the actual SSH-based filesystem):

    brew install --cask fuse-t
    brew install gromgit/fuse/sshfs-mac

- **FUSE-T** handles the user-space filesystem logic.
- **sshfs-mac** provides the `sshfs` command that mounts a remote directory over SSH.

---

## 2. Fix Library Compatibility

Some builds of `sshfs` still expect an older FUSE library name (`libfuse.2.dylib`) in `/usr/local/lib`. FUSE-T installs `libfuse-t.dylib` instead. Create a symlink so `sshfs` finds the correct library:

    sudo mkdir -p /usr/local/lib
    sudo ln -s /usr/local/lib/libfuse-t.dylib /usr/local/lib/libfuse.2.dylib

This does **not** overwrite anything. Verify the link with:

    ls -l /usr/local/lib/libfuse.2.dylib

You should see it pointing to `libfuse-t.dylib`.

---

## 3. Create a Local Mount Point

Choose a directory on your Mac where the remote filesystem will appear:

    mkdir -p ~/Rlab

After mounting, everything under the remote path will show up inside this folder.

---

## 4. Add a Shell Alias for Easy Mounting

1. Open your Zsh configuration file:

       nano ~/.zshrc

   > If the file is empty, that is normal on a fresh setup — you are just creating your custom config.

2. Add the following line at the bottom, replacing `username` with your actual login:

       alias mountrlab='sshfs username@server:/remotedirectory ~/Rlab -o volname=Rlab,defer_permissions,follow_symlinks,auto_cache,local'

   **What these options do:**
   - `volname=Rlab` — suggested volume name for Finder
   - `defer_permissions` — lets the remote server handle permissions
   - `follow_symlinks` — ensures remote symlinks behave as expected
   - `auto_cache` — improves performance by caching file attributes
   - `local` — asks macOS to treat the mount more like a local volume

3. Save and exit Nano: `Ctrl + O`, `Enter`, then `Ctrl + X`

4. Reload your shell config:

       source ~/.zshrc

From now on, mount your remote folder with a single command:

    mountrlab

---

## 5. Using the Mounted Folder

### 5.1 Mounting

    mountrlab

You will be prompted for your SSH password or passphrase. Once mounted, the remote directory appears inside `~/Rlab` and in **Finder** under **Locations**.

### 5.2 Unmounting

Before disconnecting from Wi-Fi or sleeping your Mac, unmount cleanly:

    umount ~/Rlab

If you get a "resource busy" error, force unmount with:

    diskutil unmount force ~/Rlab

---

## 6. Finder Name Quirk (fuse-t vs Rlab)

On some versions of macOS/FUSE-T, the mounted volume may appear in Finder as **"fuse-t"** instead of **"Rlab"**. To fix this:

1. Mount using `mountrlab`
2. Open **Finder**
3. In the sidebar under **Locations**, right-click the mounted volume
4. Choose **Rename** and set it to **Rlab**

macOS usually remembers this display name for subsequent mounts.

---

## 7. Permissions & Privacy Settings

If you see "Operation not permitted" or similar errors:

1. Go to **System Settings → Privacy & Security → Full Disk Access**
2. Ensure **Terminal** is toggled **ON**
3. Restart Terminal and try `mountrlab` again

---

## Summary

With FUSE-T and SSHFS set up, you can:

- Mount remote Linux or UNIX directories directly into Finder
- Work with remote files as if they were local (edit, browse, copy, etc.)
- Use a simple `mountrlab` command instead of manually copying files back and forth
- Keep macOS security at its default level (no "Reduced Security" kernel extension modes needed)

To adapt this for a different server, just update the alias in `~/.zshrc`:

    alias mountmysrv='sshfs username@myserver.example.com:/path/on/server ~/MyMount -o volname=MyMount,defer_permissions,follow_symlinks,auto_cache,local'

