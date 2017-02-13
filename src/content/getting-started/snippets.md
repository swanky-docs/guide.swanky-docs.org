## Snippets

### So What Are Snippets?

Snippets are reusable 'chunks' of html, css and js that are specific to your documentation. They can be viewed as a type of 'poor mans' component.
By design the are simple use and create. The best way to understand snippets is to write one, so lets get started.

### Anatomy of a Snippet
By convention a snippet __must__ have the following structure:

```markdown
snippets/
   └── my-snippet-name/
       ├── index.js         * contains all JavaScript logic for snippet
       ├── template.html    * the html
       └── style.styl       * snippet css (can be written in stylus format)
```

By default Swanky will expect to find your snippets in `[src]/snippets`. You can change this location within your __Swanky Configuration__ file.

#### Example:
```yaml
snippets: 'src/some-other-location'
```

[wrap class="{$ styles.callout $}"]
Snippets can be nested multiple levels deep. This can be useful if you need to group snippets by type e.g. buttons.
[/wrap]

### Using Snippets
Snippets are simple to use. Inside of any __Markdown__ file you can render a snippet using the following custom __shortcode__ syntax. Using the __square bracket__
notation with the keyword __render__ tells Swanky to look for a snippet with the following name and provide it with any additional attributes e.g. `[render [snippet-name] [attributes]]`.


#### Example:
```markdown
[render colour-drop hex="#2E2E2E" rgb="46 46 46" name="Night Rider"]
```

#### Result:
[wrap class="{$ styles.row $}"]
[render colour-drop hex="#2E2E2E" rgb="46 46 46" name="Night Rider"]
[/wrap]

In addition to simply rendering a snippet you can also display the __markup__ that was used to generate the snippet. 
This can be very useful if you need to show the implementation of an element within your documentation. e.g. example button HTML. 
Using the keyword `code` in the following __shortcode__ structure will tell Swanky to render the snippet and to display the HTML in a code block below.

#### Example:
```markdown
[code colour-drop hex="#EEEEEE" rgb="238 238 238" name="White Smoke"]
```

#### Result:
[wrap class="{$ styles.row $}"]
  [code colour-drop hex="#EEEEEE" rgb="238 238 238" name="White Smoke"]
[/wrap]

[wrap class="{$ styles.callout $}"]
You can modify the templates for both types of snippet rendering inside the `templates/partials/snippet.html` & `templates/partials/render.html` templates.
[/wrap]

### Grouping Snippets
Another useful feature is the ability to group a combination of snippets e.g. form layout. This can easily be achieved using either the `render` or `code` keyword followed by `-group`;

#### Example:
```markdown
[code-group]
  [colour-drop hex="#FF5A60" rgb="255 90 96" name="Bittersweet"]
  [colour-drop hex="#43BDD4" rgb="67 189 212" name="Scooter"]
  [colour-drop hex="#FFE11A" rgb="255 225 26" name="Lemon"]
[/code-group]
```

#### Result:
[code-group]
  [colour-drop hex="#FF5A60" rgb="255 90 96" name="Bittersweet"]
  [colour-drop hex="#43BDD4" rgb="67 189 212" name="Scooter"]
  [colour-drop hex="#FFE11A" rgb="255 225 26" name="Lemon"]
[/code-group]
