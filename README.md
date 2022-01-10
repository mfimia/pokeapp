# PokéApp

### Solutions implemented:

- SPA with two routes:
  - Main route with pokemon list and basic stats
  - Search route to find individual pokemons
- Implemented pokeapi js wrapper library to support with GET requests
- App contains 3 states:
  - DarkMode context to manage darkmode preferences. User preference stored in localStorage
  - Pokemon context to manage global pokemon operations. Components that need pokemon data and are rendered multiple times contain their own state
  - Alert context to manage app alerts
- All components use Material-UI library for styling
- App fully responsive, suitable for all devices

### Future improvements

- Add filtering functions to pokemon list
- Render type chips with color based on type
- Improve general styling
- Add a login and favourites page for users to store their favourite pokemons
- Expand further pokemon info displayed
- Consider using reducer hook if app grows larger
