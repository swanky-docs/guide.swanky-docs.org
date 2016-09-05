module.exports = {
  title: 'Swanky Docs - API Documentation',
  repo: 'https://github.com/swanky-docs/docs',
  version: '0.0.0',
  src: 'src',
  theme: 'src/themes/docs-theme',
  output: 'docs',
  serverPath: 'docs',
  sections: [
    {
      title: 'Getting started',
      content: 'src/content/getting-started/overview.md',
      subSections: [
        {
          title: 'Setup',
          content: 'src/content/getting-started/setup.md'
        },
        {
          title: 'Commands',
          content: 'src/content/getting-started/commands.md'
        },
        {
          title: 'Troubleshooting',
          content: 'src/content/getting-started/troubleshooting.md'
        }
      ]
    },
    {
      title: 'Configuration',
      content: 'src/content/configuration/overview.md',
      subSections: [
        {
          title: 'Processors',
          content: 'src/content/configuration/processors.md'
        }
      ]
    },
    {
      title: 'Customisation',
      content: 'src/content/customisation/overview.md',
      subSections: [
        {
          title: 'Themes',
          content: 'src/content/customisation/themes.md'
        }
      ]
    }
  ]
}
