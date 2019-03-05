set branch=$1
echo $branch
git checkout -b $branch
git checkout $branch
git add -A
git commit -m "add"
git push origin $branch
