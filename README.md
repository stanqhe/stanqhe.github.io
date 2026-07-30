# Stan Q. He — Personal Website

This repository contains the source code for my personal website, built with [Quarto](https://quarto.org/) and published through GitHub Pages.

The site serves as a public home for selected projects, writing, presentations, and creative work.

## Website

[stanqhe.github.io](https://stanqhe.github.io)

## Structure

```text
.
├── _quarto.yml          # Quarto website configuration
├── index.qmd            # Homepage source
├── legal.qmd            # Terms of Use source
├── life/                 # Personal writing and creative content
├── study/                # Learning and research content
├── work/                 # Project and professional content
├── assets/               # Fonts, images, and other site assets
├── _includes/            # Source-only HTML fragments and template partials
├── _scripts/             # Browser-side interactions
├── _styles/              # Site presentation stylesheets
├── _site/                # Generated website output (ignored by Git)
└── .github/workflows/    # GitHub Actions publishing workflow
```

Ordinary directories contain public content or public assets. Leading-underscore directories contain internal build, behavior, presentation, or generated infrastructure. The underscore excludes those directories from normal Quarto content-render discovery; it does not make their rendered resources private.

## Design

[`DESIGN.md`](DESIGN.md) is the visual and interaction contract for the site. The current navigation uses a compact desktop mega-menu aligned to the main content width, with light/dark theme parity, an understated blurred backdrop, and keyboard support. The custom site navbar remains visible on mobile, while the mega-menu and backdrop are hidden below the desktop breakpoint. Hover feedback remains restrained: navigation and contact links change color without underline, lift, scale, or pop effects.

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
