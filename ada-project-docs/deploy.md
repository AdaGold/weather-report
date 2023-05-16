# Deploying to GitHub Pages with `parcel-bundler`

Follow the steps below to deploy to GitHub Pages using `parcel-bundler`

1. Create a new branch called `deployed-version` and switch to it.
1. Install `parcel-bundler`
    ```bash
    yarn add --dev parcel-bundler@1.12.5
    ```
1. Install `gh-pages`
    ```bash
    yarn add --dev gh-pages
1. Remove `script` tag with `"./node_modules/axios/dist/axios.min.js"` from `index.html`
1. Add `import` statements to `index.js` 
    ```js
    import 'regenerator-runtime/runtime';
    import axios from 'axios';
    ```
1. Add a `"scripts"` section to your `package.json`:
    ```json
    "scripts": {
        "predeploy": "rm -rf dist && yarn run build",
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
        "dependencies": {
            "axios": "^0.27.2"
        },
        "devDependencies": {
            "gh-pages": "^4.0.0",
            "parcel-bundler": "^1.12.5"
        },
        "scripts": {
            "predeploy": "rm -rf dist && yarn run build",
            "deploy": "gh-pages -d dist",
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "parcel index.html ",
            "build": "parcel build index.html --public-url /weather-report/"
        }
    }
    ```

    </details>
1. Run `yarn run deploy`
1. Confirm that the GitHub Pages branch is set to `gh-pages` in the GitHub UI by going to **Settings** --> **Pages** --> **Source**
1. Navigate to `https://{your-user-name}.github.io/weather-report/` to see your deployed site.

## Resources
- [How to Use Axios with Javascript](https://www.digitalocean.com/community/tutorials/js-axios-vanilla-js)
- [How to publish a single page application at no cost with GitHub Pages (React, Svelte, etc)](https://levelup.gitconnected.com/how-to-publish-a-single-page-application-at-no-cost-with-github-pages-react-svelte-etc-897b8f75a22b)
- [Parcel with gh-pages GitHub issue](https://github.com/parcel-bundler/parcel/issues/505)