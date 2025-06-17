Test React project

#Parcel
- Dev build
- Host local server
- HMR = Hot module Replacement
- File watching algo (written in c++)
- Caching faster build
- Image optimization
- Minification
- Bundling
- Compressing
- code splitting
- Differential bundling (To support in older browser)
- Dignostic
- Error handling
- https
- tree shaking

Two type of export :

- Default export/import :

e.g.
export default Component;
import Component from "path";

- Named export/import :

e.g.
export const Component;
import { Component } from "path";

# React Hooks
(Normal JS utility function)
useState() : To update special component variable  
useEffect()

Reconsilation Alogorithm (React Fiber algo) :
https://github.com/acdlite/react-fiber-architecture

- Whenever state variable updates, React triggers reconsilation cycle (Re-renders the component)

- If dependacy array => userEffect() is called on every render
- If no dependacy array is empty => userEffect( ) is called on initial render (just once) 
- If dependacy array has depedencyVariable e.g. [depedencyVariable] => userEffect( ) is called on every changed value of depedencyVariable

# react-router-dom
- createBrowserRouter : To define parent routes and it's children routes to load pages
- RouterProvider : this is user to passed root element into this component
- Outlet : This is place holder component replaced by child component based on path
- errorElement : Error page we want to show if no path matching

# 2 type of routing in web apps
- Client side routing (On app render at 1st place, It will loads all the pages )
- Server side routing (you make a network call and page get loaded from server )

# In Class Component
- this.state is having n number of values but only values get updated into state which we are passing into this.setState function

Following is the method sequence getting called in Class Component:
constructor -> render -> componentDidMount

# React lifecycle method
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


# Styling with CSS
scss
sass
styled-component
material-ui
bootstrap
ckakra-ui
ant design