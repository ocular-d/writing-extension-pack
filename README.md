
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ocular-d/writing-extension-pack">
    <img src="https://raw.githubusercontent.com/ocular-d/writing-extension-pack/2.0/icon.png" alt="Logo" width="80" height="80">
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

- [About the Project](#about "TOC link About")
- [Prerequisite](#prerequisite "TOC link Prerequisite")
- [Included Extensions](#included-extensions "TOC link Included Extensions")
- [Settings](#settings "TOC link Settings")
- [Contributing](#contributing "TOC link Contributing")
- [License](#license "TOC link License")
- [Credits](#credits "TOC link Credits")

## About

Extension package for [VS Code](https://code.visualstudio.com/ "Link to website of VS Code") for creating stunning Markdown based documentation.

This extension bundles the installation of linters and helper tools for markup and wording.

## Prerequisite

For a fully working setup please make sure to have all needed dependencies installed.

- [Vale](https://docs.errata.ai/vale/about "Link to Vale website")
- [ocld-writing](https://www.npmjs.com/package/ocld-writing "Link to package on NPM")

> Note
> `ocld-writing` is a meta package, if you prefer, you can install all included packages separately.\
> You can check the [README](https://github.com/ocular-d/ocld-writing/blob/master/README.md "Link to ocld-writing README on GitHub") on [GitHub](https://github.com/ocular-d/ocld-writing "Link to ocld-writing on GItHub") for the included packages.
## Included Extensions

### Markdown

- [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji "Link to MD emoji extension")
- [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc "Link to MD toc extension")
- [Remark](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-remark "Link to remark extension")
- [Remark Lint](https://marketplace.visualstudio.com/items?itemName=drewbourne.vscode-remark-lint "Link to remark lint extension")
- [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji "Link to extension")
### Writing

- [Word Count](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wordcount "Link to word count extension")
- [Highlight Trailing White Spaces](https://marketplace.visualstudio.com/items?itemName=ybaumes.highlight-trailing-white-spaces "Link to trailing spaces extension")
- [Read Time](https://marketplace.visualstudio.com/items?itemName=johnpapa.read-time "Link to read time extension")
- [Alex-linter](https://marketplace.visualstudio.com/items?itemName=TLahmann.alex-linter&utm_source=VSCode.pro&utm_campaign=AhmadAwais "Link to extension")
- [Readability check](https://marketplace.visualstudio.com/items?itemName=jemcclin.readabilitycheck "Link to extension")
- [Vale VS Code](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server "Link to extension")

### Spellcheck

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker "Link to code spell checker extension")

### Screenshot

- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode "Link to polacode extension")

### Other

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2 "Link to bracket colorizer extension")
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag "Link to matching tag extension")
- [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow "Link to indent extension")
- [VuePress Snippets](https://marketplace.visualstudio.com/items?itemName=ocular-d.vuepress-snippets "Link to extension")
- [ocular-d.writing](https://marketplace.visualstudio.com/items?itemName=ocular-d.writing "Link to extension")

## Settings

To get the most out of this setup, please make sure to consult the documentation of the following projects.

- [alex](https://github.com/get-alex/alex#configuration "Link to alex docs")
- [markdown-link-check](https://github.com/tcort/markdown-link-check#config-file-format "Link to markdown-link-check docs")
- [remark](https://github.com/remarkjs/remark/tree/main/packages/remark-cli "Link to remark on GitHub")
- [markdownlint](https://github.com/DavidAnson/markdownlint#configuration "Link to markdownlint on GitHub")

The extension [vscode-writing](https://github.com/ocular-d/vscode-writing "Link to extension on GitHub") provides snippets
for some of the above plugins to make enabling or disabling checks more effortless.

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
- [Onna](https://onna.com "Link to website of Onna")
