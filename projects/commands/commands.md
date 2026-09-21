Bilkul. Tumhare React + Vite projects ke liye ek master Git Bash command guide rakhna useful hoga. Ye commands baar-baar kaam aayengi: project inspect karna, complete tree dekhna, CSS/SCSS locate karna, imports find karna, npm setup check karna, lint/build verify karna, Git status/diff dekhna, etc.

1. Project ka complete structure dekhna
Recommended master tree command
find . -maxdepth 6 -type f \
  ! -path './node_modules/*' \
  ! -path './dist/*' \
  ! -path './.git/*' \
  | sort

Ye tumhe actual source/project files dega aur:

node_modules
dist
.git



ko ignore karega.

Sirf src ka structure
find src -maxdepth 6 -type f | sort
Folders + files dono dekhna
find src -maxdepth 6 \
  ! -path '*/node_modules/*' \
  ! -path '*/dist/*' \
  | sort
2. Project root pe ho ya nahi check karna
pwd

Example:

/g/apage/one/projects/dental-01

Phir:

ls -la

Ye root files dekhega:

package.json
vite.config.js
src
public
README.md
.git
3. package.json quickly inspect
cat package.json

Dependencies only:

grep -n '"dependencies"\|"devDependencies"' package.json

Scripts:

grep -A15 '"scripts"' package.json
4. CSS / SCSS identify karna
Saare CSS files
find src -type f -name '*.css' | sort
Saare SCSS files
find src -type f -name '*.scss' | sort
Dono ek saath
find src -type f \( -name '*.css' -o -name '*.scss' \) | sort
5. CSS ko SCSS mein convert karna

Ye tumhare liye master conversion command hai:

find src -type f -name '*.css' -print0 | while IFS= read -r -d '' file; do
  mv "$file" "${file%.css}.scss"
done
Imports bhi automatically change
grep -RIl '\.module\.css\|/index\.css\|\.css' src \
  --include='*.jsx' \
  --include='*.js' \
  --include='*.scss' |
while IFS= read -r file; do
  sed -i \
    -e 's/\.module\.css/\.module\.scss/g' \
    -e 's#\/index\.css#\/index.scss#g' \
    "$file"
done
Check karo koi .css import bacha hai ya nahi
grep -RInE '\.css(["'\''])|\.module\.css' src \
  --include='*.jsx' \
  --include='*.js' \
  --include='*.scss'

Output empty hona chahiye.

6. Sass installed hai ya nahi
npm ls sass

Install:

npm install -D sass

Latest:

npm install -D sass@latest
7. Saare React/JSX files find karna
find src -type f \( -name '*.jsx' -o -name '*.js' \) | sort
8. Kisi component ko locate karna

Example ContactForm:

find src -type f | grep 'ContactForm'

Example treatment:

find src -type f | grep -i 'treatment'
9. Exact text/code search
Kisi string ko poore source mein search
grep -RIn "hello@" src
transition usages
grep -RIn "m.transition" src --include='*.scss'
All .css references
grep -RInE '\.css|\.module\.css' src
mailto
grep -RIn "mailto" src
Gmail
grep -RIn "mail.google.com" src
Hardcoded phone numbers
grep -RInE '[+][0-9 ()-]{8,}' src
10. Kisi file ka exact code dekhna
cat src/App.jsx

Large file:

sed -n '1,220p' src/App.jsx

Particularly lines:

sed -n '40,100p' src/pages/Contact/Contact.jsx
11. File names only
find src -type f | sort

Directories only:

find src -type d | sort
12. Image files check karna
find public/images -type f | sort

All common image formats:

find public -type f \( \
  -iname '*.png' -o \
  -iname '*.jpg' -o \
  -iname '*.jpeg' -o \
  -iname '*.webp' -o \
  -iname '*.svg' -o \
  -iname '*.avif' \
\) | sort
13. Broken/missing image references detect karna

First paths search:

grep -RInE '(/images/|images/)' src \
  --include='*.jsx' \
  --include='*.js' \
  --include='*.scss'

Then actual image folder:

find public/images -type f | sort

Dono compare karke missing references identify kar sakte ho.

14. Import/export problems inspect karna

Imports:

grep -RInE '^import | from ' src --include='*.jsx' --include='*.js'

Exports:

grep -RInE '^export |export default|module.exports' src \
  --include='*.jsx' \
  --include='*.js'
