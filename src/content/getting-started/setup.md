## Setup and Installation

The following guide shows you how to setup a [Swanky Docs](https://swanky-docs.org/) project from scratch. If you find this too laborious you can start 
creating beautiful documentation in a few easy steps with the [Swanky Docs CLI Tool](/swanky-cli-tool.html).

If you encounter any problems, please submit a [GitHub issue](https://github.com/swanky-docs/swanky/issues) and we'll do our best to help you with it.

### System Requirements

If your system has Node v4 or higher installed you are ready to get started.

[wrap class="{$ styles.block $}"]
<a href="https://nodejs.org/en/">![Node.js]](~assets/img/nodejs.svg)</a>
[Node.js](https://nodejs.org/en/)
[/wrap]

### Quick Start

#### 1. Create a New NPM Project
 
```bash
# cd project-folder
$ npm init
```

#### 2. Install Swanky
 
```bash
$ npm install swanky --save
```

#### 3. Create Your Swanky Config File
Create a blank Swanky Configuration. Don't worry we will add to this later.

```bash
$ touch swanky.config.yaml
```

#### 4. Create an Entry Point
Create a blank JavaScript file which will be used as the point of entry to run the Swanky development server.

```bash
$ touch index.js 
```

#### 5. Configure the Swanky Development Server
```javascript
'use strict'

const swanky = require('swanky');

module.exports = swanky.devServer();
```

#### 6. Run Your Documentation Site!
Not much to see here but you are now ready to start adding content to your documentation and creating something beautiful.

```bash
$ node index.js
```

### What's Next?
We have just looked at the tip of the iceberg for configuring your Swanky Docs. The majority of the 'grunt' work has already been taken care of by Swanky. 
It is now up to you to start building the content.
