# ISLAMIC GOOGLE

## Deploying to GitHub Pages

1. Push all files to your GitHub repository (e.g., `ISLAMIC-GOOGEL`).
2. Go to repository Settings > Pages.
3. Select branch `main` and `/ (root)` folder.
4. Save. Your site will be live at `https://<yourusername>.github.io/ISLAMIC-GOOGEL/`.

## Updating the Search Index (Admin Guide)

- **Edit `data/search_index.json`.** Each item is an object with fields:
  - `title`, `type`, `speaker` or `author`, `summary`, `tags` (array), `language`, `link`, `authenticity`
- **How to add new items:**
  1. Add new objects at the end of the JSON array.
  2. Use [csv-to-json converters](https://www.convertcsv.com/csv-to-json.htm) if you curate in Excel/Sheets.
  3. Make sure all links are public and videos are not region-blocked.
- **How to update:**
  - After editing, push changes to GitHub (`git add .`, `git commit -m "Update search index"`, `git push`).
  - The site updates automatically.

## Add/Remove Media

- To add new YouTube lectures, edit `library.html`.
- To add downloadable audios, place files in `assets/` and create links in `library.html`.

## Contact Form

- Static form uses `mailto:`. Change email in `js/main.js` (see line with `mailto:suleiman@example.com`).
- For more advanced forms, use free services like Formspree or Google Forms.

## Owner Contact

- WhatsApp: +233599931348 and +233248503631
