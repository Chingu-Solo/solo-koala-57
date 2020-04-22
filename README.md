# Chingu Solo Project - Tier 2 - Google Fonts Clone

The project is a clone of the Google Fonts web application, repoducing most of the functionality. It was completed as a Tier 2 Solo Project for [Chingu](https://www.chingu.io/), a platform designed to help boost your tech career with team projects. As a Tier 2 Project, this is a fully developed front-end application.

![Alt Text](./public/tier2.gif)

## Prerequisite

Replace `"YOUR_API_KEY"` with your [API key](https://developers.google.com/fonts/docs/developer_api#APIKey) obtained from Google.

```javascript
axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR_API_KEY&sort=popularity")
```

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all dependencies necessary for the project.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Built With

* [Axios](https://www.npmjs.com/package/axios)
* [Google Fonts API](https://developers.google.com/fonts/docs/developer_api#APIKey)
* [Materialize CSS](https://materializecss.com/getting-started.html)
* [React](https://www.npmjs.com/package/react)
* [React-Dom](https://www.npmjs.com/package/react-dom)
* [React-Helmet](https://www.npmjs.com/package/react-helmet)
* [React-Lazyload](https://www.npmjs.com/package/react-lazyload)
* [React-Redux](https://www.npmjs.com/package/react-redux)
* [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
* [Redux](https://www.npmjs.com/package/redux)

## Requirements

### Structure

* [x] Header with minor navigation (Logo and Catalog/Featured/Articles/About link list)
* [x] Nav with Major navigation / page-manipulation (search, custom text, font-size, dark/light mode, grid/list mode, and reset)
* [x] Main section for the font cards
* [x] Font cards which display the Font Name, the sample text, and an add button (the font creator is not available via the api, so it is not required in tiers 2 or 3)
* [x] Back-to-top button that allows users to click and scroll back up to the top (there could be up to 959 fonts displayed, so you need this!)
* [x] Footer section with your developer information

### Style

* [x] Sample text in each card should be displayed in the corresponding font
* [x] Buttons/links should be evident (make sure the cursor changes, etc.)
* [x] Implement a way to handle overflow from sample text in the font cards, as the font size is adjustable

### Functionality

* [x] Text typed into the custom text (type something) box should immediately change the sample text in each font card
* [x] The sample text should return to the default sample if the input box (type something) no longer has any input
* [x] Font size chooser should have at least four sizes and should immediately change the sample text font size in each font card
* [x] Implement the clickable 'reset' icon on the far right of the major navigation; it should reset the page as if the page were reloaded (do not actually reset the page)
* [x] On load, the page should display fonts sorted by current popularity, as returned by the Google Fonts Developer API (see below)
* [x] The search feature should be fully functional and should display matching fonts (it's up to you if you want to do this via a 'submit' or through onchange)
* [x] When the search input is cleared (via reset button or manually), the fonts should automaticaly display sorted by poplarity again

### Other

* [x] Your repo needs to have a robust R<span>EADME</span>.md
* [x] Make sure that there are no errors in the developer console before submitting

### Extras (Not Required)

* [x] Make your design fully responsive (small/large/portrait/landscape, etc.)
* [x] Implement the light/dark mode toggle buttons
* [x] Implement the change display icon so you can flip between a grid layout and a list layout for the font cards