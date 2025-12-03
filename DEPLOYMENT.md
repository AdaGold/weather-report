## Purpose

This document describes how to prepare and deploy the `weather-report` project using the npm scripts defined in `package.json`.

### Preparation

Merge any changes that should be included in the deployed project into this branch.

The deployment process assumes that the only files that are needed to build the deployed site are:
- Source JavaScript files in `src/`
- CSS files in `styles/`
- The `index.html` base file

### Build scripts (what each script does)

- `npm run build:dep`
  - Creates the `./dist/src` directory if it doesn't exist.
  - Internally runs: `mkdir -p ./dist/src`

- `npm run build:js`
  - Minifies JavaScript files from `src/` into `dist/src/index.min.js` using `uglify-js`.
  - Internally runs: `uglifyjs src/*.js -m -c -o dist/src/index.min.js`

- `npm run build:html`
  - Builds HTML output using the repository's `build.js` script.
  - Internally runs: `node build.js`
  - The scipt tags that should be replaced by `build.js` must be enclosed in `<!-- DEV_SCRIPTS_START -->` and `<!-- DEV_SCRIPTS_END -->` comments in `index.html`.

- `npm run build:css`
  - Copies the `styles` directory into `dist` so CSS is included in the distribution.
  - Internally runs: `cp -R styles ./dist`

- `npm run build:prod`
  - Runs the full production build sequence:
    1. `npm run build:dep`
    2. `npm run build:js`
    3. `npm run build:css`
    4. `npm run build:html`
  - Result: a `dist/` folder containing the compiled/minified assets and built HTML.

- `npm run build:deploy`
  - Pushes the `dist` directory as a git subtree to a remote named `gold` on the `solution` branch.
  - Notes: this requires that you have a git remote named `gold` configured and that you want to publish the `dist` folder in this manner. If you don't have a `gold` remote, either add one or modify the script to the remote/branch you want.

### Common deploy sequence

1. Install dependencies (if not already installed):

```
npm install
```

2. Run lint (optional but recommended):

```
npm run lint
```

3. Build production assets:

```
npm run build:prod
```

4. Verify `dist/` contains your built site. You can open the generated HTML files from `dist/` in a browser or serve them with a static server.

5. (Optional) Publish `dist/` as a subtree branch:

```
npm run build:deploy
```

This pushes the contents of `dist/` to the `solution` branch on the `gold` remote. Change the script or the remote/branch as needed for your workflow.

### Notes & Troubleshooting

- If `npm run build:js` fails, ensure `uglify-js` is installed (`npm install`) and that your `src/` JS is valid for Uglify (ES5). If code uses newer JS features, consider a different minifier/transpilation step.
- If `build:deploy` errors about `gold` remote, add a remote, for example:

```
git remote add gold <git-url-for-deploy-target>
```

- The `start` script only provides a message; it's not a development server. Use a browser or a local static server to view the app.
