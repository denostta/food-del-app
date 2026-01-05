create folder FOOD_DEL_APP
open the terminal
create react app using vite (npm create vite@latest)
use project name as frontend
run the app (npm run dev)
npm i react-router-dom
delete all contents of App.jsx and replace new app component using rafce command
delete App.css
edit index.css
change the title in index.html to Food Del
create components and pages folders in src folder
create Navbar.jsx file inside new Navbar folder in components folder then use rafce
create Navbar.css file inside Navbar folder and import it in Navbar.jsx
mount Navbar component inside App component
gather all the assets in assets folder
create elements for Navbar.jsx
create styles in Navbar.css
go to this link to get font style from google fonts (Outfit font ) https://fonts.google.com/selection
click "get font" and "get embed code", click "import" and copy statement from <style> tag and paste it inside the index.css file. Use the Outfit style as font-family in \* {}
use conditional naming for className for list to create underline effect if clicked

---

after creating navbar its time to create pages for home, menu, mobile-app and contact-us
Go to pages folder and create Home folder (to display about homepage), Cart folder (to display the cart items), PlaceOrder folder (get info about the user)
create a jsx file in each folder Home.jsx, Cart.jsx and PlaceOrder.jsx
create and import Home.css to Home.jsx, Cart.css for Cart.jsx, PlaceOrder.css for PlaceOrder.jsx

---

setup react router
open main.jsx file anmd remove the <React.Strict.Mode> and wrapp the <App/> using the browser router.
import BrowserRouter from react-router-dom package

---

create routes in App.jsx
create multiple routes inside <Routes> using <Route> from react-router-dom

## create header

create a Header folder in components to used in Home page
mount Header component inside the Home page
create keyframe in index.css
use keyframe as animation in Header.css

## creating the menu section

create ExploreMenu Folder in components folder
create ExploreMenu.jsx and ExploreMenu.css inside the ExploreMenu folder
import ExploreMenu.css inside the ExploreMenu.jsx
mount ExploreMenu component inside Home page after the header
create elements in ExploreMenu.jsx and styles in ExploreMenu.css

## create functionalities for explore menu items

go to Home page
create a category state to highlight a menu item if clicked

## create food display component
