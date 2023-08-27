# YCS Website

The Official website for the Yale Computer Society. Built using React and Tailwind

## Setup

After cloning, make sure to use package manager [npm](https://nodejs.org/en/download) to install all dependencies.

```bash
npm i  # install dependencies
npm start  # run the website on localhost:3000
```

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

GH-Pages will handle building. Once it does, on GitHub go to settings -> pages -> custom domain section and type in the domain name, `yalecomputersociety.org`
