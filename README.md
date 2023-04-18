# YCS Website

YCS Website is a React web application that serves as the official website for the Yale Computer Society.

## Installation

After cloning, make sure to use package manager [npm](https://nodejs.org/en/download) to install all dependencies.

```bash
npm i
```

## File Structure
- Assets: Stores images and icons that may need to be rendered within the website.
- Components: Stores reusable React code that many pages of the website will contain.
- Pages: Stores the pages that will be navigable on the website.

## Publishing

Before publishing any changes, make sure that `react-version` contains your most updated code. This process involves making sure to add all the modified files, committing these modifications, then pushing to the branch. Example:

```bash
git add .
git commit -m "[Clearly explain modifications made]"
git push origin react-version
```

After, we can publish to gh-pages. Assuming all node packages have been successfully installed, run the following command.

```bash
npm run deploy
```

This will run the script located in the `package.json` file located under the scripts property, keyed by the value of "deploy". The script is:

```bash
gh-pages -d build
```

GH-Pages will handle building. Once it does, make sure that the custom domain yalecompsociety.org is registered. This can be done by going to settings, then pages, finally to the custom domain section.

## TODO

- Refactor website to have a sticky navbar.
- Add designs from design team.