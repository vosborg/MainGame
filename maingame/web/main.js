let canvas = document.querySelector("#canvas"); 
let ctx = canvas.getContext('2d'); 

// Definerer billeder til brug af tiles

let playerPic = new Image();
playerPic.src = 'images/playerbg.png'; //Player avatar

let pacmanPic = new Image();
pacmanPic.src = 'images/pacmanbg.png'; //Enemy avatar

let verticalPic = new Image();
verticalPic.src = 'images/verticalV.png'; // Vertikal mur

let horisontalPic = new Image();
horisontalPic.src = 'images/horisontalV.png';  // Horisontal mur

let krydsPic = new Image();
krydsPic.src = 'images/krydsV.png'; // Kryds mur 

let tKrydsTopPic = new Image();
tKrydsTopPic.src = 'images/tTop.png'; // T-kryds top

let tKrydsBotPic = new Image();
tKrydsBotPic.src = 'images/tBund.png'; // T-kryds bund

let tKrydsRPic = new Image();
tKrydsRPic.src = 'images/tHojre.png'; // T-kryds right

let tKrydsLPic = new Image();
tKrydsLPic.src = 'images/tVenstre.png'; // T-kryds left

let opPic = new Image();
opPic.src = 'images/op.png'; // Op

let hojrePic = new Image();
hojrePic.src = 'images/hojre.png'; // Right

let nedPic = new Image();
nedPic.src = 'images/ned.png'; // Down

let venstrePic = new Image();
venstrePic.src = 'images/venstre.png'; // Left

let vejPic = new Image(); 
vejPic.src = 'images/ground.png'; // Vejen 

let pointPic = new Image(); 
pointPic.src = 'images/point.png'; // Point 

let doorShutPic = new Image(); 
doorShutPic.src = 'images/doorShut.png'; // Lukket dør  

let doorShutPicTo = new Image(); 
doorShutPicTo.src = 'images/doorShutgreen.png'; // Lukket dør  

let finishPic = new Image(); 
finishPic.src = 'images/finish.png'; // Finish tile lvl 1 

let finishToPic = new Image(); 
finishToPic.src = 'images/finish.png'; // Finish tile lvl 2

let topRightPic = new Image(); 
topRightPic.src = 'images/topRight.png'; // Top højre hjørne 

let botRightPic = new Image(); 
botRightPic.src = 'images/botRight.png'; // bot højre hjørne 

let topLeftPic = new Image(); 
topLeftPic.src = 'images/topLeft.png'; // Top venstre hjørne 

let botLeftPic = new Image(); 
botLeftPic.src = 'images/botLeft.png'; // Bottom venstre hjørne 



// Definerer tiles
let point = 0;
let vej = 1; 
let player = 2;
let pacman = 3;
let vertical = 4;
let horisontal = 5;
let kryds = 6;
let tKrydsTop= 7;
let tKrydsBot= 8;
let tKrydsR= 9;
let tKrydsL= 10;
let op= 11;
let ned= 12;
let venstre= 13;
let hojre= 14;
let doorShut= 15;
let finish= 16;
let doorShutTo= 17;
let finishTo= 18;
let botRight= 19;
let topRight= 20;
let topLeft= 21;
let botLeft= 22;

// Tile Size = 35px*35px
let tileSize = 35;

// Førte Maze

let maze= //bane1
[
    [21,5,5,5,7,5,5,5,5,5,5,7,5,5,5,5,5,5,7,5,5,5,20],
    [4,1,2,1,4,1,1,1,1,1,1,4,1,1,1,1,1,1,4,1,1,1,4],
    [4,1,11,1,12,1,21,5,5,5,1,12,1,5,5,5,20,1,12,1,11,1,4],
    [4,0,4,1,1,1,4,0,1,1,1,1,1,1,1,0,4,1,1,1,4,0,4],
    [10,5,9,1,1,1,22,5,5,5,5,5,5,5,5,5,19,1,1,1,10,5,9],
    [4,0,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,0,4],
    [4,1,12,1,1,1,1,1,1,21,5,1,5,20,1,1,1,1,1,1,12,1,4],
    [4,1,1,1,1,13,5,14,1,4,3,3,3,4,1,13,5,14,1,1,1,1,4],
    [4,1,5,20,1,1,1,1,1,22,5,7,5,19,1,1,1,1,1,21,5,1,4],
    [4,1,0,4,1,1,1,11,1,1,1,4,1,1,1,11,1,1,1,4,0,1,4],
    [10,5,5,6,14,1,13,6,5,14,1,4,1,13,5,6,14,1,13,6,5,5,9],
    [4,1,0,4,1,1,1,12,1,1,1,16,1,1,1,12,1,1,1,4,0,1,4],
    [4,1,5,19,1,11,1,1,1,21,5,15,5,20,1,1,1,11,1,22,5,1,4],
    [4,1,1,1,1,4,0,11,1,4,1,1,1,4,1,11,0,4,1,1,1,1,4],
    [22,5,5,5,5,8,5,8,5,8,5,5,5,8,5,8,5,8,5,5,5,5,19,],

]


