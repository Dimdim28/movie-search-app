# MSA - application that helps you to find movies
It allows you to find movies by title, save them as favorites, view more detailed information about each one. 
You can use the app on both touch devices and computers. [Link on deployed application](https://movie-search-app-five-psi.vercel.app)

# Installation

1. Download repository
2. Create a .env.local file in the root folder and paste the following code there:
```
NEXT_PUBLIC_API_KEY=<your api key>
NEXT_PUBLIC_API_URL=https://www.omdbapi.com
```
(you can get your public key after registration [here](https://www.omdbapi.com))

3. run the development server:
```
npm run dev
# or
yarn dev
# or
pnpm dev
```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Functionality

* There is a SearchBar on the top right of the screen, you can press enter or click the search icon to get the results.
* You can click the Movie card to go to the page with more details and after that click on the back icon near the movie title.
* Click on the Like icon to add movie to favorites and click again to remove, scroll down to see the list with your favorites movies =)
* At the bottom of the screen there is a NavBar with buttons to navigate to the next, previous, first and last pages. 

# Used technologies:
* ReactJS 18
* Next js
* Redux Toolkit
* CSS-Modules / SCSS
* Material UI

I also added meta tags and now you can share the application with your friends =)
