#!/bin/bash
# Push portfolio source to amittbhardwj.github.io for GitHub Pages deployment
cd "$(dirname "$0")"

echo "🔧 Initializing git..."
git init

echo "📝 Staging all files..."
git add -A
git commit -m "Deploy portfolio to GitHub Pages" 2>/dev/null || git commit --allow-empty -m "Deploy portfolio to GitHub Pages"

echo "🔗 Setting remote..."
git remote remove origin 2>/dev/null || true
git remote add origin git@github.com:amittbhardwj/amittbhardwj.github.io.git

echo "🚀 Pushing to GitHub main branch..."
git branch -M main
git push -u origin main --force

echo ""
echo "✅ Done! GitHub Actions will now build and deploy."
echo "🌐 Your site will be live at: https://amittbhardwj.github.io"
echo "   (check Actions tab on GitHub for build progress)"
