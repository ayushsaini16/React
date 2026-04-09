# React

High Level Planning
- Component
  Header
    - Logo
    - Nav Item
  Body
    - Search
    - Restaurant Container
      - RestaurantCard
  footer
    - Copyright
    - link
    - address
    - Contact

Best Practice:
- Dont write hardcoded data in the component file 
  - Like hardcode url string    
- Place in utils folder  


Two types of export/import

- default export/import (used in export one thing)
  - export default Component
  - import component from "path"

- Named export/import (used in export multiple things)
  - export const Component/variables;
  - import {Component} from "path"  

# React Hooks

- Hooks can only be called inside React functional Components
- Hooks can only be called at the top level of Components
- Hooks cannot be conditional

SuperPowerful Variable in react
- useState 
- useEffect