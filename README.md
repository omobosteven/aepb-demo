# AEPB Waste Management
Provides location base waste management capabilities.
[https://aepb-demo.netlify.app](https://aepb-demo.netlify.app)

## Technologies
- [React](https://reactjs.org)
- [Material-UI](https://mui.com)
- [ReactQuery](https://reactquery.dev)

## The folder structure of the src directory of the project is as follows:<br/>

- `assets`: This folder can contain the images and any other assets like svg files used in our application.
- `layouts`: This folder contains the UI layout of the application.
- `modules`: This folder contains the various modules/feature of the application.
- `route` : Routing implementation can be found here.
- `reusable`: All global reusable component can be found here.
- `theme`: This basically contain the theming of the application 


**N/B**
- The application uses dummy/mock data at the moment.
- use any valid email to login as a customer
- use admin@mail.com to login as an admin.

## Environment variables
- `REACT_APP_BASE_API_URL`: https://aepb-api.herokuapp.com/api.

## Available Scripts

In the project directory, you can run:

- Create a .env file with the following content:
  - `REACT_APP_BASE_API_URL=https://aepb-api.herokuapp.com/api`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

