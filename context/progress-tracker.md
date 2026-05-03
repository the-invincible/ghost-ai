# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 03: Next (TBD — add feature spec)

## Current Goal

- Define and implement the next feature unit.

## Completed

- `01-design-system`: All 7 shadcn/ui primitive components generated (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea). `lib/utils.ts` with `cn()` created. `lucide-react` installed. Ghost AI custom design tokens (`--bg-base`, `--accent-primary`, `--accent-ai`, etc.) added to `globals.css` and mapped to Tailwind via `@theme inline`. Dark mode forced on `<html>` via `class="dark"`.
- `02-editor`: `components/editor/editor-navbar.tsx` and `components/editor/project-sidebar.tsx` implemented. TypeScript clean.

## In Progress

- None.

## Next Up

- Add Feature 03 spec to `context/feature-specs/` and begin implementation.

## Open Questions

- No open questions.

## Architecture Decisions

- shadcn/ui is the component library on top of Tailwind 4. All UI tokens are defined as CSS custom properties in `globals.css` and mapped to Tailwind via `@theme inline`. No raw Tailwind color classes (`zinc-*`, etc.) are used.
- Dark mode is forced globally via `class="dark"` on `<html>`. No light mode variant is rendered.
- Ghost AI project-specific tokens (`--bg-*`, `--text-*`, `--accent-*`, `--state-*`, `--border-*`) live in a `:root, .dark` block at the bottom of `globals.css` and are exposed as Tailwind utilities (`bg-base`, `text-copy-primary`, `text-brand`, etc.) via `@theme inline`.

## Session Notes

- Feature 01 complete. All shadcn components verified installed. `globals.css` now includes both shadcn theme tokens and Ghost AI custom design tokens. Dark mode is always active.
- Feature 02 complete. `components/editor/editor-navbar.tsx` and `components/editor/project-sidebar.tsx` created. Navbar: fixed h-12 top bar, PanelLeftOpen/PanelLeftClose toggle, left/center/right sections, dark bg + bottom border. Sidebar: fixed overlay (z-40), slides from left via CSS translate, does not push content, Projects header + X close button, shadcn Tabs (My Projects / Shared) with empty placeholder states, full-width New Project button pinned to footer. TypeScript compile: clean (exit 0). Dialog pattern: shadcn Dialog primitive already installed — no additional dialogs built.
