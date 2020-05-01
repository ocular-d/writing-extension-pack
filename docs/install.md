---
title: Install
meta:
  - name: description
    content: How to install ocular-d.writing-extension-pack
  - name: keywords
    content: install extension vs-code ocular-d docs writing
---

::: tip Key Point
How to install and configure this extension.

:bulb: {{ $page.readingTime.text }}
:::

---

You can install this extension from within VS Code.

Bring up the Extensions view by clicking on the Extensions icon in the Activity Bar
on the side of VS Code or the **View: Extensions** command.

Search for `ocular-d.writing-extension-pack`.

Once the installation is complete, the Install button will change to the Manage gear button.

Or in VS Code: Launch VS Code **Quick Open** (`Ctrl+P`),
paste the following command, and select enter.

```shell
ext install ocular-d.writing-extension-pack
```

## Configuration

### Remark

Save the configuration example seen below as `.remarkrc.yaml` in the */root* of your repository.

```yml
plugins:
  remark-preset-lint-ocular-d:
  # Customized settings
  lint-list-item-indent: space
  lint-maximum-line-length: 150
  lint-no-shell-dollars: true
  lint-no-duplicate-headings: false
  lint-maximum-heading-length: 80
  lint-heading-style: false
  ```

For more detailed information, please check [remark-preset-lint-ocular-d](https://github.com/ocular-d/remark-preset-lint-ocular-d "Link to ocld-remark-preset on GitHub").