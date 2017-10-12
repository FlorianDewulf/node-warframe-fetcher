# Node Warframe fetcher

Consume the Warframe API. To request it with node.

## Requirements

- [Node](https://nodejs.org/en/) (if you don't have/want Docker)

---

## Launch the doc generation 

    $ rake doc

or

    $ ./node_modules/.bin/jsdoc src -d static/doc

(So of course you need to `npm i` before)

---

## Languages & tools

### JavaScript

- [ES6+](es6-features.org) is the Javascript version used to write code with the last features of the langage.
- [ESLint](https://eslint.org/) allows you to check your code.

### Documentation

- [JSDoc](https://github.com/jsdoc3/jsdoc) is the tool used to generate the doc folder in `./static`
- [TUI](https://github.com/nhnent/tui.jsdoc-template) is the template used for this awesome documentation style !
