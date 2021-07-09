# React Boiler plate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Hence all CRA scripts are available in this package

## Folder Structure

src
├── Actions # All Redux Actions are executed at this level
├── Components # Reusable components can be accessed from this level
├── config # Main configurations are added here e.g Redux
├── Constants # Main Constants
├── Hooks # Custom hooks
├── Models
├── redux  
 ├──Types # Action types
├──responses # Rest api JSON response types
└── Pages # Main Executed screen
└── Reducers # Main Reducers and their root reducer
└── Routes # All routes will be added in `index.tsx` which will maps `route.tsx` that can hold all the routing policies desired
└── Services # All third party externals can be added here
