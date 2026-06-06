# Stan Q. He — Personal Website

This repository contains the source code for my personal website, built with [Quarto](https://quarto.org/) and published through GitHub Pages.

The site serves as a public home for selected projects, writing, presentations, and creative work.

## Website

[stanqhe.github.io](https://stanqhe.github.io)

## Structure

```text
.
├── _quarto.yml        # Quarto website configuration
├── index.qmd          # Homepage source
├── legal.qmd          # Terms of Use source
├── styles.css         # Custom site styling
├── assets/            # Fonts, images, and other site assets
├── _site/             # Generated website output (ignored by Git)
├── .github/workflows/ # GitHub Actions publishing workflow
└── README.md
```

## Development

Render the site locally:

```bash
quarto render
```

Preview the site locally:

```bash
quarto preview
```

Running `quarto render` creates the generated website in `_site/`. This directory is ignored by Git and should not be committed.

## Publishing

This site is published through GitHub Actions. On pushes to `main`, [`.github/workflows/publish.yml`](.github/workflows/publish.yml) renders the Quarto project and deploys the generated `_site/` directory to GitHub Pages.

## Content and Usage

Unless otherwise stated, the original writing, images, project materials, visual design, and other content in this repository and on the published website are owned by Stan Q. He.

For content usage, attribution, licensing, and AI/synthetic media restrictions, see the site’s [Terms of Use](https://stanqhe.github.io/legal.html).

## License

No general open-source license is granted for the original content, images, or visual materials in this repository.

Third-party fonts, libraries, datasets, tools, and other external materials remain subject to their respective licenses.
