# zhujiace.github.io

Static academic homepage for Jiace Zhu (朱嘉策 / zhujiace), prepared for GitHub Pages.

## Tech Stack

- Plain HTML, CSS, and JavaScript
- Structured content in JSON files under `data/`
- No build step and no package dependencies
- GitHub Pages compatible as a static site

## Run Locally

From the repository root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

If Python is not installed on Windows, use the included PowerShell server:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 8000
```

The page fetches JSON data, so viewing `index.html` directly from the filesystem may not load all content in some browsers.

## Deploy To GitHub Pages

1. Push this repository to `zhujiace/zhujiace.github.io`.
2. In GitHub, open **Settings -> Pages**.
3. Use the default deployment from the `main` branch root.
4. The site will be available at `https://zhujiace.github.io`.

## Update Profile Information

Edit `data/profile.json`.

Common fields:

- `name`, `chineseName`, `username`
- `role`, `affiliation`, `department`
- `bio`
- `researchInterests`
- `education`
- `honors`
- `links`

Only add facts that can be tied to a reliable source and record the source in `sources.md`.

## Update Publications

Edit `data/publications.json`.

Each publication supports:

- `title`
- `authors`
- `venue`
- `year`
- `status`
- `selected`
- `links`

The JavaScript automatically bolds `Jiace Zhu` in author lists, renders selected publications near the top, and sorts the full list by year descending.

## Excluded Or Deferred Facts

The public site intentionally excludes:

- A profile photo, because an official SJTU article contains a likely photo but reuse permission was not clear enough to copy or hotlink it.
- ORCID, CV PDF, and public email address, because no confidently verified public target suitable for display was found.
- Any awards beyond the ESWEEK 2025 ESSC third-place result, because no other reliable source was found during this pass.

See `todo_verify.md` for verification notes.
