# @richex/prettier-config

A Prettier config for anyone.

## Usage

```sh
$ cd path/to/your-project/
$ npm i -D @richex/prettier-config
```

And update the prettier configuration file (e.g. `.prettierrc.js`) in your project:

```js
/** @type {import('prettier').Options} */
module.exports = {
  ...require("@richex/prettier-config"),
}
```

## `.editorconfig`

There is also an editorconfig configuration file that you can download to your project when you need it:

```sh
$ cd path/to/your-project/
$ wget https://raw.githubusercontent.com/richex-cn/prettier-config/main/.editorconfig
```
