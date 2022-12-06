# Menstruation_Equity_Map
## About
### Background
This is a project sponsored by the UCI Women's Center to create a handy map of menstrual supplies to address two main issues as follows.

People on campus have no easy way to find where free menstruation products are located. They don’t know where the nearest restroom is.

There is no way to report this information in an easy convenient way. Facility staff can only refill the dispensers with their experience. Menstruators often find that dispensers are empty and out of items.

### Features
User location targeting: get the user’s location and find the closet building with available menstrual supplies and present the building location sort by distance. After choosing the building and floor, there will be a list to show all available restrooms with menstrual supplies. This feature can fulfill requirements 1.

Show information about menstrual products and building locations on an interactive map: embed an interactive map into our website to help users figure out the location of products they want.

Shortage report: users can use our website to report the shortage of products so that facilities can know they need to refill products.

## Screenshot


## Technologies Used
React - Ant Design of React, Google Map API

## Setup
1. Add Google Map API key in Map.js file [line 66] (Path: front_end/src/components/Map.js)
4. cd front_end
5. npm install
6. npm start

## Build
1. cd front_end
2. npm run build

## Deployment
1. cd front_end
2. run ```npm run build```
3. Add a new file names ```_redirects``` in the build folder
4. Add the following two lines in the ```_redirects``` files
   ```
   /api/* http://ec2-54-214-227-92.us-west-2.compute.amazonaws.com:8080/:splat 200
   /* /index.html 200
   ```
5. Replace all baseURL in request from ```http://ec2-54-214-227-92.us-west-2.compute.amazonaws.com:8080/``` to ```/api/```. These requests can be found in App.js, QrcodeGeneration.js, Report.js, request.js
6. Drag the build folder to the Netlify website and finish the deployment.

## Approach
- Components folder includes all the components
- Three pages including Qrcode, Qrcode Generator and Report pages are in pages folder
- We set up routers in router folder
- The main page in App.js

## Status
Completed

## Credits
List of contributers:
- [Zicheng Shan](https://www.linkedin.com/in/zichengs/)
- [Chenxu Wang](https://www.linkedin.com/in/chenxuw/)
- [Yixuan Li](https://www.linkedin.com/in/yixuan-li-90a42a223/)

## Sponsored By
UCI Womxn's Center