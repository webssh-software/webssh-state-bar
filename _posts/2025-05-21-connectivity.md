---
# -- Main Metadata --
layout: script
title: Connectivity ⚑
description: |
  Shows an icon based on the status of the SSH connection.
date: 2025-09-03
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
  WebSSH: ">=30.0"
  iOS: ">=26.0"
  iPadOS: ">=26.0"
  macOS: ">=26.0"
capabilities:
  - ssh_isConnected
script: |
  (function() {
    let icon = $ssh.isConnected() ? 'cable.connector' : 'cable.connector.slash'
    return {
        label: $vars.get('WEBSSH_CONNECTION_NAME'),
        icon
    } 
  })();
---

Tiny script that shows an icon based on the status of the SSH connection. It uses the `$ssh.isConnected` to determine if the connection is active or not. If the connection is active, it shows a connected cable icon; otherwise, it shows a disconnected cable icon. It also displays the connection name as the label.