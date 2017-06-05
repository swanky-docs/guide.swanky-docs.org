## Processing Content

We briefly discussed the use of __Swanky Processors__ in the [Adding Content](/getting-started/adding-content.html) section of this guide. 
This section will aim to go into more detail on how to use processors and what processors are currently available for Swanky Docs.

### What is a Processor?
Out of the box Swanky will process HTML and Markdown files without any extra configuration. If you have a file format 
that is not natively supported by Swanky you may need to invoke the awesome power and flexibility of Swanky Processors. 
A processor is an additional configuration option that tells Swanky how to read and interpret the source.

### Available Processors

Processor               | Description                                                                                                                                                                                              | Repo
:---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------
Swanky ngDocs Processor | An [ngdocs](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) flavour processor for documentation generated using the [Swanky Docs](https://github.com/swanky-docs) framework. | [Github](https://github.com/swanky-docs/swanky-processor-ngdocs)
Swanky JSDoc Processor | A [jsdoc](http://usejsdoc.org/index.html) processor for documentation generated using the [Swanky Docs](https://github.com/swanky-docs) framework. | [Github](https://github.com/swanky-docs/swanky-processor-jsodc). Supports multiple frameworks (Angular and React) as well as plain components.

[wrap class="{$ styles.callout $}"]
Can't see your processor here? [Drop us a line](https://github.com/swanky-docs/swanky/issues). We would love to know about it.
[/wrap]
