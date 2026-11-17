# Work screenshots: manifest

Task #39. New screenshots of the live client sites, taken with Playwright Chromium on 17 Nov 2026 (deviceScaleFactor 1, viewport-height crop, nothing dismissed).
The GitHub connector used for this PR can only commit text, so the PNGs are **not** in this branch.
They were captured in the overnight run's sandbox (`/home/claude/out/work-screens/<slug>-<page>-<width>.png`), which is temporary and will likely be gone by the time you read this.
A chat session should re-run the capture (1440×900 and 390×844 viewports, wait for network idle) and commit the PNGs to the repo paths below on `feat/work-collection`.

Then run `node scripts/fetch-work-images.mjs` to pull the picked Squarespace images into `public/work/<slug>/`.

| Site | Page | Width | Source URL | Repo path | Status (17 Nov run) |
|---|---|---|---|---|---|
| peace-park | home | 1440 / 390 | https://www.thepeacepark.co/ | `public/work/peace-park/screen-home-{1440,390}.png` | Captured |
| peace-park | inner | 1440 / 390 | https://www.thepeacepark.co/gathering | `public/work/peace-park/screen-inner-{1440,390}.png` | Captured |
| mountain-mind-project | home | 1440 / 390 | https://mountainmindproject.com/ | `public/work/mountain-mind-project/screen-home-{1440,390}.png` | Captured |
| mountain-mind-project | inner | 1440 / 390 | https://mountainmindproject.com/aboutmountainmindproject | `public/work/mountain-mind-project/screen-inner-{1440,390}.png` | Captured |
| hines-goldsmiths | home | 1440 / 390 | https://hines-gold.com/ | `public/work/hines-goldsmiths/screen-home-{1440,390}.png` | Captured; network never went idle (shot after load + 17 s). The site's "Need Assistance?" pop-up is visible. |
| hines-goldsmiths | inner | 1440 / 390 | https://hines-gold.com/collections/teton-pendants | `public/work/hines-goldsmiths/screen-inner-{1440,390}.png` | Captured; same pop-up note. |
| jackson-hole-public-art | home | 1440 / 390 | https://www.jhpublicart.org/ | `public/work/jackson-hole-public-art/screen-home-{1440,390}.png` | Captured |
| jackson-hole-public-art | inner | 1440 / 390 | https://www.jhpublicart.org/about | `public/work/jackson-hole-public-art/screen-inner-{1440,390}.png` | Captured |
| animal-hospital-of-boone | home | 1440 / 390 | https://www.animalhospitalboone.com/ | `public/work/animal-hospital-of-boone/screen-home-{1440,390}.png` | Captured |
| animal-hospital-of-boone | inner | 1440 / 390 | https://www.animalhospitalboone.com/about | `public/work/animal-hospital-of-boone/screen-inner-{1440,390}.png` | Captured |
| connecticut-signcraft | home | 1440 / 390 | https://www.connecticutsigncraft.com/ | `public/work/connecticut-signcraft/screen-home-{1440,390}.png` | Captured |
| connecticut-signcraft | inner | 1440 / 390 | https://www.connecticutsigncraft.com/services | `public/work/connecticut-signcraft/screen-inner-{1440,390}.png` | Captured |
| dwelling | home | 1440 / 390 | https://www.dwellingjh.com/ | `public/work/dwelling/screen-home-{1440,390}.png` | Failed: page stays behind its white loading screen in the sandbox (jQuery from ajax.googleapis.com is blocked by the sandbox proxy). Retake from a normal browser. |
| dwelling | inner | 1440 / 390 | https://www.dwellingjh.com/about | `public/work/dwelling/screen-inner-{1440,390}.png` | Failed: same cause. |

Wind River Builders: branding only. No website screenshots, by Freeman's decision.
