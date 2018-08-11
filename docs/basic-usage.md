---
id: basic-usage
title: Using Blazingly
sidebar_label: Using Blazingly
---

Blazingly has a very strict naming and folder structure convention. Besides that you can pretty much do whatever you want.

Project structure:
```
/root
  /.root - This is the root of the project '/' route
  /<page-name> - This is a route to whatever you put as pagename for example a folder named hello will result in '/hello'
  /contact - This is an example of a possible folder name/route results in '/contact'
    /css - This contains all css files for the app, every file as a direct child of this folder is considered an entrypoint
      /<subfolder> - subfolders of the css folder are not being used as entrypoints
      style.css - Entrypoint transpiled by postCSS
      anotherstyle.scss - Entrypoint transpiled by node-sass
    /js - This contains all the javascript code for the page
      App.js - This is the entrypoint (You can use any extension as long as parcel understands it and it outputs as Javascript)
    pageData.json - This file can contain any page specific data
    handleRequest.js - This file handles allows you to add custom pre-processing and data injection into the app, before it gets rendered (You can use any extension as long as parcel understands it and it outputs as Javascript)
  siteData.json - This file can contain any site specific data
```

Starting the application:
```bash
blazingly serve <folder containing all the pages {in the above case ./root}>
```

Building for production
```bash
blazingly build <folder containing all the pages {in the above case ./root}>
```

Starting the production server (run blazingly build first!)
```bash
blazingly prod-serve <the output folder of the build command>
```