# clickygame
Game to learn react, components, component state management, and handling user events.


Relevant links: 

Deployed:

    https://jeff-ashear.github.io/clickygame/

Code Repo:

    https://github.com/Jeff-Ashear/clickygame.git

Portfolio:

    https://jeff-ashear.github.io/UpdatedPortfolio/



1. The purpose of this app:

         ...is to provide a simple memory game for the user.  The user will gain points and eventually win by clicking on all of the moving images, without clicking any one image more than once.


2. This app is organized in the React app variant of MCV architecture,with the exception of the absence of routes:

        The app is compartmentalized into a functional component, and a view.  Because there is only a single view, and no data is passed to external entities, there are no routing files.  In the components folder, ImageTiles.js controls the game logic and elements.  Image files are imported, and their individual states are tracked.  Each time an image is clicked, a function is called which rearranges all the images on the page.  App.js in the src folder merely handles the single view, importing everything from imageTiles.js.

3. How to use this app:

        Load the page and you're ready to play.  The goal is to click each image exactly one time.  Each time an image is clicked for the first time, all images will rearrange themselves on the page and your score will increase by one point.  If you reach 12 points you win!  If you click any image a second time you lose.  You may instantly start playing again after either game-over condition occurs.

4.  Video of this app in use has yet to be made.

5. Relevant links:

Deployed:

    https://jeff-ashear.github.io/clickygame/

Code Repo:

    https://github.com/Jeff-Ashear/clickygame.git

Portfolio:

    https://jeff-ashear.github.io/UpdatedPortfolio/


6. Technologies used in this project:

    React: components, views and app template structure.
    Yarn: packages, dependecies and CLI.
    Javascript: game logic.
    JSX: game logic, views.

7. This app was developed by Jeff Ashear