let maze2= //bane2
[
    [21,5,5,5,5,5,7,5,5,5,7,5,7,5,5,5,7,5,5,5,5,5,20],
    [4,1,1,1,1,1,4,1,1,1,4,1,4,1,1,1,4,1,1,1,1,1,4],
    [4,1,4,1,4,1,4,1,13,5,9,1,10,5,14,1,4,1,4,1,4,1,4],
    [4,1,1,0,4,1,4,1,1,0,4,1,4,0,1,1,4,1,4,0,4,1,4],
    [4,1,22,5,19,1,12,1,13,5,8,17,8,5,14,1,12,1,22,5,19,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,18,1,1,1,1,1,1,1,1,1,1,4],
    [4,1,13,5,7,14,1,1,1,5,5,1,5,5,1,1,1,13,7,5,14,1,4],
    [4,1,1,0,4,0,1,1,1,4,3,3,3,4,1,1,1,0,4,0,1,1,4],
    [4,1,13,5,8,20,1,1,1,5,5,5,5,5,1,1,1,21,8,5,14,1,4],
    [4,1,1,1,1,4,1,11,1,1,1,1,1,1,1,11,1,4,1,1,1,1,4],
    [10,5,5,14,1,12,1,4,1,13,5,7,5,14,1,4,1,12,1,13,5,5,9],
    [4,1,1,1,1,1,1,4,0,1,1,4,1,1,0,4,1,1,1,1,1,1,4],
    [4,1,0,13,5,5,5,8,5,14,1,12,1,13,5,8,5,5,14,0,1,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,4],
    [22,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,19],

]

let maze3= //bane3
[
    [21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,20],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,1,1,21,5,5,1,1,1,21,5,5,20,1,1,1,4,1,0,4,1,1,4],
    [4,1,1,4,0,1,1,1,1,4,1,1,4,1,1,1,10,5,5,9,1,1,4],
    [4,1,1,4,1,1,1,1,1,10,5,5,19,1,1,1,4,1,1,4,1,1,4],
    [4,1,1,22,5,14,1,1,1,4,1,1,1,1,1,1,4,1,1,4,1,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,0,1,1,1,1,1,1,1,21,5,1,5,20,1,1,1,1,1,1,1,0,4],
    [10,5,5,5,5,5,5,5,1,4,3,3,3,4,1,5,5,5,5,5,5,5,9],
    [4,1,1,1,1,1,1,1,1,22,5,7,5,19,1,1,1,1,1,1,1,1,4],
    [4,1,21,5,5,5,20,1,1,1,1,12,1,1,1,1,21,5,5,5,20,1,4],
    [4,1,4,0,1,0,4,1,1,4,0,1,0,4,1,1,4,0,1,0,4,1,4],
    [4,1,4,1,11,1,4,1,1,22,5,5,5,19,1,3,12,1,4,1,4,1,4],
    [4,1,1,1,4,1,1,1,1,1,1,2,1,1,1,1,1,1,4,1,1,1,4],
    [22,5,5,5,8,5,5,5,5,5,5,5,5,5,5,5,5,5,8,5,5,5,19],

]





// Definerer playerens startsposition
let playerPosition = {x:9, y:9};

//Henter start knappen
let btn = document.querySelector('#btn');

//Starter spillet når man trykker
btn.addEventListener('click', playgame);
function playgame(){
    //viser spillet når man klikker
    canvas.style.display = "block";

    //viser boxscore når man klikker
    boxscore.style.display = "block";
    
    //viser boxscore når man klikker
    boxscore.style.display = "block";

     //skjuler knap når man klikker
     btn.style.display = "none";

     //tid vises
     displays.style.display="block";

    //Starter timeren
    time = setInterval(function () {
        seconds -= 1;
        document.querySelector('#time-display').innerText = seconds;
        
        //Time up 
        if(seconds == 0){
            gameover();
        };
    
    }, 1000);
}; 

// Scoren
let score = 9;

//Timer
let seconds = 200;
document.querySelector('#time-display').innerText = seconds;
let time;



let liv = 3;
let skade = 1;
let livText = document.querySelector('#liv');
livText.innerHTML = liv;

function livesLeft() {
    liv -= skade;
    livText.innerHTML = liv;


    if(liv == 0){
        gameover();
    };
};

