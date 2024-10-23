# Deploying to GitHub Pages with `parcel`

Follow the steps below to deploy to GitHub Pages using `parcel`

1. Create a new branch called `deployed-version` and switch to it.
2. Install `parcel`
    ```bash
    npm install parcel -D
    ```
3. Install `gh-pages`
    ```bash
    npm install gh-pages -D
4. Remove `script` tag with `"./node_modules/axios/dist/axios.min.js"` from `index.html`
5. Add `import` statements to `index.js` 
    ```js
    import 'regenerator-runtime/runtime';
    import axios from 'axios';
    ```
6. Add a `"scripts"` section to your `package.json`:
    ```json
    "scripts": {
        "predeploy": "rm -rf dist && npm run build",
        "deploy": "gh-pages -d dist",
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "parcel index.html ",
        "build": "parcel build index.html --public-url /weather-report/"
    }
    ```
    <details>
    <summary>Complete <code>package.json</code></summary>

    ```json
        {
        "scripts": {
            "predeploy": "rm -rf dist && npm run build",
            "deploy": "gh-pages -d dist",
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "parcel index.html ",
            "build": "parcel build index.html --public-url /weather-report/"
        },
        "dependencies": {
            "axios": "^1.7.7"
        },
        "devDependencies": {
            "gh-pages": "^6.2.0",
            "parcel": "^2.12.0"
        }
        }
    ```

    </details>
7. Run `npm run deploy`
8. Confirm that the GitHub Pages branch is set to `gh-pages` in the GitHub UI by going to **Settings** --> **Pages** --> **Source**
9. Navigate to `https://{your-user-name}.github.io/weather-report/` to see your deployed site.

## Resources
- [How to Use Axios with Javascript](https://www.digitalocean.com/community/tutorials/js-axios-vanilla-js)
- [How to publish a single page application at no cost with GitHub Pages (React, Svelte, etc)](https://levelup.gitconnected.com/how-to-publish-a-single-page-application-at-no-cost-with-github-pages-react-svelte-etc-897b8f75a22b)
- [Parcel with gh-pages GitHub issue](https://github.com/parcel-bundler/parcel/issues/505)