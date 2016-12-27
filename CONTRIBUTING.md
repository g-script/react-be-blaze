# Contributing

> Before contributing, please read our [code of conduct][code of conduct]

Contributions are always welcome, no matter how large or small.

## Requirements

* [Node.js][node], latest LTS is recommended although everything is transpiled via Babel.
* npm, which comes with Node.js.
* A text editor or an IDE.

## Rules

This project is following the [JavaScript Standard Style][standard]. Linting is already configured to run on project scope, so you don’t need to have globals package installed.

Aside from this code style, you’ll have to follow a small set of simple rules:

* Use `camelCase` for variables
* Use `ParamCase` for React component names
* Use `ParamCase` for React component files
* Use `param-case` for other files
* Destructured props must be ordered alphabetically
* `import`s and `export`s keys must be ordered alphabetically
* `import`s are top-level (beginning of file) and must be ordered alphabetically by package name
* `export`s are low-level (end of file), use default export as often as possible
* For pure components, always use destructuring for props you need and rest for other props to dispatch (eg: `const a = ({ props, i, need, ...rest }) => {}`)

If you don’t follow those rules, your PRs won’t be merged until you’ve done needed changes to your code.

## Setup

```sh
$ git clone git@github.com:g-script/react-be-blaze.git
$ cd react-be-blaze
$ npm install
```

## Linting

```sh
$ npm run lint
```

Lint is ran without eslint autofix, you can run it via:

```sh
$ npm run lint:fix
```

## Tests

```sh
$ npm test
```

Currently, there is no tests at all. I’m planning on doing some, but if you want to start without me, go ahead, I won’t blame you! :wink:

## Build

```sh
$ npm run build
```

Building lib will lint and test the code first.

[code of conduct]: CODE_OF_CONDUCT.md
[node]: https://nodejs.org/en/download
[standard]: http://standardjs.com