function gameover(){
    displays.style.display= "none";
    canvas.style.display = "none";
    end.innerHTML="Game Over";
    
    
    //gameover teksten vises ikke på forhånd
    let gameover = document.querySelector('#end');
    
    //injecter tekst ind i <p> tag
    if(seconds == 0){
        gameover.innerHTML = "<span>Du løb tør for tid.</span>";
        clearInterval(time);
    } else if(liv == 0){
        gameover.innerHTML = "<span>Du løb tør for liv.</span>";
        clearInterval(time);
       
    };
    setTimeout(function(){
        location.href = "index.php";
    }, 4500);
};


    
//Spillet vises ikke
canvas.style.display = "none";

//Tid vises ikke
displays.style.display = "none";

//boxscoren vises ikke
boxscore.style.display = "none";

// Draw maze funktionen
function drawMaze(){

    for(let y= 0; y < maze.length; y++){

      for(let x = 0; x < maze[y].length; x++){

        if(maze[y][x] === vej){
            ctx.drawImage(vejPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === player){
            playerPosition.x = x; 
            playerPosition.y = y; 
            ctx.drawImage(playerPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === pacman){
            ctx.drawImage(pacmanPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === horisontal){
        ctx.drawImage(horisontalPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === vertical){
        ctx.drawImage(verticalPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === kryds){
            ctx.drawImage(krydsPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === tKrydsTop){
            ctx.drawImage(tKrydsTopPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === tKrydsL){
            ctx.drawImage(tKrydsLPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === tKrydsR){
            ctx.drawImage(tKrydsRPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === tKrydsBot){
            ctx.drawImage(tKrydsBotPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === op){
            ctx.drawImage(opPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === ned){
            ctx.drawImage(nedPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === hojre){
            ctx.drawImage(hojrePic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === venstre){
            ctx.drawImage(venstrePic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === point){
            ctx.drawImage(pointPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === doorShut){
            ctx.drawImage(doorShutPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === finish){
            ctx.drawImage(finishPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === doorShutTo){
            ctx.drawImage(doorShutPicTo,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === finishTo){
            ctx.drawImage(finishToPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === topRight){
            ctx.drawImage(topRightPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === botRight){
            ctx.drawImage(botRightPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === topLeft){
            ctx.drawImage(topLeftPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
        else if(maze[y][x] === botLeft){
            ctx.drawImage(botLeftPic,x*tileSize,y*tileSize,tileSize,tileSize);
        }
      }
}};

//Walkable funktionen, der tillader os at definerer, hvilke tiles playeren kan gå på
function walkable(targetTile) {
    if (targetTile === vej || targetTile === pacman || targetTile === point || targetTile === finish || targetTile === finishTo) {
        return true;
    } 
    else {
        return false;
    }
}


// Åbner døren, og gør det muligt at komme videre
function unlocked() {
    if ( score >= 10 ){
        doorShutPic.src = 'images/doorOpen.png';
    }
}
function unlocked2() {
    if ( score >= 11 ){
        doorShutPicTo.src = 'images/doorOpengreen.png';
    }
}

// Vender player avataren så den passer med gå retningen
function playerLeft() {
    playerPic.src = 'images/playerbgmirror.png';
    
}

// Vender player avataren så den passer med gå retningen
function playerRight() {
    playerPic.src = 'images/playerbg.png';
}

// Vender player avataren så den passer med gå retningen
function playerDown() {
    playerPic.src = 'images/playerbgdown.png';
}

// Vender player avataren så den passer med gå retningen
function playerUp() {
    playerPic.src = 'images/playerbgup.png';
}

// 
function levelUp() {
    if (score >= 10){
     maze = maze2;

verticalPic.src = 'images/verticalVgreen.png'; // Vertikal mur

horisontalPic.src = 'images/horisontalVgreen.png';  // Horisontal mur

krydsPic.src = 'images/krydsVgreen.png'; // Kryds mur 

tKrydsTopPic.src = 'images/tTopgreen.png'; // T-kryds top

tKrydsBotPic.src = 'images/tBundgreen.png'; // T-kryds bund

tKrydsRPic.src = 'images/tHojregreen.png'; // T-kryds right

tKrydsLPic.src = 'images/tVenstregreen.png'; // T-kryds left

opPic.src = 'images/opgreen.png'; // Op

hojrePic.src = 'images/hojregreen.png'; // Right

nedPic.src = 'images/nedgreen.png'; // Down

venstrePic.src = 'images/venstregreen.png'; // Left 
 
topRightPic.src = 'images/topRightgreen.png'; // Top højre hjørne 

botRightPic.src = 'images/botRightgreen.png'; // bot højre hjørne 

topLeftPic.src = 'images/topLeftgreen.png'; // Top venstre hjørne 

botLeftPic.src = 'images/botLeftgreen.png'; // Bottom venstre hjørne 
    }
    if (score >= 12){
     maze = maze3;

 verticalPic.src = 'images/verticalVgul.png'; // Vertikal mur

horisontalPic.src = 'images/horisontalVgul.png';  // Horisontal mur

krydsPic.src = 'images/krydsVgul.png'; // Kryds mur 

tKrydsTopPic.src = 'images/tTopgul.png'; // T-kryds top

tKrydsBotPic.src = 'images/tBundgul.png'; // T-kryds bund

tKrydsRPic.src = 'images/tHojregul.png'; // T-kryds right

tKrydsLPic.src = 'images/tVenstregul.png'; // T-kryds left

opPic.src = 'images/opgul.png'; // Op

hojrePic.src = 'images/hojregul.png'; // Right

nedPic.src = 'images/nedgul.png'; // Down

venstrePic.src = 'images/venstregul.png'; // Left 
 
topRightPic.src = 'images/topRightgul.png'; // Top højre hjørne 

botRightPic.src = 'images/botRightgul.png'; // bot højre hjørne 

topLeftPic.src = 'images/topLeftgul.png'; // Top venstre hjørne 

botLeftPic.src = 'images/botLeftgul.png'; // Bottom venstre hjørne 
    }
}


 
let oldTile = vej;


// Definerer piletasterne, og deres funktion
window.addEventListener('keydown', (e) => {
    let targetTile;
    switch (e.keyCode) {
        case 37: // Piletast venstre
            targetTile = maze[playerPosition.y][playerPosition.x - 1];
            if (walkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x - 1] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = oldTile;
                if (targetTile === finish || targetTile === finishTo){
                    levelUp();
                } 
                playerLeft();
                drawMaze();
                unlocked();
                unlocked2();
                
                if (targetTile === point) {
                    score++;
                    document.getElementById("boxscore").innerHTML = "Din score er: " + score;
                }
                if(targetTile === vej ||  targetTile === finish || targetTile === pacman|| targetTile === finishTo){
                    oldTile = targetTile
                }
            }
             if (targetTile === pacman){
                livesLeft();
                document.getElementById("liv-display").innerHTML = "" + liv;
            }
             
            break;

        case 39: // Piletast højre
            targetTile = maze[playerPosition.y][playerPosition.x + 1];
            if (walkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x + 1] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = oldTile;
                if (targetTile === finish || targetTile === finishTo){
                    levelUp();
                } 
                playerRight();
                drawMaze();
                unlocked();
                unlocked2();
                
                if (targetTile === point) {
                    score++;
                    document.getElementById("boxscore").innerHTML = "Din score er: " + score;
                }
                if(targetTile === vej ||  targetTile === finish || targetTile === pacman|| targetTile === finishTo){
                    oldTile = targetTile
                }
            }
             if (targetTile === pacman){
                livesLeft();
                document.getElementById("liv-display").innerHTML = "" + liv;
            }
            
            break;
        case 38: // Piletast op
            targetTile = maze[playerPosition.y - 1][playerPosition.x];
            if (walkable(targetTile)) {
                maze[playerPosition.y - 1][playerPosition.x] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = oldTile;
                
                if (targetTile === finish || targetTile === finishTo){
                    levelUp();
                } 
                playerUp();
                drawMaze();
                unlocked();
                unlocked2();
               
                if (targetTile === point) {
                    score++;
                    document.getElementById("boxscore").innerHTML = "Din score er: " + score;
                }
                if(targetTile === vej ||  targetTile === finish || targetTile === pacman|| targetTile === finishTo){
                    oldTile = targetTile
                }
            }
             if (targetTile === pacman){
                livesLeft();
                document.getElementById("liv-display").innerHTML = "" + liv;
            }   
            
            
            break;

        case 40: // Piletast ned
            targetTile = maze[playerPosition.y + 1][playerPosition.x];
            if (walkable(targetTile)) {
                maze[playerPosition.y + 1][playerPosition.x] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = oldTile;
                if (targetTile === finish || targetTile === finishTo){
                    levelUp();
                } 
                playerDown();
                drawMaze();
                
                unlocked();
                unlocked2();
                
                if (targetTile === point) {
                    score++;
                    document.getElementById("boxscore").innerHTML = "Din score er: " + score;
                }
                if(targetTile === vej ||  targetTile === finish || targetTile === pacman|| targetTile === finishTo){
                    oldTile = targetTile
                }
            }
             if (targetTile === pacman){
                livesLeft();
                document.getElementById("liv-display").innerHTML = "" + liv;
            }
            
            
             
            
            break;
    }
   
})

// Forhindrer piltasternes standard funktion
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

// Vi loader mazen ved at bruge addEventListener
window.addEventListener("load", drawMaze);