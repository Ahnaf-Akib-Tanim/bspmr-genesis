# BSPMR — Main Website Prototype

A redesign prototype for the main website of the **Bangladesh Society of Physical Medicine & Rehabilitation** ([bspmr.org](https://bspmr.org)).
It shares its visual language with the [BSPMRCON 2026 conference prototype](https://mkrashed.github.io/bspmr-prototype/): navy and signal red, Sora and Manrope type, and the ECG-line motif.

## Pages

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | Hero, key stats, BSPMRCON 2026 countdown, upcoming events, latest notices, research, BJPMR, physiatrist search, membership CTA, gallery |
| About | `about.html` | History, vision and mission, role, objectives, core activities, what PM&R is, milestones |
| Executive Committee | `committee.html` | EC Election 2026 documents, committee positions (to be announced), earliest life members |
| Gallery | `gallery.html` | Photo grid with a lightbox |
| Membership | `membership.html` | Benefits, General vs Life membership, the 5-step online application, checklist, FAQ |
| Member Directory | `members.html` | Life and general members, with search, division filter, sorting and pagination |
| Find a Physiatrist | `find-physiatrist.html` | Search by name or hospital, division and seniority |
| Events | `events.html` | Upcoming and past events, type filter, details modal, seat availability |
| Research | `research.html` | Published research: search, category filter, abstracts, DOI and full-text links |
| BJPMR Journal | `journal.html` | All issues, filterable by year, with covers and PDF downloads |
| Publications | `publications.html` | Conference souvenirs and special issues |
| Notices | `notices.html` | Notice board with search, type filter and attachments |
| Contact | `contact.html` | Secretariat details, enquiry form, map, policies |
| Member Login | `login.html` | Phone + OTP sign-in flow (UI only) |

## Run locally

The site is static HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

To publish it on GitHub Pages, go to **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

## Structure

```
assets/
  css/style.css      design tokens and all component styles
  js/site.js         shared header, footer, icons, card renderers, lightbox, modal
  js/data.js         content snapshot (members, events, notices, research, journal)
  img/               logo, gallery, journal covers, publication thumbnails
*.html               one file per page
```

## Data

`assets/js/data.js` is a snapshot of bspmr.org's public content: events, notices, published research, BJPMR issues, and life and general members.

- **Members:** the snapshot keeps only public, professional fields — name, designation, institute, life-membership (LM) number and photo.
- **Divisions:** the Find a Physiatrist page guesses each member's division from the name of their institute. A production build should use members' chamber locations instead.
- **Prototype-only features:** the member portal flows (registration, payment, submissions) show the intended UX but are not connected to a backend.
