# iOS Prototype (HTML/CSS)

A web-based iPhone simulator for prototyping iOS screens. Static files only: `index.html`, `styles.css`, `app.js`, and one file per screen in `screens/`.

## Skills

Shared across agents. When the user types `/run` or `/save`, read and follow the matching file:

- `/run`: run the prototype locally. See `.claude/skills/run/SKILL.md`
- `/save`: commit and push to the branch. See `.claude/skills/save/SKILL.md`

## Notes

- New screens go in `screens/` as `Screens.<name> = () => \`...\``, plus a `<script>` tag in `index.html`.
- `CLAUDE.md` is the source of truth. `AGENT.md` and `GEMINI.md` are symlinks to it; edit only this file.
