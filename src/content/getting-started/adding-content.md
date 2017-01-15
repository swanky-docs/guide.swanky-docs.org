## Adding Content

This will most likely be where you put the bulk of your efforts when creating any type of documentation site. This 
section will guide you through some of the many content configurations to get you going.

### Basic Content Configuration

Within each section you define you can have one or multiple content sources that Swanky will use to generate a page of documentation.

#### Example:
```yaml

sections:
  - title: 'A Brand New Section'
    content: 'path/to/my/content.md' # single content source

```

### Content Sources & Formats

Out of the box Swanky will process HTML and Markdown files without any extra configuration. The location of these sources 
can be local or external. If the content source is external Swanky will retrieve the content via the URL specified and process - all without breaking a sweat!

#### Example:
```yaml

sections:
  - title: 'Some External Content'
    content: 'https://github.com/swanky-docs/guide.swanky-docs.org/blob/master/src/content/getting-started/adding-content.md'

```

If you have a file format that is not natively supported by Swanky you may need to invoke the awesome power and 
flexibility of [Swanky Processors](/getting-started/processing-content.html). A processor is an additional configuration 
option that tells Swanky how to read and interpret the source. The processor you require might already 
be [available](/getting-started/processing-content.html#user-copntent-available-processors).

As a general guideline the following example illustrates how to configure the 
[Swanky NgDocs Processor](https://github.com/swanky-docs/swanky-processor-ngdocs) to process a JavaScript file 
containing [NGDocs](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) style documentation in the source code:

#### Example:
```yaml

sections:
  - title: 'My AngularJS Component'
    content: 'src/content/components/my-component.js'
    preprocessor: # processor configuration
      swanky-processor-ngdocs: {} # additional processor options can be provided here

```

### Content Hierarchy
The Swanky configuration also supports two levels of content hierarchy. This hierarchy can be used to create multi-level 
navigation within your chosen/custom theme. A 'child' section supports the same configuration options as a top level section.

#### Example:
```yaml

sections:
  - title: 'Overview'
    content: 'path/to/overview.md'
    
    # Sections defined here will have a parent called `Overview`
    subSections:
      - title: 'A Child Section'
        content: 'path/to/child-section.md'

```

### Additional Scripts
Swanky supports the loading of additional scripts that are section specific. These script will only be loaded in the section for which they are specified. 
The `bootstrap` option key supports an array of paths to JavaScript files.

#### Example:
```yaml

sections:
  - title: 'Foundation'
    content: 'src/content/foundation.md'
    bootstrap:
      - 'path/to/script-1.js'
      - 'path/to/script-2.js'
    
```

### Advanced Content Configuration

Using the concepts outlined in the [Basic Content Configuration](/getting-started/adding-content.html#user-content-basic-content-configuration) section we can
start to combine all the available configuration options into complex page structures.

To illustrate a 'real world' use case you may have a section of your documentation that has one or more sections that are driven 
from __Markdown__ files e.g. _Overview_, _Accessibility Guidelines_ and another section that is driven by JSDoc style comments 
in the source code of the documented library e.g API specification, Working Example etc. Expecting a whole development team to use __one__ method 
of documentation is not realistic. Swanky Docs will enable you to capture all these various documentation sources to 
construct a seamless page that caters to all styles of the documentation capturing process.

#### Example:
```yaml

sections:
  - title: 'A Complex Section'
    bootstrap:
      - 'path/to/script.js'
    content: # Array of content sources that will be combined and processed into one page
      
      # External Content Source
      - title: 'Overview'
        src: 'https://some-external-url/content.md'
    
      # Markdown
      - title: 'Markdown Content'
        src: 'path/to/some/content.md'
      
      # JS Docs
      - title: 'Source Code Content'
        src: 'src/content/components/my-component.js'
        preprocessor:
          swanky-processor-ngdocs: {}
          
```