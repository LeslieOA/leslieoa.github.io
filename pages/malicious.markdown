---
title: Malicious Markdown
slug: malicious-markdown
tags: rce, js
template: default
description: Let's sanitise markdown, just in-case... 
date: 16/02/2020 18:01
---

## Where bad things happen

> Let's sanitise markdown, just in-case... 

## Attack 1
<img src=x onerror=alert(1) //>

## Attack 2
<svg><g/onload=alert(2)>//<p>

## Attack 3
<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>

--

See [Some purification samples please?](https://github.com/cure53/DOMPurify#some-purification-samples-please)
