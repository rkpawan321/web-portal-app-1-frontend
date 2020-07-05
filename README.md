******************************************************************************************************************

Coding Challenge 

Submitted By :
Name :  Pawan R K
Phone : +91 9482234279
Mail: rkpawan321@gmail.com
LinkedIn : https://www.linkedin.com/in/pawan-rk-44479488/
RESUME : https://drive.google.com/file/d/16FciXGa7OJM8wwUXpdbRk9tw2_yiEhpW/view?usp=sharing

*******************************************************************************************************************

PROBLEM STATEMENT :  Prototype feature of Project Board  of the operations app.

*******************************************************************************************************************

Hosted at : https://capable-quanta-282412.df.r.appspot.com/project

Github Links
Frontend : https://github.com/rkpawan321/web-portal-app-1-frontend
Backend: https://github.com/rkpawan321/web-portal-app-1-backend


*******************************************************************************************************************

FRONTEND ARCHITECTURE

Language used : Javascript
Tech Stack: ReactJs
Libraries used:  Redux, Axios. Redux-persist, Lodash
Middleware used : Redux-Thunk
Design: CSS, Material Design, Media query

*******************************************************************************************************************

REASONS FOR CHOOSING ABOVE TECH STACK
1) React is a better stack for frontend web-app development because of its code versetality.
2) State management is easily achieved.
3) Redux is used for app store management. The data that needs to be persisted is stored in local-storage using Redux-persist library.
4) GET, POST Api Calls is achieved by Axios library.
5) All Time and Date related data is handled using MomentJS. This is because Moment JS has better options when it comes to time-zone.
6) Lodash library is employed to manipulate arrays and objects, as well as functions, strings easily. It also helps in code Maintainability .
7) Material UI solves most of the issues related to responsiveness of the web-app. Still Media queries is used to ensure the responsiveness in most of the handheld devices too.

*******************************************************************************************************************

Webapp features

This is an Operations app where the user has a web-portal where he can see all his project status.

Out of all the options on Left Navigation Bar, Project option feature is worked upon in this challenge.

All projects are categorized under 3 categories:
1) On Track
2) Delayed
3) On Hold

These 3 categories depending upon whether present on not will be shown as 3 cards.

In each category, respected topics/subjects are shown.
Each Subject/Topic is also shown as a sub-card.

This Subject sub-card has following features
1) Shows the Subject Name, progress of the project, assigned date.
2) It also gives details about instructors assigned with it with an additional Tooltip.
3) Add instructor feature (Feature in progress)


On the right top, the user is given filter options for better and faster readability.
Filter can be done in 2 ways
1) Subject wise ==> [All subjects, Core subjects, Language subjects]
2) Project Status wise ==> [On track, Delayed, On Hold, All]     (This feature extensively helpful when the user is on mobile view)

The AppBar on the top shows the company Logo, app name and user details.
It also has a search button (Feature yet to be developed) and a dummy button which could be used for future reference.

*******************************************************************************************************************

BACKEND ARCHITECTURE

Language used : Javascript
Tech Stack: ExpressJs, Firebase Functions
Database : Firebase Firestore

Rest-API is built using Firebase functions and ExpressJs.
This api is for getting project details from the database.

API EndPoint: https://us-central1-web-dashboard-1.cloudfunctions.net/api/projects


REASONS FOR CHOOSING ABOVE TECH STACK
1) ExpressJs allows to set up middlewares to respond to HTTP Requests and also defines a routing table.
2) Firebase is where API is deployed.
3) FireStore Cloud database is higly scalable and its non-relational database aids the intention of the app.
4) Firebase gives additional features like Machine Learning, Debug View.
5) Realtime Logging is also employed in the application using Firebase.
6) GCP aids better scaling of the application.

*******************************************************************************************************************

APP DEPLOYMENT

App Deployment is done using Google Cloud Platform.
The React app's build was uploaded to one of the buckets and deployment was successfully done.
Deployed at : https://capable-quanta-282412.df.r.appspot.com/project

*******************************************************************************************************************

RESPONSIVENESS OF THE WEBAPP
This web-app could is designed to be operated on both mobile-ipad and desktop.
This is achieved usibg media query and Flex-Box CSS.

*******************************************************************************************************************

WHAT COULD BE BETTER ?

1) Database architecture could have been better to accomodate more information.
2) Add Instructor feature could be developed with respective POST api.
3) Search button could be integrated with api so that user can filter data by searching too.
4)  Dummy button at the top can be wired with helpful feature.
5) Authentication using Google could be employed.


**************************************************************************************************************

LOCAL SETUP
Frontend
Requirements: NodeJS
1) Clone the repository
2) npm start

Backend
1) Go to Firebase https://console.firebase.google.com/.
2) Create a project.
3) git clone backend repository.
4) firebase init
4) firebase deploy

*********************************************************************************************************




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
