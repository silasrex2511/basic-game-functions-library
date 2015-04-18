# basic-game-functions-library
-in order to use this you need to hava a basic html5 canvas loaded
-canvas must have id of "theCanvas"
-and a javascript with these variables...
-var c = document.getElementById("theCanvas");
-var ctx = c.getContext("2d");
-eg:

#####################################################################################
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
        <script src="jsgfl.js" type="text/javascript"></script>
    </head>
    <body>
        <canvas id="theCanvas" width="400" height="400"></canvas>
        <script type="text/javascript">
        	var c = document.getElementById("theCanvas");
        	var ctx = c.getContext("2d");

        	//your code...
        	//example1:
        	/*drawString("Example 1","40px Arial",0,300,"#668844");

        	var charlie = new rectMngr(0,0,40,40,"blue","blueBoxObject");
        	imageShow(charlie);*/

        	//example2:
        	/*drawString("Example 2","40px Arial",0,300,"#668844");

        	var charlie = new rectMngr(0,0,40,40,"blue","blueBoxObject"),
        		gloria = new rectMngr(50,100,40,40,"red","redBoxObject1"),
        		green = new rectMngr(200,200,40,40,"#abe","nice");
        	var objectsArray = [charlie,gloria,green];

        	itemsShow(objectsArray);*/
        </script>
    </body>
</html>
#####################################################################################
