[npm:img]: https://img.shields.io/npm/v/react-be-blaze.svg?style=flat-square
[npm:url]: https://www.npmjs.org/package/react-be-blaze

[standard:img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard:url]: http://standardjs.com

[dependencies:img]: https://david-dm.org/g-script/react-be-blaze.svg?style=flat-square
[dependencies:url]: https://github.com/g-script/react-be-blaze/blob/master/package.json#L55

[peer_dependencies:img]: https://david-dm.org/g-script/react-be-blaze/peer-status.svg?style=flat-square
[peer_dependencies:url]: https://david-dm.org/g-script/react-be-blaze?type=peer

[build:img]: https://travis-ci.org/g-script/react-be-blaze.svg?branch=master
[build:url]: https://travis-ci.org/g-script/react-be-blaze

[license:img]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license:url]: https://opensource.org/licenses/MIT

# react-be-blaze &middot; [![NPM version][npm:img]][npm:url] &middot; [![Standard - JavaScript Style Guide][standard:img]][standard:url] &middot; [![Dependencies][dependencies:img]][dependencies:url] &middot; [![Peer Dependencies][peer_dependencies:img]][peer_dependencies:url] [![Build Status][build:img]][build:url] &middot; [![License: MIT][license:img]][license:url]

## `TL;DR;`

react-be-blaze is a tiny React wrapper for [BlazeCSS][blaze] components.

Check out the [demo][demo]! :warning: UNDER CONSTRUCTION :warning:

## Intro

[BlazeCSS][blaze] is, as written on their website at the time of writing, an “ open source modular CSS toolkit providing great structure for building websites quickly ”.

In my opinion, this toolkit — *or framework, take your pick* — has a great advantage compared to well-known CSS frameworks like [Twitter Bootstrap][bootstrap] or [Zurb Foundation][foundation]: it won’t handle things for you.

**You** are the master of your project and **you** have to make the right choices to fit your needs.

Of course, it’s not a plug-and-play framework, so you’ll actually have to write some code... **That’s the power of BlazeCSS!**

## Why

Each and every experienced web designer/developer know the big problem of CSS: **scope**.

Because CSS is globally scoped, it is often difficult to apply a class of `.active` for example. Let’s try to demonstrate this point, consider the following code:

```css
.button {
  border        : 1px solid grey;
  border-radius : 2px;
}

.nav-item {
  background : transparent;
  border     : 1px solid black;
}
```

Now, you need to have an `.active` state for your `.button`. Sounds pretty easy:

```css
.active {
  border-color: blue;
}
```

Nice! Your `.button` can now have a class of `.active` which changes its `border-color` to `blue`.

But now, you also need an `.active` class for your `.nav-item`! You can’t just use the class we created above, because you don’t want to change the `border-color` on `.active`, you want to change the `background` to `red`.

Let’s try this!

```css
.active {
  background: red;
}
```

**Problem is**, now you have **two** `.active` classes… Which one will be applied, then?

Well… that’s all about [CSS Specificity][css specificity]!

Let’s take a look at our complete CSS:

```css
.button {
  border        : 1px solid grey;
  border-radius : 2px;
}

.nav-item {
  background : transparent;
  border     : 1px solid black;
}

.active {
  border-color: blue;
}

.active {
  background: red;
}
```

And consider the following HTML:

```html
<ul class="nav">
  <li class="nav-item">Normal item</li>
  <li class="nav-item active">Active item</li>
</ul>
<main>
  <button class="button active">Just an active button</button>
</main>
```

The `.active` `.nav-item` will have a `blue` `border-color` and a `red` `background` — *pretty ugly, right?*.

Furthermore, the `.active` `.button` will have a `blue` `border-color` and a `red` `background` too!

That’s the **BIG** problem about CSS, we can even conclude that with our dummy example... and every web developer will have to pull his air out on it one day or another.

## What

We now are aware of this problem, and guess what? It already has been solved! Well, **in fact**, it has only been *virtually* solved.

A bunch of high skilled developer has been working on this and created patterns and standards. You might know some, but here we are only going to speak about <abbr title="Objet-Oriented CSS">OOCSS</abbr>, <abbr title="Block-Element-Modifier">BEM</abbr> and <abbr title="Inverted Triangle CSS">ITCSS</abbr>.

### OOCSS

This approach is the most known of three, [Twitter Bootstrap][bootstrap] and [Zurb Foundation][foundation] entirely rely on it.

Its all about leveraging [CSS Specificity][css specificity] by applying multiple classes to elements in order to tweak their appearance or behavior. If you need an example, just take a look at [Bootstrap][bootstrap docs] or [Foundation][foundation docs] docs, you‘ll get my point.

### BEM

The BEM pattern is also used in a less knowned CSS framework - *but still, it‘s made by Google* - : [material-design-lite][mdl].

BEM principle is pretty simple: all CSS classes follow a nested HTML structure, composed as elements in blocks with the ability to have modifiers expressing their state. Just read [BlazeCSS docs][blaze docs] to see how it looks!

### ITCSS

ITCSS is different from OOCSS and BEM because it‘s more about grouping styles in strictly-ruled categories. If you want to understand how it works, I recommend you to take 5 minutes - *really, it worth it* - and read [these slides about ITCSS by Harry Roberts][itcss]!

## How

OK, here we are... We exposed the problem, we saw there were solutions: let‘s talk about react-be-blaze!

First of all, BlazeCSS is following BEM and ITCSS naming conventions, so it‘s robust and easily scalable :wink: !

### So what?

Actually, react-be-blaze is no more than a library providing you ready-to-use components using BlazeCSS styles!

### Why would I choose it?

It‘s **small**, not such as BlazeCSS - *which isn‘t included* -, but still :

```shell
                Asset     Size
react-be-blaze.min.js     49.5 kB
```

It‘s **easy to install**:

```shell
$ npm install --save react-be-blaze
```

It‘s **easy to use**:

```javascript
// ESModules — so cool!
import { Button } from 'react-be-blaze'

// ES2015 — meh.
const { Button } = require('react-be-blaze')

// ES5 — really?
var reactBeBlaze = require('react-be-blaze')
var Button = reactBeBlaze.Button
```

It has a **great [demo][demo]**! :warning: UNDER CONSTRUCTION :warning:

## I would like to contribute

Oh boy! Thank you a lot :smile: !

This project is open-source, so you are welcome to contribute to it! All you have to do is follow the [contribution guide][contributing] :wink:

[demo]: https://g-script.github.io/react-be-blaze
[contributing]: CONTRIBUTING.md

[blaze]: http://blazecss.com
[blaze docs]: http://blazecss.com/objects/grid/

[bootstrap]: http://getbootstrap.com
[bootstrap docs]: http://getbootstrap.com/css/#buttons

[foundation]: http://foundation.zurb.com
[foundation docs]: http://foundation.zurb.com/sites/docs/button.html

[mdl]: https://getmdl.io/started
[itcss]: https://speakerdeck.com/dafed/managing-css-projects-with-itcss
[css specificity]: https://www.w3.org/TR/css3-selectors/#specificity
