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

- Keep page content in `.qmd` files.
- Keep site configuration in `_quarto.yml` and other Quarto configuration files.
- Keep styling in the existing style files and directories.
- Keep images, icons, favicons, and visual assets under `assets/`.
- Keep legal or policy content in the existing legal page unless asked to restructure it.

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
- For visual, layout, navigation, Quarto config, or publishing-related changes, run `quarto render` when practical.
- For content-only edits, check the affected page and obvious links when practical.
- For generated-output or publishing changes, verify `_site/` ignore behavior with `git check-ignore -v _site` when relevant.
- Before handoff after file edits, run `git diff --check` when practical.
- If validation cannot be run, report what remains unverified.

## Git

- Keep diffs small and reviewable.
- Do not commit or push unless explicitly asked.
- Before finishing, summarize changed files, validation run, and remaining uncertainty.