15. React Router routes find karna
grep -RInE '<Route |path=' src --include='*.jsx'
16. TODO, FIXME, temporary code
grep -RInE 'TODO|FIXME|XXX|HACK' src
17. Console logs find karna

Production se pehle:

grep -RIn "console\." src --include='*.jsx' --include='*.js'
18. window.open, mailto, tel, WhatsApp etc.
grep -RInE 'window\.open|window\.location|mailto:|tel:|wa\.me' src \
  --include='*.jsx' \
  --include='*.js'

Ye contact-flow debugging mein bahut useful hai.

19. Lint
npm run lint

Best combined check:

npm run lint && npm run build
20. Dev server
npm run dev

Specific host expose karna ho:

npm run dev -- --host
21. Production preview

Build:

npm run build

Then:

npm run preview
22. Git — kaam shuru karne se pehle
git status

Current branch:

git branch --show-current

Remote:

git remote -v

Recent commits:

git log --oneline -10
23. Git diff

Current modifications:

git diff

Only file names:

git diff --name-only

Staged diff:

git diff --cached
24. Safe pre-commit master check

Har project mein ye habit rakho:

git status && npm run lint && npm run build

Phir:

git diff --name-only

Phir commit:

git add .
git commit -m "chore: update project"
git push origin main

Project-specific commit message better hota hai, e.g.:

git commit -m "chore(dental-01): convert styles to SCSS"
25. Untracked files dekhna
git status --short

Output:

 M src/App.jsx
?? README.md

Meaning:

M  = modified
?? = untracked
A  = added
D  = deleted
26. .gitignore inspect
cat .gitignore

Common important entries:

node_modules/
dist/
.env
.env.*
27. Find large files

Project mein heavy assets locate karne ke liye:

find . -type f \
  ! -path './node_modules/*' \
  ! -path './.git/*' \
  -printf '%s %p\n' |
sort -nr |
head -30

Ye large files identify karne mein useful hai.

28. Duplicate-ish filenames / suspicious files
find src -type f | sort

Then naming search:

find src -type f | grep -Ei 'old|backup|copy|test|temp|new'
29. Environment variables
find . -maxdepth 2 -type f -name '.env*' | sort

.env ko casually cat mat karna because secrets ho sakte hain.

30. All package versions
npm list --depth=0

Outdated packages:

npm outdated
31. Check Node/npm versions
node -v
npm -v
32. Vite version
npm list vite

React:

npm list react react-dom

Sass:

npm list sass

Oxlint:

npm list oxlint
33. Master project inspection command

Jab tum kisi bhi Vite project mein jao, sabse pehle ye chala sakte ho:

pwd

echo "===== ROOT ====="
ls -la

echo "===== TREE ====="
find . -maxdepth 6 -type f \
  ! -path './node_modules/*' \
  ! -path './dist/*' \
  ! -path './.git/*' \
  | sort

echo "===== PACKAGE ====="
cat package.json

echo "===== CSS / SCSS ====="
find src -type f \( -name '*.css' -o -name '*.scss' \) | sort

echo "===== JSX / JS ====="
find src -type f \( -name '*.jsx' -o -name '*.js' \) | sort

echo "===== IMAGES ====="
find public -type f \
  \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' -o -iname '*.svg' -o -iname '*.avif' \) \
  | sort

echo "===== GIT ====="
git status --short

echo "===== BRANCH ====="
git branch --show-current

Ye tumhara universal Vite project inspection command ban sakta hai.

34. Sabse useful 10 commands — yaad rakhne layak

Agar poori guide yaad nahi rakhni ho, ye 10 enough hain:

pwd
find . -maxdepth 6 -type f ! -path './node_modules/*' ! -path './dist/*' ! -path './.git/*' | sort
cat package.json
find src -type f | sort
grep -RIn "keyword" src
cat src/path/to/file.jsx
npm install -D sass
npm run lint
npm run build
git status && git diff
Tumhare workflow ka ideal order
PROJECT OPEN
     ↓
pwd
     ↓
TREE INSPECT
     ↓
package.json
     ↓
find/search exact files
     ↓
READ CURRENT CODE
     ↓
EDIT
     ↓
npm run lint
     ↓
npm run build
     ↓
MANUAL RESPONSIVE TEST
     ↓
git status
     ↓
git diff
     ↓
commit
     ↓
push

Sabse important habit: kisi existing project mein edit karne se pehle tree → exact file → exact code → change → lint/build karo. Isse wohi problem kam hogi jo dental-02 ke mixin changes mein hui thi.