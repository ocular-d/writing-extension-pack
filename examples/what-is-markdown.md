## What is Markdown
Markdown is a very lightweight markup language that lets you create rich text (meaning text that has emphasis, headers, etc) in any plain text editor. Markdown, like HTML, allows you to specify text formatting, but it is far less expressive than HTML, which is perfectly fine since it is only meant to format text and not create full web pages.

The resulting Markdown you write is then fed in to a converter that replaces the Markdown syntax with HTML, which can then be displayed on a web page. In addition to the Markdown syntax, you can also write plain HTML as well, so if you have some more complicated structure you want to add in-line with your text, you'll still have the ability to do so.

## Markdown Syntax Examples
The examples will be broken up in to two different sections, block elements and span elements. Block elements are those that take up their own line, like paragraphs, code, or headers.

The span elements can be used inline, meaning they can be used within a paragraph and don't need to be on a line of their own.
### Block Elements
**Paragraphs and New Lines**

Creating paragraphs and new lines (or line breaks) are similar, but have subtle differences. A new paragraph element, `<p>...</p>`, is created any time there is a blank line between two lines of text. 

So this is not cool. But this is a test.

There is a lot of these.

#### Headers
```md
# An H1 Header
## An H2 Header
### An H3 Header
#### An H4 Header
```
