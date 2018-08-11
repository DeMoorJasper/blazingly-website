---
id: install
title: Installing blazingly
sidebar_label: Installing blazingly
---

### Global

using yarn

```bash
yarn global add @blazingly/cli
```

or using npm

```bash
npm install -g @blazingly/cli
```

### Local

You can also install it locally if you don't want to clutter your global package folder with dozens or hundreds of packages.

using yarn

```bash
yarn add @blazingly/cli -D
```

or using npm

```bash
npm install @blazingly/cli -D
```

Create a scripts section in your package.json, otherwise it's probably not gonna work

```Json
{
  "scripts": {
    "serve": "blazingly serve ./src",
    "build": "blazingly build ./src",
    "production-server": "blazingly prod-serve"
  }
}
```
