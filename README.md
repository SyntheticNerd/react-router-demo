Wednesday 3/30 React-router v6 Live Demo
`npm install react-router-dom@6`

**In your index.js set up your Browser Router**

```javascript
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
```

> _Wrapping the App component in the Browser Router lets us control it from inside the App component or any components inside the Browser Router_

Make a config or routes folder and create a component like Portfolio.js inside

Set up the Routes in our index.js
==**(differences start here)**==

Instead of switch we use **Route==s==** and will be used in our Index.js

Import `Routes` and `Route` from `"react-router-dom"`
Now your import looks like:

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```

`Routes` is nested in `Browser Router` and every `Route` will be nested in `Routes`

`Route` is similar in react Router 6 as it is in 5 the key difference is instead of component we use ==**element**==.

- Element takes a callback that returns JSX so our components go directly in there.

```javascript
<Router>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/portfolio' element={<Portfolio />} />
  </Routes>
</Router>
```

Now we have access to /portfolio but no link to get to it we can make a link inside our App.js component the same way we do in React Router 5

```javascript
import { Link } from "react-router-dom";
...
   <Link to='/'>Home</Link>
...
   <Link to='/portfolio'>Portfolio</Link>
...
```

If we click on Portfolio it takes us to a completely new screen without any Components from the App being rendered.

###Introducing NESTED ROUTES and OUTLET

In order to get a similar effect as 5 where the elements in App persist we need to nest any dynamically rendered Route in the Route for our App

```javascript
<Router>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='/portfolio' element={<Portfolio />} />
    </Route>
  </Routes>
</Router>
```

When we do that the portfolio link will no longer work because even though now the router knows the Portfolio is rendered inside the App it still does not know where to go.

For this React Router gives us a component called `<Outlet />` we can put the outlet somewhere in out App.js to specify where we would like our content to load.

```javascript
import { Link, Outlet } from "react-router-dom";
...
   <Link to='/'>Home</Link>
...
   <Link to='/portfolio'>Portfolio</Link>
...
   <Outlet />
```
