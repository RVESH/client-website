# Getting Started with Create React App

<!-- restaurant-01/
├── build/                ← generated, delivery mein normally nahi
├── node_modules/         ← development only
├── public/
├── src/
├── package.json
├── package-lock.json
├── README.md
└── .gitignore -->

<!-- rishabhverma.rv2006@Adiyogi MINGW64 /g/apage/one/frontend/src/southBridge/sites/restaurant-01 (main)
$ cd /g/apage/one/frontend/src/southBridge/sites/restaurant-01

find src -maxdepth 2 -type f -print | sort
src/App.css
src/App.js
src/App.test.js
src/index.css
src/index.js
src/logo.svg
src/reportWebVitals.js
src/setupTests.js -->

<!-- restaurant-01/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore -->

Final V1 delivery skeleton

Main ise roughly aise rakhunga:

restaurant-01/
│
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── manifest.json
│
├── src/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Button/
│   │   └── ...
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Features/
│   │   ├── Stats/
│   │   ├── Process/
│   │   ├── Gallery/
│   │   ├── Testimonials/
│   │   ├── FAQ/
│   │   ├── CTA/
│   │   └── Contact/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Menu/
│   │   ├── About/
│   │   ├── Reservation/
│   │   └── Contact/
│   │
│   ├── data/
│   │   ├── menu.js
│   │   ├── testimonials.js
│   │   └── site.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.scss
│
├── .gitignore
├── README.md
├── package.json
└── package-lock.json


<!-- rm -f public/logo192.png
rm -f public/logo512.png
rm -f public/manifest.json
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


index.css ko bhi abhi remove kar sakte hain, kyunki hum apna global stylesheet index.scss use karenge.

So:

rm -f src/App.css
rm -f src/App.test.js
rm -f src/index.css
rm -f src/logo.svg
rm -f src/reportWebVitals.js
rm -f src/setupTests.js -->
scss ke liye
<!-- npm install sass -->
then check is sass installed?


<!-- Standalone restaurant ko proper pages chahiye:

npm install react-router-dom -->

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
