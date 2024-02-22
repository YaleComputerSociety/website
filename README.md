# YCS Website

The Official website for the Yale Computer Society. Built using Next.js with Typescript and Tailwind

## Development Setup

### Requirements

- Install [Visual Studio Code](https://code.visualstudio.com/Download) for the coding environment
- Install the VSCode extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for code styling, syntax checking, and finding problems
- Install Node/npm for managing packages

### Running the Website Locally

```bash
npm i  # install dependencies
npm run dev  # run the website on localhost:3000
```

## Publishing

Before publishing any changes, make sure that `react-version` contains your most updated code. This process involves making sure to add all the modified files, committing these modifications, then pushing to the branch. Example:

```bash
git commit -m "[Clearly explain modifications made]"
git pull
git push origin react-version
```

After, we can publish to gh-pages. Assuming all node packages have been successfully installed, run the following command.

```bash
npm run deploy
```
