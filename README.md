#Namaste React 

 # episode 2
 # Parcel 
 - Dev builds
 - Local Server
 - HMR - Hot Module Replacement 
 - File Watching Algorithm - written in c++
 - Chasing - Faster Build 
 - Image Optimisation
 - Minification
 - Building  
 - Compressing
 - Consistent Hashing 
 - Code Spliting 
 - Diffrential Bundling -Support older browser 
 - Diagnostic
 - Error Handling 
 - HTTPs 
 - Tree shaking - remove unnecessary code
 - Different dev and prod bundles 


# episode 3
# script to Start the Project for Production And to Start the Project for own on  
-step 1 - open the package.json and go to the script
-step 2 - write {"start" : "parcel index.html"} for start the project
           for terminal command write - npm run start
-step 3 - wrtie {"build" : "parcel build index.html"}
           for build command write - npm run build

# React Element 
- React.createElement (reactElement basicaly a object) => Object (when we render a object on to Dom it becomes HTMl) => Html Element(and push it on the browser)
 
 RREACT ELEMENT
<!-- const heading = React.createElement("h1",{id:"heading"},"Namaste React!"); -->

TO RENDER AN ELEMENT MAKE ROOT 
<!-- const root = ReactDOM.createRoot(document.getElementById("root")); -->

 RENDER 
 <!-- root.render(heading); -->
 
 
 How to build an APP?
 # Food searching app:-

 /**
 * HEADER
 * -Logo
 * -Nav Item
 * BODY 
 * -Search 
 * -RestaurantContainer- 
 * --RestaurantCard--
 * {--- img of res; -ratings of res; -name of the res; -delivery time-cuisines ---}
 * FOOTER 
 * -Copyright
 * -Links
 * -Address
 * -Contact
 * 
 */ 

# Two type of import/Export

DEFAULT IMPORT/EXPORT

--default export component;

NAME IMPORT/EXPORT

--export const component
--import{component} from "path";
 --- also give the the src={component} ---