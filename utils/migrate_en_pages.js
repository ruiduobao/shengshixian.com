#!/usr/bin/env node
/**
 * One-off migration script: rewrite frontmatter of the English pages copied
 * into docs/en/CTAmap/ so they live under the /en/ locale.
 *  - permalink: /pages/<hash>/ -> /en/pages/<hash>/
 *  - missing frontmatter (2025/2026/Code Modification Log) gets a new block
 *    with fresh hashes
 *  - body image paths: ../PICS/... -> /img/PICS/..., Typora absolute paths
 *    -> /img/PICS_TY/<name>, dead assets/... links neutralized
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'docs', 'en', 'CTAmap');

// Hashes reused from the matching Chinese page for an exact 1:1 language
// switch; new pages (no Chinese twin) get freshly minted hashes.
// NOTE: VuePress core prepends the locale path ('/en/') to the frontmatter
// permalink automatically, so entries here must NOT start with /en/.
const permalinkByFile = {
  '1.Data Download.md': 'pages/d35ae5/',
  '2.Production Log.md': 'pages/b4a164/',
  '3.2000 Early Data.md': 'pages/30e9e2/',
  '4.2001 Early Data.md': 'pages/5d13a5/',
  '5.2002 Early Data.md': 'pages/6285cb/',
  '6.2003 Early Data.md': 'pages/94a446/',
  '7.2004 Early Data.md': 'pages/493b84/',
  '8.2005 Early Data.md': 'pages/98f802/',
  '9.2006 Early Data.md': 'pages/a26dc6/',
  '10.2007 Early Data.md': 'pages/4c1d93/',
  '11.2008 Early Data.md': 'pages/d82398/',
  '12.2009 Early Data.md': 'pages/e4f303/',
  '13.2010 Early Data.md': 'pages/524fe0/',
  '14.2011 Early Data.md': 'pages/169026/',
  '15.2012 Early Data.md': 'pages/3ff02f/',
  '16.2013 Early Data.md': 'pages/65763c/',
  '17.2014 Early Data.md': 'pages/2013shengshixian/',
  '18.2015 Early Data.md': 'pages/2015shengshixian/',
  '19.2016 Early Data.md': 'pages/2016shengshixian/',
  '20.2017 Early Data.md': 'pages/2017shengshixian/',
  '21.2018 Early Data.md': 'pages/2018shengshixian/',
  '22.2019 Early Data.md': 'pages/2019shengshixian/',
  '23.2020 Early Data.md': 'pages/b8a988/',
  '24.2021 Early Data.md': 'pages/2021/',
  '25.2022 Early Data.md': 'pages/457d85/',
  '26.2023 Early Data.md': 'pages/d6884f/',
  '27.2024 Early Data.md': 'pages/6c83ae/',
  '28.2025 Early Data.md': 'pages/e2a5c1/',
  '29.2026 Early Data.md': 'pages/f7b3d9/',
  '30.CTAmap Version 1.11.md': 'pages/2014shengshixian/',
  '31.CTAmap 1.12 Update.md': 'pages/457d85212/',
  '32.CTAmap 1.20 Update.md': 'pages/b3b70f/',
  '33.Data-Processing Code.md': 'pages/486c47/',
  '34.Code Modification Log.md': 'pages/c94e2a/',
};

// date/title carried over from the English source frontmatter (or invented
// for the three files that had none)
const dateByFile = {
  '1.Data Download.md': '2022-08-01 11:19:16',
  '2.Production Log.md': '2022-08-31 00:00:48',
  '3.2000 Early Data.md': '2025-04-25 21:36:44',
  '4.2001 Early Data.md': '2025-04-25 21:36:45',
  '5.2002 Early Data.md': '2025-04-25 21:36:45',
  '6.2003 Early Data.md': '2025-04-25 21:36:45',
  '7.2004 Early Data.md': '2025-04-25 21:36:45',
  '8.2005 Early Data.md': '2025-04-25 21:36:45',
  '9.2006 Early Data.md': '2025-04-25 21:36:45',
  '10.2007 Early Data.md': '2025-04-25 21:36:45',
  '11.2008 Early Data.md': '2025-04-25 21:36:45',
  '12.2009 Early Data.md': '2024-11-21 21:13:45',
  '13.2010 Early Data.md': '2024-11-21 21:13:45',
  '14.2011 Early Data.md': '2024-11-21 21:13:45',
  '15.2012 Early Data.md': '2024-11-21 21:13:45',
  '16.2013 Early Data.md': '2024-11-21 21:13:45',
  '17.2014 Early Data.md': '2023-02-12 18:33:34',
  '18.2015 Early Data.md': '2022-12-30 18:33:34',
  '19.2016 Early Data.md': '2022-12-24 20:30:34',
  '20.2017 Early Data.md': '2022-12-22 14:26:34',
  '21.2018 Early Data.md': '2022-12-22 00:03:34',
  '22.2019 Early Data.md': '2022-12-21 03:39:34',
  '23.2020 Early Data.md': '2022-08-01 04:09:34',
  '24.2021 Early Data.md': '2022-08-18 00:09:34',
  '25.2022 Early Data.md': '2022-08-31 00:00:43',
  '26.2023 Early Data.md': '2023-10-15 22:23:54',
  '27.2024 Early Data.md': '2024-11-21 21:13:45',
  '28.2025 Early Data.md': '2025-12-31 12:00:00',
  '29.2026 Early Data.md': '2025-12-31 12:00:00',
  '30.CTAmap Version 1.11.md': '2023-02-11 18:33:34',
  '31.CTAmap 1.12 Update.md': '2023-10-15 00:00:43',
  '32.CTAmap 1.20 Update.md': '2024-11-21 21:13:45',
  '33.Data-Processing Code.md': '2024-11-21 21:13:45',
  '34.Code Modification Log.md': '2026-04-16 12:00:00',
};

const titleByFile = {
  '28.2025 Early Data.md': 'Province/City/County Administrative Division Data, Early 2025',
  '29.2026 Early Data.md': 'Province/City/County Administrative Division Data, Early 2026',
  '34.Code Modification Log.md': 'Code Modification Log',
};

let changed = 0;
for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith('.md')) continue;
  const file = path.join(dir, name);
  let text = fs.readFileSync(file, 'utf8');
  const orig = text;

  // 1) body-level image path rewrites (run before frontmatter surgery so we
  //    can key the frontmatter rewrite off the original permalink line)
  //    ../PICS/... -> /img/PICS/... (also inside HTML <img src="...">)
  text = text.replace(/(\.\.\/PICS\/)/g, '/img/PICS/');
  //    Typora absolute paths -> /img/PICS_TY/<file> (PICS_TY holds the real
  //    exported copies; 2 of the 2026-04-16 files were never exported and are
  //    commented out below)
  text = text.replace(/(?:C:\\+Users\\+86158\\+AppData\\+Roaming\\+Typora\\+typora-user-images\\+)([^)"'\s]+\.(?:png|jpg|jpeg|webp))/g, (m, fname) => {
    if (fs.existsSync(path.join('Z:', 'logs', 'PICS_TY', fname))) return `/img/PICS_TY/${fname}`;
    return m; // leave untouched; handled by the dead-link pass
  });
  //    dead assets/ links (source images never existed on disk) -> italic note
  text = text.replace(/!\[([^\]]*)\]\(assets\/[^)]+\)/g, '*[image missing — source file not found]*');
  //    dead Typora refs that PICS_TY cannot supply (2 files, 2026-04-16)
  text = text.replace(/!\[([^\]]*)\]\(C:\\+Users\\+86158[^)]*image-20260416171408641\.png\)/g, '*[image missing — source file not found]*')
             .replace(/!\[([^\]]*)\]\(C:\\+Users\\+86158[^)]*image-20260416172223221\.png\)/g, '*[image missing — source file not found]*');

  // 2) frontmatter
  const hasFm = /^---\r?\n/.test(text);
  const permalink = permalinkByFile[name];
  const date = dateByFile[name];
  if (hasFm) {
    // rewrite permalink: /pages/<anything>/ -> /en/pages/<hash>/
    text = text.replace(/^permalink:.*$/m, `permalink: ${permalink}`);
    // ensure title/date exist (they do for all frontmatter files today)
    if (!/^title:/m.test(text)) {
      text = text.replace(/^---\r?\n/, `---\ntitle: ${titleByFile[name] || name.replace(/\.md$/, '')}\n`);
    }
  } else {
    const fm = [
      '---',
      `title: ${titleByFile[name] || name.replace(/\.md$/, '')}`,
      `date: ${date}`,
      `permalink: ${permalink}`,
      '---',
      '',
    ].join('\n');
    text = fm + text.replace(/^\uFEFF/, '');
  }

  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    changed++;
    console.log('updated:', name);
  } else {
    console.log('unchanged:', name);
  }
}
console.log(`\n${changed} file(s) updated`);
