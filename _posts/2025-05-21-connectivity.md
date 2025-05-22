---
# -- Main Metadata --
layout: script
title: Connectivity ⚑
description: |
  Shows an icon based on the status of the SSH connection.
date: 2025-05-21
author: 
  - isontheline
categories:
  - State Bar Item
  - Session
  - Connectivity
tags:
  - Connectivity
  - Session
# -- Script Metadata --
icon: "cable.connector"
targets:
  - Linux
  - macOS
  - FreeBSD
  - Windows
compatibility:
  WebSSH: ">=29.3"
  iOS: ">=17.2"
  iPadOS: ">=17.2"
  macOS: ">=14.0"
capabilities:
  - ssh_isConnected
script: |
  (function() {
    let icon = $ssh.isConnected() ? 'cable.connector' : 'cable.connector.slash'
    return {
        label: '',
        icon
    } 
  })();
---

Tiny script that shows an icon based on the status of the SSH connection. It uses the `$ssh.isConnected` to determine if the connection is active or not. If the connection is active, it shows a connected cable icon; otherwise, it shows a disconnected cable icon.
