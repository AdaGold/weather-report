# Deploying to GitHub Pages

Follow the steps below to deploy to GitHub Pages
1. Create a new branch called `deployed-version` and switch to it with the following command: 
    ```bash
    $ git checkout -b deployed-version
     ```

2. Push your changes to your remote repository on a new branch called `deployed-version`
    ```bash
    $ git push origin deployed-version
    ```
3. Confirm that the GitHub Pages branch is set to `deployed-version` in the GitHub UI by going to **Settings** --> **Pages** --> **Source**
4. Navigate to `https://{your-user-name}.github.io/weather-report/` to see your deployed site.

## Resources
- [How to Use Axios with Javascript](https://www.digitalocean.com/community/tutorials/js-axios-vanilla-js)
- [How to publish a single page application at no cost with GitHub Pages](https://docs.github.com/en/pages/quickstart)