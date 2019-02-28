# BEMO

## Refactor
Bemo is a Sass-based project starter meant to be a starting point and structural
guide rather than a full framework. It's bare enough to not interfere with your
custom styles or scripts, but yet has enough functioning modules to jumpstart
a project in no time.

Bemo strictly follows the [BEM naming methodology](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/),
and is heavily inspired by the [inuit.css framework](https://github.com/csswizardry/inuit.css/).

Bemo is accompanied by a couple of CLI tools let you easily generate:

1. a basic bemo skeleton
1. custom icon webfonts starting from a set of SVGs

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
  |-- _base.sass
  └-- _normalize.sass
```

The fulcrum of the whole tree lies in the `stylesheets/blocks` directory,
which will contain all the blocks that compose your frontend styling.

## Demo

A preview of the BEM blocks available with Bemo is available here: http://cantierecreativo.github.io/bemo/

## Test

To test and check sass with stylelint:

```bash
./tools/lint-scss
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
