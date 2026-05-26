# GitHub Pages Deployment Script
# Run this after making changes to deploy to GitHub Pages

Write-Host "Building project..." -ForegroundColor Cyan
npm run build

Write-Host "Copying build files..." -ForegroundColor Cyan
Copy-Item build/index.html index.html -Force
Copy-Item build/static static -Recurse -Force

Write-Host "Staging changes..." -ForegroundColor Cyan
git add .

Write-Host "Committing changes..." -ForegroundColor Cyan
$message = if ($args[0]) { $args[0] } else { "Deploy update" }
git commit -m $message

Write-Host "Pushing to GitHub Pages..." -ForegroundColor Cyan
git push origin gh-pages

Write-Host "✅ Deployment complete! Site will update in 1-2 minutes." -ForegroundColor Green
