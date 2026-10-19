
# Zachary Shimpa's Personal Website

## Description

This is the source code for my personal website. Here, you can learn more about me, my portfolio, and how to get in touch!

## Features

- About Me: Learn more about me and my background.
- Portfolio: Check out some of the projects I've worked on.
- Blog: Read some of my thoughts on various topics.
- Contact: Find out how to get in touch with me.

## Getting Started

Requires Node.js 22.12.0 or newer. The tested version is pinned in `.nvmrc`.

```sh
git clone https://github.com/ZorkDaNerd/zachshimpa.git
cd zachshimpa
nvm install
nvm use
npm ci
npm run dev
```

If you do not use nvm, install Node.js 24.22.0 before installing dependencies. The dev server is available at `http://localhost:4321`.

To create a production build, run `npm run build`. The generated site is written to `dist/`.

## Contributing

While this is a personal website, if you find any bugs or areas for improvement, feel free to open an issue or submit a pull request.
This websites framework and template are based off of one provided by [Astro](https://github.com/withastro)

<!-- ## License

This project is open source, under the [MIT License](LICENSE). -->

## Contact

If you want to contact me you can reach me at <zshimpa.404@gmail.com>.
<!-- | Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     | -->