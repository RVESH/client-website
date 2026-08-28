jitna website utna git rkho
eg: restaurant-01/.git
    ecommerce-01/.git
    hotel-resort-01/.git
    ...   

    cd /g/apage/one/projects/restaurant-01
git init
git add .
git status

git commit -m "restaurant-01 v1"



////or gitignore  
node_modules/
dist/
.vite/
.env
.env.*
!.env.example
.DS_Store
Thumbs.db        




Agar GitHub par bhi separate repository chahiye

Then:

git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main



