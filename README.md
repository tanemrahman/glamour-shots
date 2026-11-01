# Glamour Shots — Website (frontend)

Photography · Videography · Cinematography, Dhaka. Static site: plain HTML/CSS/JS, no build step.

## Run
Open `index.html`, or `python3 -m http.server 8000` and visit http://localhost:8000.

## Edit content — only `js/config.js`
| What | Where in config |
|---|---|
| Phone / WhatsApp / email / social links | `contact` |
| Address + Google Map | `address` (`mapEmbed` = src from Google Maps > Share > Embed) |
| Photos | put files in `assets/portfolio/`, add `{src:"assets/portfolio/x.jpg", title, category}` to `gallery` |
| YouTube films | `videos` -> `{id:"VIDEO_ID", title}` |
| Numbers on the infographic strip | `stats` (**placeholders — confirm before launch**) |
| Reviews | `testimonials` |

Empty `src` / `id` slots show placeholder tiles. Includes EN/বাংলা toggle (texts in `js/main.js`).

## Backend later
The contact form currently opens WhatsApp with the details. When the backend exists, replace the submit handler in `js/main.js` with a `fetch()` POST, and swap `config.js` for an API call for gallery/videos.
