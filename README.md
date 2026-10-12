# ⛈️ StormCloud

A dark-themed music streaming web app with a fixed top bar, sidebar navigation, a content grid and a persistent bottom player. StormCloud also offers a **Karaoke** mode and a **Premium** tier ($1.99).

> **Status:** front-end prototype (HTML + CSS). Player, search, auth and data are not wired up yet. The diagrams in [`docs/architecture.pdf`](docs/architecture.pdf) describe the intended architecture.

---

## Features

| Area | Description |
|------|-------------|
| **Search** | Search songs, artists and albums from the header |
| **Navigation** | Home, Explore, Library, Playlists, Favorites, Latest releases, Artists, Albums, Genres |
| **Accounts** | Login, Sign up, profile picture, notifications |
| **Player** | Shuffle, previous, play/pause, next, repeat, seek bar, volume, queue, now-playing info |
| **Karaoke** | Dedicated karaoke entry point in the header |
| **Premium** | No ads, higher audio quality, unlimited downloads |

## Tech Stack

- HTML5
- CSS3 (flexbox, fixed layout, gradients, custom range sliders)
- [Font Awesome](https://fontawesome.com/) for icons

## Project Structure

```
StormCloud/
├── index.html      # Page structure: header, sidebar, main grid, footer player
├── styles.css      # Layout and theme
└── images/
    ├── logo2.png
    ├── profile.png
    └── gm.png      # Album art for the now-playing track
```

## Getting Started

1. Clone or download the project.
2. Make sure the `images/` folder sits next to `index.html`.
3. Open `index.html` in a browser (internet access is needed for Font Awesome).

## Layout Overview

```
┌──────────────────────────────────────────────────────┐
│ Header (80px): logo · search · karaoke · auth · bell │
├────────────┬─────────────────────────────────────────┤
│ Sidebar    │ Main content (grid of .box cards)       │
│ + Premium  │                                         │
│   card     │                                         │
├────────────┴─────────────────────────────────────────┤
│ Footer player: now playing · controls · volume       │
└──────────────────────────────────────────────────────┘
```

## Known Issues / Next Steps

- [ ] Replace absolute image paths (`C:\Users\...`) with relative ones (`images/profile.png`, `images/gm.png`).
- [ ] Fix CSS selectors: `notifications:hover` should be `#notifications:hover`, and `#signup:hover` only affects the inner span.
- [ ] Replace hard-coded `position: fixed` offsets (`left: 500px`, `left: 630px`, etc.) with flexbox/grid so the layout is responsive.
- [ ] Make the sidebar links work (`href="#Latest releases"` contains a space; use `#latest-releases`).
- [ ] Add JavaScript for playback, seek/volume fill, and search.
- [ ] Add a backend and database (see the ER diagram in [`docs/architecture.pdf`](docs/architecture.pdf)).

---

## Architecture

The class diagram, ER diagram and user workflow are in [`docs/architecture.pdf`](docs/architecture.pdf).
