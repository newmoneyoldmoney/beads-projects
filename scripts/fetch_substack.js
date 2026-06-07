import Parser from "rss-parser";
import fs from "fs";

async function run() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://newmoneyoldmoney.substack.com/feed");

  const posts = feed.items.slice(0, 10); // latest 10 posts

  let md = `# Latest Substack Posts\n\n`;
  posts.forEach(post => {
    md += `- [${post.title}](${post.link}) — ${new Date(post.pubDate).toLocaleDateString()}\n`;
  });

  fs.writeFileSync("SUBSTACK_POSTS.md", md);
}

run();
{
  "name": "beads-projects",
  "type": "module",
  "dependencies": {
    "rss-parser": "^3.12.0"
  }
}
