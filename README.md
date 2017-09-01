# Webpacked module skeleton

Easy to use way to create nice js-modules.

## Usage

### Write module

Download this repository and write module in `src` directory.

```
[src]
  [css]
    * your css files *
  [js]
    * your js files *
  main.css
  main.js
```

Check out example files in `src`.

In file `main.js` you can connect files from js dir by `require` function.

In file `main.css` you can import css files by `@import`.

### Build module

Install node dependences.

```shell
npm i --save-dev
```

Run webpack builder.

```shell
npm run build
```

It will try to build package and rebuild it automatically until you press Ctrl+C.

## Authors

We are small team of Web-developing fans consisting of IFMO students and graduates located in St. Petersburg, Russia.
Fell free to give us a feedback on <a href="mailto::team@ifmo.su">team@ifmo.su</a>

https://ifmo.su

### Follow us!

VK: https://vk.com/codex_team

Telegram: https://t.me/codex_team

Instagram: https://www.instagram.com/codex_team
