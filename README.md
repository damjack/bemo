# BEMO 2

[![Build Status](https://travis-ci.org/damjack/bemo.svg?branch=master)](https://travis-ci.org/damjack/bemo)

Bemo is a Sass-based project starter meant to be a starting point and structural
guide rather than a full framework. It's bare enough to not interfere with your
custom styles or scripts, but yet has enough functioning modules to jumpstart
a project in no time.

Bemo strictly follows the [BEM naming methodology](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/),
and is heavily inspired by many modern sass framework and lot of works.

## Installation

Bemo is disteributed with NPM package:

```
npm install bemo-sass --save-dev
```

or with Yarn:

```
yarn add -D bemo-sass
```

## Usage

To manage and install Bemo you can use a install script

```sh
$ bemo --directory styles/sass --basename application
```

```node
Usage: bemo [options]

Options:
   --directory DIRECTORY       Directory where BEMO will be installed
   --extension EXTENSION       Extension to use for SASS files (default: `sass`)
   --basename FILE_BASENAME    Final name of base filename (default: `application`)

Other options:
   --merge-var             Custom file with merge variables
   --webfont               WebFont system
```

## Structure

A Bemo project will look like this:

```
sass
  |-- bemo.sass
  |-- blocks
  |-- functions
  |-- mixins
  |-- utilities
  |-- variables
  |-- _root-theme.sass
  |-- _base.sass
  └-- _normalize.sass
```

The fulcrum of the whole tree lies in the `stylesheets/blocks` directory,
which will contain all the blocks that compose your frontend styling.

## Storybook and preview

A preview of the BEM blocks and all utilities distributed with Bemo is
available here: http://cantierecreativo.github.io/bemo/

## Test

Bemo2 use the sass-lint package to check the code.

To run locally test you can run:

```bash
$ yarn lint
```

## Browser Support

Chrome | Firefox | IE | Opera | Safari
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | 6.1+ ✔ |

## Contributing

We welcome contributions to Storybook!

- ⇄ Pull requests and ★ Stars are always welcome.
- Read our [contributing guide](CONTRIBUTING.md) to get started.

## License

Project License is [MIT](LICENSE.md)
