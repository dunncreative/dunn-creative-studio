# Work screenshots: manifest

Task #39. Screenshots of the live client sites at the repo paths below.

**Retake, 17 Nov 2026 (chat session):** the 1440×900 desktop shots for all seven sites are committed on `feat/work-collection`, Dwelling included (it loads fine from a normal browser). Captured at native 1:1 CSS pixels, viewport crop, nothing dismissed, after the page and its lazy images had loaded.
The 390×844 mobile shots are **not** in this branch yet: the browser used for the retake can't go narrower than 500 px wide. They still need a capture at 390×844.

The overnight run's notes (Playwright Chromium, deviceScaleFactor 1) are kept in the last column for reference.

Then run `node scripts/fetch-work-images.mjs` to pull the picked Squarespace images into `public/work/<slug>/`.

| Site | Page | Width | Source URL | Repo path | 1440 retake | Overnight run notes |
|---|---|---|---|---|---|---|
| peace-park | home | 1440 / 390 | https://www.thepeacepark.co/ | `public/work/peace-park/screen-home-{1440,390}.png` | Committed | Captured |
| peace-park | inner | 1440 / 390 | https://www.thepeacepark.co/gathering | `public/work/peace-park/screen-inner-{1440,390}.png` | Committed | Captured |
| mountain-mind-project | home | 1440 / 390 | https://mountainmindproject.com/ | `public/work/mountain-mind-project/screen-home-{1440,390}.png` | Committed | Captured |
| mountain-mind-project | inner | 1440 / 390 | https://mountainmindproject.com/aboutmountainmindproject | `public/work/mountain-mind-project/screen-inner-{1440,390}.png` | Committed | Captured |
| hines-goldsmiths | home | 1440 / 390 | https://hines-gold.com/ | `public/work/hines-goldsmiths/screen-home-{1440,390}.png` | Committed; "Need Assistance?" pop-up visible | Captured; network never went idle (shot after load + 17 s). The site's "Need Assistance?" pop-up is visible. |
| hines-goldsmiths | inner | 1440 / 390 | https://hines-gold.com/collections/teton-pendants | `public/work/hines-goldsmiths/screen-inner-{1440,390}.png` | Committed | Captured; same pop-up note. |
| jackson-hole-public-art | home | 1440 / 390 | https://www.jhpublicart.org/ | `public/work/jackson-hole-public-art/screen-home-{1440,390}.png` | Committed | Captured |
| jackson-hole-public-art | inner | 1440 / 390 | https://www.jhpublicart.org/about | `public/work/jackson-hole-public-art/screen-inner-{1440,390}.png` | Committed | Captured |
| animal-hospital-of-boone | home | 1440 / 390 | https://www.animalhospitalboone.com/ | `public/work/animal-hospital-of-boone/screen-home-{1440,390}.png` | Committed | Captured |
| animal-hospital-of-boone | inner | 1440 / 390 | https://www.animalhospitalboone.com/about | `public/work/animal-hospital-of-boone/screen-inner-{1440,390}.png` | Committed | Captured |
| connecticut-signcraft | home | 1440 / 390 | https://www.connecticutsigncraft.com/ | `public/work/connecticut-signcraft/screen-home-{1440,390}.png` | Committed | Captured |
| connecticut-signcraft | inner | 1440 / 390 | https://www.connecticutsigncraft.com/services | `public/work/connecticut-signcraft/screen-inner-{1440,390}.png` | Committed | Captured |
| dwelling | home | 1440 / 390 | https://www.dwellingjh.com/ | `public/work/dwelling/screen-home-{1440,390}.png` | Committed | Failed: page stays behind its white loading screen in the sandbox (jQuery from ajax.googleapis.com is blocked by the sandbox proxy). Retake from a normal browser. |
| dwelling | inner | 1440 / 390 | https://www.dwellingjh.com/about | `public/work/dwelling/screen-inner-{1440,390}.png` | Committed | Failed: same cause. |

Wind River Builders: branding only. No website screenshots, by Freeman's decision.
