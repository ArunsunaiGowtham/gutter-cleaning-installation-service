const fs = require('fs');
const vm = require('vm');
const path = require('path');

const rootDir = __dirname;
const blogDataCode = fs.readFileSync(path.join(rootDir, 'assets/js/blog-data.js'), 'utf8');
const posts = vm.runInNewContext(blogDataCode + '; BLOG_POSTS;');

console.log('Total articles:', posts.length);
posts.forEach((p, idx) => {
  console.log(`\n========================================`);
  console.log(`[#${idx + 1}] ID: ${p.id}`);
  console.log(`Title: ${p.title}`);
  console.log(`Category: ${p.category}`);
  console.log(`Image: ${p.image}`);
  console.log(`Excerpt: ${p.excerpt}`);
  const textContent = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`Content Preview: ${textContent.slice(0, 150)}...`);
});
