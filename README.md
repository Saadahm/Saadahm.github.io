## **🔧 Languages & Tools:**

![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![Nodejs](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)
![Firebase](https://img.shields.io/badge/-Firebase-black?style=flat-square&logo=firebase)

![](src/assets/image/demo.jpg)


Creating React app

## npx create-react-app app-name

npx is a part of npm (Node Package Manager) except npx runs a remote script instead of installing it locally.

## npm start

This command will start the React App.

1. Setting up the React Router
   In a React app is the navigation (moving from one page to another) of the users. Since React is a single page application,
   it doesn’t support multiple routes by default. There’s a package in Node named react-router-dom which allows us to create routes for our React project.

This Command is use for install react router dom

## install react-router-dom

we create a new component. We call it Home.js.
The convention is that the first letter of a component must be in capitals. Also create a Home.css file for the component styling.

App.js
We wrap the entire app into the Router component, so that every component is a part of Router and has access to the Router.

2. Creating the Navbar
   This Command is use for install icons

## npm install @material-ui/core @material-ui/icons

we create a new component. We call it Header.js

3. Creating the Flipkart Homepage
   4.To display products, we will create a new component name Product.js

(a) - passing some props through the component, which can be used by the components to render.
These props are — Product ID, Title, Price, Image, Ratings.
(b) - props are usually variables and objects that are passed by parent components
So, we render the data on the screen by enclosing the variables with {} at appropriate places.
(c) - To render the ratings,We create an array of length of the ratings passed and loop through them
and render out the star emoji the number of times the ratings passed through the props.

4. Setting up React Context API
   Context API helps us to make application level states and we can get the data from those states through any component.
   alternative Redux

StateProvider.js

reducer.js
reducer define all of your application level states and define actions to make changes to the state.

In initialState
we declare the states we are going to use. In this case, basket and user.

The actual reducer function takes in a state and action.
The state and action is provided so that the reducer can perform operations on the state.

In index.js
enclose the App component with StateProvider so that children get access to the states too.
We pass in the reducer and initialState to the StateProvider.
Now the State knows what is the initial state and which reducer too.

5. Adding the Basket functionality
   first we import state

we import the state and dispatch using useStateValue()
** useStateValue() hook **

** const [{ basket }, dispatch] = useStateValue(); **
state named basket
the dispatch function which allows us to dispatch actions to change the state in the reducer.

(a) - we set an onClick on the button. Once the button is clicked, addToBasket function will fire off.
The addToBasket function fires off the dispatch to the reducer instructing to update the state with the provided data

reducer.js
(a) - We are adding an action type to the switch case, we call it “ADD_TO_BASKET”
(b) - We set the state, we update the basket, but here we use the spread operator (…) so that previous state is not lost.
And that’s how we add items to the basket array in our state in reducer.

in Header.js
We removed the hardcoded 0 from the basket and added basket?.length , which will give the number of items in the basket array.
We set up the links for checkout and home. This is because we will need them in the next section itself!
Link component comes with react-router-dom so that we can link to routes without reloading pages!

6. Setting up Firebase
   after set up firebase project
   firebase give us to a authentication which is provide us to create database user signup login functionality

we create a firebase.js file which hold the auth and databases and we export these objects so that we can use them anywhere.

7. Setting up Authentication

create a new component, named Login.js
(a)- We have two local states which keep the track of the values of the textboxes
(b)-Whenever the value of the textboxes change, we change the value of state

(c) - We use e.preventDefault() to prevent the page from reloading because of the form tag.
(d) - When the login button is pressed, the value of the states of textboxes are passed to Firebase to authenticate.
,and if the authentication is successful returns a promise or throws an error.
(e) - The useHistory() is a hook from react-router-dom which helps you to redirect user from the actual code.

8. Basket
   create a component called Checkout.js
   we will make two components named CheckoutProduct and Subtotal.

(a) - CheckoutProduct
** add a new reducer command “REMOVE_FROM_BASKET” **
“REMOVE_FROM_BASKET” command for the reducer. This will remove specific product by ID from the Basket.

(b) - Subtotal.

## npm install react-currency-format

This package handling currency formats
The Subtotal component is just basically calculating the total and showing it.

# Getting Started with Create React App


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
