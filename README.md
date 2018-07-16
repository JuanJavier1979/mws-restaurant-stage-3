# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 3

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage Three**, you will take the connected application you yu built in Stage One and Stage Two and add additional functionality. You will add a form to allow users to create their own reviews. If the app is offline, your form will defer updating to the remote database until a connection is established. Finally, you’ll work to optimize your site to meet even stricter performance benchmarks than the previous project, and test again using Lighthouse.

### Specification

You will be provided code for a Node development server and a README for getting the server up and running locally on your computer. The README will also contain the API you will need to make JSON requests to the server. Once you have the server up, you will begin the work of improving your **Stage Two** project code.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and make start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 

### How To Start Data Server

1. Clone this repo [mws-restaurant-stage-3](https://github.com/udacity/mws-restaurant-stage-3).
2. In a terminal CD to the Repo and type `npm install`.
3. Now run `npm i sails -g`.
4. Launch the server: `node server`.

### How To Start Client

1. Clone this repo.
2. In a terminal CD to the Repo and type `npm install`.
3. Run Gulp by just typing `gulp` to automatic run all gulp tasks and start web development server.

### GULP tasks

1. `gulp images`

You might need to install a third party library on your system to manipulate images. The library is GraphicsMagick. To install it simply type `brew install graphicsmagick`. For more install options visit [gulp-responsive-images]https://github.com/dcgauld/gulp-responsive-images/

2. `gulp scripts`
3. `gulp styles`
4. `gulp browser-sync`

### Links and Resources Used
MWS Restaurant Stage 1 Sample APP [link](https://github.com/udacity/mws-restaurant-stage-1)
MWS Restaurant Stage 3 Data Server [link](https://github.com/udacity/mws-restaurant-stage-3)
Jake Archibald's IDB Library [link](https://github.com/jakearchibald/idb/blob/master/lib/idb.js)
Icons made by Smashicons [link](https://www.flaticon.com/authors/smashicons) from Flaticon [link](https://www.flaticon.com/) is licensed by Creative Commons BY 3.0 [link](http://creativecommons.org/licenses/by/3.0/)