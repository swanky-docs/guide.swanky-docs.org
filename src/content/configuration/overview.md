## Overview

### Swanky Docs Configuration File

The Swanky Docs configuration file `swanky.config.yaml` is the entry point to defining how your documentation is created. It contains the basic meta details and the sections that make up your documentation.

*Basic swanky.config.yaml*

```
---
title                   : Swanky Docs
version                 : 0.0.0
src                     : src
output                  : docs
theme                   : docs/themes/dapper

sections                :
  - title               : Overview
    content             : src/content/overview.md

    subSections         :
      - title           : Setup
        content         : src/content/setup.md
...

```

#### Basic site meta configuration

Key      | Description                                          | Default
:--------| :--------------------------------------------------- | :------
title    | Title of your documentation site                     | Swanky Docs
src      | Folder to place documentation files in               | docs
output   | Folder to generate production build into             | build
theme    | Theme path                                           | docs/themes/[sitename]-theme
layout   | Custom layout template path **(optional)**           | docs/themes/[sitename]-theme/templates/layouts
partials | Custom partial templates path **(optional)**         | docs/themes/[sitename]-theme/templates/partials
serverPath | The folder where your built documentation will be served from. e.g. http://swanky-docs.io/docs | /
snippets | Location of your reusable html, css and js snippets | docs/snippets

#### Sections configuration

Key      | Description                                          | Default
:--------| :--------------------------------------------------- | :------
sections | Array of documentation pages                         | N/A

#### Page configuration

Key      | Description                                                | Default
:--------| :----------------------------------------------------------| :------
title    | Title of page. Will be used to generate page slug.         | N/A
content  | Path to content. Accepts glob pattern, url or direct path. | N/A
bootstrap    | This allows you to add a specific script to only be loaded on a particular page. This is very commonly used to "bootstrap" framework specific modules e.g. AngularJs / React         | N/A
preprocessor| Expects a key representing the preprocessor you want to run your content through. Each preprocessor may have individual options that can be passed. Please check the relevant Swanky Docs preprocessor documentation for further info. | N/A
