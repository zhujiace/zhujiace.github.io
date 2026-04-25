# zhujiace.github.io

Simple static personal homepage for Jiace Zhu.

## Structure

- `index.html`: the full homepage, including minimal inline styling
- `.nojekyll`: keeps GitHub Pages in plain static-file mode
- `serve.ps1`: optional local preview server for Windows

There are no external CSS files, JavaScript files, JSON data files, or build steps.

## Local Preview

From the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy

Push to the `main` branch of `zhujiace/zhujiace.github.io`. GitHub Pages can serve the site directly from the repository root.
