# YCS Website

<<<<<<< HEAD
<<<<<<< HEAD
The Official website for the Yale Computer Society. Built using Next.js with Typescript and Tailwind

## Getting Started

### Requirements

- Install [Visual Studio Code](https://code.visualstudio.com/Download) for the coding environment
- Install the VSCode extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for code styling, syntax checking, and finding problems
- Install Node/npm for managing packages
  - Mac or Linux: Install Node: see [here](https://nodejs.org/en/download/) for downloadable installer.
  - Windows: Install [nvm, node.js, and npm](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2#install-nvm-nodejs-and-npm). Follow Steps 1 - 9 at the link to the left.

### Running the Website Locally

```bash
npm i  # install dependencies
npm run dev  # run the website on localhost:3000
```

## Deployment

The website is hosted using [Vercel](https://vercel.com/). You can log in using the <yalecomputersociety@gmail.com> account. When you push any code to main, Vercel will automatically apply the new changes and try building the app and deploying it. Because of this, please make sure the website will build correctly BEFORE you push to main.

Locally test a build with:

```bash
npm run build # create the build in the .next/ directory
npm run start # run the build locally
```

After confirming the build runs locally, push your commits to the Github main branch
=======
YCS Website is a React web application that serves as the official website for the Yale Computer Society.
=======
The Official website for the Yale Computer Society. Built using React and Tailwind
>>>>>>> 4090f01 (Improve buttons and update readme)

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

<<<<<<< HEAD
<<<<<<< HEAD
This will run the script located in the `package.json` file located under the scripts property, keyed by the value of "deploy". The script is:

```bash
gh-pages -d build
```

GH-Pages will handle building. Once it does, make sure that the custom domain yalecompsociety.org is registered. This can be done by going to settings, then pages, finally to the custom domain section.

## TODO

- Refactor website to have a sticky navbar.
- Add designs from design team.
>>>>>>> 846ace8 (Added new images, modified README)
=======
GH-Pages will handle building. Once it does, on GitHub go to settings -> then pages -> custom domain section and type in the domain name, `yalecomputersociety.org`
>>>>>>> 4090f01 (Improve buttons and update readme)
=======
GH-Pages will handle building. Once it does, on GitHub go to settings -> pages -> custom domain section and type in the domain name, `yalecomputersociety.org`
>>>>>>> e470407 (Update readme)
