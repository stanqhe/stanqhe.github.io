# AGENTS.md

Project-specific instructions for AI agents working in this repository.

Apply any global or higher-level agent instructions by default; when this file gives a more specific or conflicting rule for this repository, this file wins.

## Project Overview

- This repository contains Stan Q. He's personal Quarto website.
- The site is public-facing and should remain polished, lightweight, personal-professional, and easy to maintain.
- Prioritize clarity, restraint, and consistency over novelty.

## Source of Truth

- Follow `DESIGN.md` for visual decisions.
- Follow `_quarto.yml` for site structure, navigation, and Quarto configuration.
- Follow `.github/workflows/publish.yml` for GitHub Pages publishing behavior.
- Follow `README.md` for project setup and public-facing repository context.
- Treat existing `.qmd`, `.scss`, `.css`, and asset structure as the current implementation baseline.
- Do not change biography, positioning, legal text, or public-facing wording unless explicitly asked.

## Scope

- Keep changes scoped to this repository.
- Do not move files outside the existing project structure unless explicitly asked.
- Do not edit rendered output such as `_site/` unless explicitly asked.
- Do not create duplicate design systems, duplicate style files, or parallel site structures.
- Do not add new frameworks or build systems.

## Development Environment

- Prefer the existing devcontainer workflow when running project commands.
- Do not modify `.devcontainer/`, container settings, language versions, package managers, or dependency files unless explicitly asked.
- If a dependency or tool is missing, report it instead of installing or changing the environment.

## Project Structure

- Treat the existing top-level directory structure as canonical.
- Keep primary content within the corresponding `work/`, `study/`, or `life/` section, with page and article content in `.qmd` files.
- Keep site-wide configuration in `_quarto.yml` and other Quarto configuration files.
- Keep reusable HTML fragments in `includes/`, browser-side JavaScript in `scripts/`, stylesheets in `styles/`, and static resources in `assets/`; preserve exact filenames where Quarto or existing template references depend on them.
- Keep collection index pages and shared metadata beside the content they govern.
- Keep repository infrastructure in `.github/` and `.devcontainer/`.
- Keep legal and policy content in the existing legal page unless explicitly asked to restructure it.
- Prefer extending existing files and directories over creating new abstractions for a single feature.
- Do not create, rename, move, or remove top-level directories, or introduce generic layers unless explicitly requested.
- When an approved structural change affects file paths, update all related references, configuration, and documentation in the same change.

## Design Rules

- Preserve the Arc Design visual language defined in `DESIGN.md`.
- Do not invent new colors, fonts, shadows, button styles, or layout patterns when `DESIGN.md` already defines the relevant choice.
- Prefer restrained, editorial, airy, and lightweight UI.
- Avoid corporate-looking icon lists, heavy gradients, excessive glow, generic portfolio templates, and over-designed cards.
- Preserve responsive behavior and mobile readability.

## Content Rules

- Preserve the user's wording unless the task explicitly asks for copy changes.
- Keep public-facing writing concise, credible, and non-hype.
- Avoid inflated AI language, exaggerated claims, and generic marketing phrases.
- Do not add personal details, contact links, or social links unless explicitly asked.

## Build and Validation

- Use the narrowest relevant validation for the change.
- Assume the user may already be running the site preview at `http://localhost:2027`.
- Do not start, restart, stop, or background the preview server unless explicitly asked.
- After a coherent round of rendered-site changes, check the affected pages when the existing preview server is available.
- Do not write preview responses to temporary files unless inspecting the generated HTML is necessary.
- If the preview server is unavailable, report that rendered validation was not completed rather than starting one automatically.
- For content-only edits, check the affected page and obvious links when practical.
- For generated-output or publishing changes, verify `_site/` ignore behavior with `git check-ignore -v _site` when relevant.
- Before handoff after file edits, run `git diff --check` when practical.
- If validation cannot be run, report what remains unverified.

## Git

- Keep diffs small and reviewable.
- Do not commit or push unless explicitly asked.
- Before finishing, summarize changed files, validation run, and remaining uncertainty.
