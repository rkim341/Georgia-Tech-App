---
name: run
description: Run the iOS prototype locally. Use when asked to run, start, serve, or preview the prototype.
---

The prototype is static HTML/CSS/JS (no build step). Serve the repo root and open it.

1. If port 8123 is already serving this folder (`curl -sI http://localhost:8123/index.html`), reuse it. If something else holds the port, pick the next free port.
2. Otherwise start a server from the repo root, in the background:
   `python3 -m http.server 8123`
3. Open `http://localhost:8123/index.html` in a browser (the agent's built-in browser if it has one, else `open <url>`).
4. Tell the user the URL. Do not leave a server running that you can't name; mention how to stop it (`lsof -ti :8123 | xargs kill`).
