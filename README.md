
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ocular-d/writing-extension-pack">
    <img src="https://raw.githubusercontent.com/ocular-d/writing-extension-pack/master/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">(Technical) Writing</h3>

  <p align="center">
    Extension Pack to install a list of extensions for writing (API) documentation
    <br />
    <a href="https://marketplace.visualstudio.com/items?itemName=ocular-d.writing-extension-pack" title="Link to this extension on VS Code marketplace"><strong>VisualStudio  | Marketplace »</strong></a>
    <br />
    <br />
    <img src="https://img.shields.io/vscode-marketplace/d/ocular-d.writing-extension-pack.svg" />
    <img src="https://img.shields.io/vscode-marketplace/i/ocular-d.writing-extension-pack.svg" />
    <img src="https://img.shields.io/github/license/ocular-d/writing-extension-pack" />
    <br />
    <a href="https://github.com/ocular-d/writing-extension-pack/issues" title="Link to issue tracker">Report Bug</a>
    ·
    <a href="https://github.com/ocular-d/writing-extension-pack/issues" title="Link to feature tracker">Request Feature</a>
    ·
    <a href="https://github.com/ocular-d/writing-extension-pack/blob/master/CHANGELOG.md" title="Link to changelog">Changelog</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [About the Project](#about "TOC link about")
- [Included Extensions](#included-extensions "TOC link included extensions")
- [Contributing](#contributing "TOC link contributing")
- [License](#license "TOC link license")
- [Credits](#credits "TOC link credits")

## About

Extension package for [VS Code](https://code.visualstudio.com/ "Link to website of VS Code") for creating stunning Markdown based documentation.

## Included Extensions

<!-- vale off -->

- ocular-d.vuepress-snippets
- ocular-d.writing
- ybaumes.highlight-trailing-white-spaces
- oderwat.indent-rainbow
- CoenraadS.bracket-pair-colorizer-2
- vale.vale-vscode
- bierner.markdown-emoji
- tlahmann.alex-linter
- jemcclin.readabilitycheck
- pnp.polacode

<!-- vale on -->

## Settings

The example below shows VS Code configured to use `vale cli` if you use `vale server` you need to change it ($show_example)

`settings.json`

```json
{
    "telemetry.enableTelemetry": false,
    "telemetry.enableCrashReporter": false,
    "vale.core.useCLI": true,
    "vale.server.provideFixes": false,
    "settingsSync.ignoredExtensions": [
    
    ]
}
```

## Contributing

Be it filing bugs, formulating enhancements, creating pull requests, or any other means of contribution.

## License

Distributed under the [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html "Link to license") license.

## Credits

- [Pronovix](https://pronovix.com/ "Link to Pronovix website")
