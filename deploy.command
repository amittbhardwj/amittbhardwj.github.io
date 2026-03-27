#!/bin/bash
# Portfolio deploy script — runs npm install then deploys to Vercel
cd "$(dirname "$0")"

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🚀 Deploying to Vercel..."
npx vercel --prod --yes

echo ""
echo "✅ Done! Check above for your live URL."
