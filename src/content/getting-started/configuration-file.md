## Configuration File

Your Swanky Docs site will primarily be configured via the Swanky Configuration file. This file by default will be 
called `swanky.config.yaml` and will sit in the root of your project folder.

### Supported Formats

By default your Swanky Docs configuration file will be in the file format [YAML](http://yaml.org/). 
The __YAML__ format is very easy to read and write (especially for smaller projects). Swanky Docs also supports [JSON](http://www.json.org/) and [JavaScript](https://www.javascript.com/)
formats. The later can be especially useful when creating complex and dynamic configuration files. To use one of these optional extensions or a custom configuration file name you will 
need to configure the [swanky](https://github.com/swanky-docs/swanky) engine to use this file.

#### Development Server Configuration
```javascript
'use strict';

const devServer = require('swanky').devServer;

// Start swanky dev server
module.exports = devServer({
  configPath: 'my-swanky.config.js' // .yaml | .js | .json
});
```

#### Production Server Configuration
```javascript
'use strict';

const build = require('swanky').build;

// Retrieve webpack build configuration
module.exports = build({
  configPath: 'my-swanky.config.js' // .yaml | .js | .json
});
```

[wrap class="{$ styles.callout $}"]
If using the [Swanky CLI Tool](/swanky-cli-tool.html) please note that changing the default name of the `swanky.config.yaml` 
file will prevent the CLI tool from automatically locating your configuration file. Changing the extension type will not affect this functionality.
[/wrap]

### Configuration Options
The __Swanky Configuration__ file supports a number of options which are likely to change and grow over time. Use the 
table below to identify what configuration options are relevant to your project. All configuration options are optional (as the name suggests).

#### Basic Configuration

Key      | Type   | Details                                                                             | Default Value
:--------| :----  | :---------------------------------------------------------------------------------- | :------
title    | String | Title of your documentation site                                                    | `'Swanky Docs'`
src      | String | Folder containing documentation assets                                              | `'src'`
output   | String | Folder to build production ready assets into                                        | `'docs'`
theme    | String | Path to custom theme                                                                | `'Swanky Default Theme'`
layouts  | String | Path to custom layout templates                                                     | `'[theme-path]/templates/layouts'`
partials | String | Path to custom partials templates                                                   | `'[theme-path]/templates/partials'`
snippets | String | Path to folder containing snippets                                                  | `'[src]/snippets'`
repo     | String | URL to source code repository                                                       | `null`
version  | String | Documentation / Library version number                                              | `'0.0.0'`
sections | Array  | Pages used to build documentation site                                              | `null`

```yaml
# swanky.config.yaml basic configuration example

title: 'Swanky Docs'
src: 'src'
output: 'docs'
theme: 'src/themes/swanky-theme'
layouts: 'src/themes/swanky-theme/templates/layouts'
partials: 'src/themes/swanky-theme/templates/partials'
snippets: 'src/snippets'
repo: 'https://github.com/swanky-docs/swanky'
version: '2.0.0'
```

[wrap class="{$ styles.callout $}"]
All paths are relative to the root of your project folder.
[/wrap]

#### Sections Configuration
The following table outlines the configuration options for defining sections of content. At first it may seem overwhelming but in reality getting 
started is not very difficult at all. The wealth of options are available to you as your documentations complexity requirements increase. 
View the [Adding Content](/getting-started/adding-content.html) guide to get up and running quickly. The table below can be used as a reference in 
the future as you become more familiar and comfortable with the __Swanky Configuration__.

Key          | Type             | Details                                                                                                                                        | Default Value
:-------     | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :------
title        | String         | Title of your section                                                                                                                            | `null`
content      | String/Array   | Path to content or an array of content sources _(see examples below)_                                                                            | `null`
subSections  | Array          | Allows a second level of content hierarchy                                                                                                       | `null`
bootstrap    | Array          | Path/s to scripts that are required for page                                                                                                     | `null`
preprocessor | Object         | A processor key which will be used to interpret and compile a content source. Individual processors may accept additional configuration options  | `null`

```yaml
# swanky.config.yaml sections configuration example

sections:
  # Basic section
  - title: 'Components'
    content: 'src/content/components/overview.md'
    
  # Complex Section
  # All content sources are processed in order and combined to create one seamless page
  - title: 'Foundation'
    content:
      - src: 'src/content/foundation/01-overview.md'
      - title: '01 Colour Palette'
        src: 'src/content/foundation/02-colour-palette.md'
      - title: '02 Typography'
        src: 'src/content/foundation/03-typography.md'
        
  # Sub-sections
  # Swanky supports 2 levels of navigation
  - title: 'Accessibility'
    content: 'src/content/accessibility/overview.md'
    subSections:
      - title: 'WCAG 2.0 Guidelines'
        content: 'src/content/accessibility/wcag-guideline.md'
          
  # Content Preprocessor
  # The content src will be processed via the ngdocs processor before generating the page
  - title: 'Card Component'
    src: 'src/content/angular-components/card/card-component.js'
    preprocessor:
      swanky-processor-ngdocs: {}
  
  # Additional Scripts
  # Page that requires additional scripts to be loaded
  - title: 'Angular Button'
    bootstrap:
      - 'src/config/bootstrap/angular.bootstrap.js'
    content: 'src/content/angular-components/angular-button.js'
  
```

[wrap class="{$ styles.callout $}"]
All paths are relative to the root of your project folder.
[/wrap]

### Phew! That's The Long Part Over!
We have now covered all the configuration options available to you. 
Even though there are many options available we suggest using them only when you need to - that will keep your configuration file slim and easy to read.