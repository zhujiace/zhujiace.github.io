# zhujiace.github.io

Static personal academic homepage for Jiace Zhu.

## Structure

- `index.html`: page layout, styling, and rendering script
- `data/site.js`: editable profile, education, publication, link, and image data
- `figs/`: profile photo and paper figures
- `.nojekyll`: keeps GitHub Pages in plain static-file mode

There are no build steps or package dependencies.

## Edit Content

Most content should be edited in:

```text
data/site.js
```

The data file starts with:

```js
window.SITE_DATA = {
```

and ends with:

```js
};
```

Keep the JavaScript object syntax valid when editing.

## Local Preview

Open `index.html` directly in a browser. A local server is not required because the page loads `data/site.js` as a normal script.

## Deploy

Push to the `main` branch of `zhujiace/zhujiace.github.io`. GitHub Pages can serve the site directly from the repository root.
