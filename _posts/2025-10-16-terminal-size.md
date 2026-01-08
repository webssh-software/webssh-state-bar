---
# -- Main Metadata --
layout: script
title: Terminal Size
description: |
  Shows the current terminal size (columns x rows) in the state bar.
date: 2025-10-16
author: 
  - isontheline
categories:
  - State Bar Item
  - Terminal
  - Size
tags:
  - Terminal
  - Size
# -- Script Metadata --
icon: "rectangle.expand.diagonal"
targets:
  - Linux
  - macOS
  - FreeBSD
  - Windows
compatibility:
  WebSSH: ">=30.5"
  iOS: ">=26.0"
  iPadOS: ">=26.0"
  macOS: ">=26.0"
capabilities:
  - terminal_get
script: |
  (function() {
    return {
        label: $terminal.getCols() + 'x' + $terminal.getRows(),
        icon: 'rectangle.expand.diagonal'
    } 
  })();
---

This script displays the current terminal size in the state bar of WebSSH. It retrieves the number of rows and columns of the terminal using the `$terminal.getCols()` and `$terminal.getRows()` methods, and formats them as "columns x rows" for display. This can be useful for quickly checking the terminal size without needing to run additional commands or scripts.
