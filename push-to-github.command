#!/bin/bash
# Push portfolio to amittbhardwj.github.io — run this once
WORK_DIR="$(cd "$(dirname "$0")" && pwd)"
GIT_DIR="/tmp/portfolio_git_$$"

echo "Setting up fresh git state..."
rm -rf "$GIT_DIR"

echo "Initializing..."
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" init
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" config user.email "amitt.bhardwj@gmail.com"
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" config user.name "amittbhardwj"

echo "Staging files..."
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" add -A

echo "Committing..."
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" commit -m "Add portfolio — glassmorphism dark theme with Next.js 14"

echo "Configuring remote..."
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" remote add origin git@github.com:amittbhardwj/amittbhardwj.github.io.git
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" branch -M main

echo "Pushing to GitHub..."
git --git-dir="$GIT_DIR" --work-tree="$WORK_DIR" push -u origin main --force

rm -rf "$GIT_DIR"

echo ""
echo "Done! GitHub Actions is now building your site."
echo "Live at: https://amittbhardwj.github.io  (ready in ~2 mins)"
