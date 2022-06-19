# Doggle w/ Rust & WASM
This is my version of [calvinatian's](https://github.com/calvinatian) "Doggle" game: https://github.com/calvinatian/doggle (https://calvinatian.github.io/doggle/) made with Rust and WASM.
I'm doing my initial commit with an MVP that isn't that great, but is the first state in which I have it working.

## Changes to make
- I can probably still use `reqwest` and `tokio` since I don't need any wasm bindings for them, similar to the code for `random`. Then I wouldn't have a hard-coded list of breeds!
- I could move the js and styling out of `index.html`
- I could set up a `.travis.yml` and other shtuff to deploy this properly to gh pages
- Some other refactoring. I didn't end up using some things I wrote in the lib, since I ran into problems with them and landed on other solutions to achieve what I wanted.

## Playing

(Instructions copied from https://github.com/yishn/lets-code/tree/main/minesweeper)

Make sure you have [Rust](https://www.rust-lang.org) installed and [wasm-pack](https://rustwasm.github.io/wasm-pack/). To build this project, run:

```
$ wasm-pack build --target web
```

To run this project, you need a static file server. You can install `serve` with npm:

```
$ npm install serve -g
```

Now, start your static file server and open `index.html`:

```
$ serve
```
