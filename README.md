# YCS Website

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
