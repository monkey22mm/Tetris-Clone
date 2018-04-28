var Level = [[]];
var O = [
new Block(19*32,32),
new Block(20*32,32),
new Block(19*32,0),
new Block(20*32,0)];

var L = [
new Block(19*32,32),
new Block(20*32,32),
new Block(21*32,32),
new Block(21*32,0)];

var S = [
new Block(19*32,32),
new Block(20*32,32),
new Block(20*32,0),
new Block(21*32,0)];

var Z = [
new Block(19*32,0),
new Block(20*32,0),
new Block(20*32,32),
new Block(21*32,32)];

var T = [
new Block(20*32,0),
new Block(20*32,32),
new Block(19*32,32),
new Block(21*32,32)];

var I = [
new Block(22*32,32),
new Block(21*32,32),
new Block(20*32,32),
new Block(19*32,32)];

var J = [
new Block(21*32,32),
new Block(20*32,32),
new Block(19*32,32),
new Block(19*32,0)];
var blocks;
var img = new Image();
img.src = "res/BGTile.png";
var GO = new Image();
GO.src = "res/GameOver.png";
var score;
var GameOver;
var gameOverCounter;
var Paused = false;
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function countRow(row){
	var count = 0;
	for(var j = 11;j<29;j++){
		if(Level[j][row] !=5)
			count++;
		}
	return count;
}
function chooseBlock(){
	var colorID = getRandomInt(6,11);
	switch(getRandomInt(0,6))
	{
		case 0:
		blocks.push(new Block(S[0].x, S[0].y,colorID));
		blocks.push(new Block(S[1].x, S[1].y,colorID));
		blocks.push(new Block(S[2].x, S[2].y,colorID));
		blocks.push(new Block(S[3].x, S[3].y,colorID));
		break;
		case 1:
		blocks.push(new Block(Z[0].x, Z[0].y,colorID));
		blocks.push(new Block(Z[1].x, Z[1].y,colorID));
		blocks.push(new Block(Z[2].x, Z[2].y,colorID));
		blocks.push(new Block(Z[3].x, Z[3].y,colorID));
		break;
		case 2:
		blocks.push(new Block(J[0].x, J[0].y,colorID));
		blocks.push(new Block(J[1].x, J[1].y,colorID));
		blocks.push(new Block(J[2].x, J[2].y,colorID));
		blocks.push(new Block(J[3].x, J[3].y,colorID));
		break;
		case 3:
		blocks.push(new Block(L[0].x, L[0].y,colorID));
		blocks.push(new Block(L[1].x, L[1].y,colorID));
		blocks.push(new Block(L[2].x, L[2].y,colorID));
		blocks.push(new Block(L[3].x, L[3].y,colorID));
		break;
		case 4:
		blocks.push(new Block(O[0].x, O[0].y,colorID));
		blocks.push(new Block(O[1].x, O[1].y,colorID));
		blocks.push(new Block(O[2].x, O[2].y,colorID));
		blocks.push(new Block(O[3].x, O[3].y,colorID));
		break;
		case 5:
		blocks.push(new Block(T[0].x, T[0].y,colorID));
		blocks.push(new Block(T[1].x, T[1].y,colorID));
		blocks.push(new Block(T[2].x, T[2].y,colorID));
		blocks.push(new Block(T[3].x, T[3].y,colorID));
		break;
		default:
		blocks.push(new Block(I[0].x, I[0].y,colorID));
		blocks.push(new Block(I[1].x, I[1].y,colorID));
		blocks.push(new Block(I[2].x, I[2].y,colorID));
		blocks.push(new Block(I[3].x, I[3].y,colorID));
		break;
		
	}
}
var music;
var pop;
var woohoo;
var lose;
new Audio('res/Welcome.mp3').play();
function init(){
	music = new Audio('res/Tetris Theme - DJ AG Remix.mp3');
	music.volume = 0.5;
	pop = new Audio('res/Pop.mp3');
	woohoo = new Audio('res/Woohoo!.mp3');
	lose = new Audio('res/73581__benboncan__sad-trombone.mp3')
	music.loop = true;
	music.play();
	blocks = [];
	gameOverCounter = 0;
	score = 0;
	GameOver = false;
	chooseBlock();
	for(var i = 0;i<1280/32;i++){
		Level[i] = new Array();
		for(var j = 0;j<720/32;j++){
			Level[i][j] = 0;
			}
	}
	for(var i = 0;i<22;i++){
		Level[10][i] = 1;
		Level[29][i] = 3;
	}
	for(var i = 0;i<22;i++){
	for(var j = 11;j<29;j++){
		Level[j][i] = 5;
	}
	}
	for(var j = 11;j<29;j++)
		Level[j][22] = 4;
	console.log("Initialized.");
	//Level[16][16] = 4;
	//Level[16][17] = 4;
	//Level[16][17] = 4;
	//var x = 0;
	//var y = 3;
	//var tempx = x;
	//var tempy = y;
	//x = Math.floor(tempx*Math.cos(Math.PI/2)-tempy*Math.sin(Math.PI/2));
	//console.log(tempx+", "+tempy);
	//y = Math.floor(tempx*Math.sin(Math.PI/2)+tempy*Math.cos(Math.PI/2));
	//console.log(x+", "+y);
}
function clearBlocks(){
	for(var j = 0;j<blocks.length;j++){
				Level[Math.floor(blocks[j].x/32)][Math.floor(blocks[j].y/32)] = blocks[j].ID;
				blocks.splice(j,1);
				
		}
	pop.play();
}
function clear(){
			var LevelTemp = Level;
			for(var c = 0;c<clearRow.length;c++){
				console.log(clearRow);
			for(var i = clearRow[c];i>1;i--){
				for(var j = 11;j<29;j++){
					Level[j][i] = LevelTemp[j][i-1];
				}
			}
			clearRow.splice(c,1);
			}
			score += 100;
		woohoo.play();
}
var UniversalBlockStop = false;
var clearRow = [];
var BlockSpawnTimer = 0;
function update(){
	if(!Paused){
	if(UniversalBlockStop && blocks.length == 0){
		BlockSpawnTimer ++;
		if(BlockSpawnTimer >= 10){
		chooseBlock();
		score+=10;
		UniversalBlockStop = false;
		BlockSpawnTimer = 0;
		}
	}
	for(var i = 0;i<22;i++){
			if(countRow(i) >=18){
				clearRow.push(i);
				clearBlocks();
				clear();
			}
		}
	if(countRow(0) >= 1){
		GameOver = true;
		music.pause();
		lose.play();
		blocks = [];
		UniversalBlockStop = false;
		gameOverCounter++;
		if(gameOverCounter >= 100){
			
			init();
		}
	}
	for(var i = 0;i<blocks.length;i++){
		if(Level[Math.floor(blocks[i].x/32)][(Math.floor(blocks[i].y+32))/32] != 5)
			UniversalBlockStop = true;
		if(!UniversalBlockStop){
			blocks[i].update();
		}else{
			clearBlocks();
		}
	}	
	}
}

function render(context){
	for(var i = 0;i<1280/32;i++){
	for(var j = 0;j<720/32;j++){
		context.drawImage(img,32*(Level[i][j]%4),32*Math.floor(Level[i][j]/4),32,32, i *32, j*32,32,32);
	}}
	for(var i = 0;i<blocks.length;i++)
		blocks[i].render(context);
	if(GameOver){
		context.drawImage(GO,0,0,1280,720);
	}
	context.fillStyle = "white";
	context.font = "bold 16px Arial";
	context.fillText("Score: " + score, 0, 12);
	context.fillText("Press P to pause", 0, 24);
	if(Paused){
		context.fillStyle = "rgba(0,0,0,.5)";
		context.fillRect(0,0,1280,720);
		context.fillStyle = "white";
		context.font = "bold 32px Arial";
		if(SelectedVolume == 0)
			context.fillStyle = "red";
		context.fillText("Music Volume: " + Math.floor(music.volume*100+.0001), (1280/2)-128, 200);
		context.fillStyle = "white";
		if(SelectedVolume == 1)
			context.fillStyle = "red";
		context.fillText("Sound Effect Volume: " + Math.floor(pop.volume*100),  (1280/2)-172, 300);
		context.fillStyle = "white";
		context.fillText("Q and E to change volume settings",  (1280/2)-256, 400);
		context.fillText("S to change selected volume",  (1280/2)-196, 450);
		context.fillText("P to return to game",  (1280/2)-128, 500);
	}
}
var SelectedVolume = 0;
function onKeyboardDown(event){
	switch(event.keyCode){
		case keycode.P:
			console.log(Paused);
			if(!Paused){
			Paused = true;
			break;
			}else{
				Paused = false;
				break;
			}
		case keycode.Q:
		if(!Paused){
			var CanMove = true;
			for(var i = 0;i<blocks.length;i++){
				if(Level[Math.floor(blocks[1].x+(blocks[i].x-blocks[1].x) * Math.cos(Math.PI/2)-(blocks[i].y-blocks[1].y)*Math.sin(Math.PI/2))/32][Math.floor(blocks[1].y+(blocks[i].x-blocks[1].x) * Math.sin(Math.PI/2)+(blocks[i].y-blocks[1].y)*Math.cos(Math.PI/2))/32] != 5){
					CanMove = false;
				}}
				if(CanMove){
					for(var i = 0;i<blocks.length;i++){
						var anchorx = blocks[1].x;
						var anchory = blocks[1].y;
						var oldX = blocks[i].x;
						var oldY = blocks[i].y;
						blocks[i].x=Math.floor(anchorx+(oldX-anchorx) * Math.cos(Math.PI/2)-(oldY-anchory)*Math.sin(Math.PI/2));
						blocks[i].y=Math.floor(anchory+(oldX-anchorx) * Math.sin(Math.PI/2)+(oldY-anchory)*Math.cos(Math.PI/2));
						
					}
			}
		
		}else{
			if(SelectedVolume == 0 && music.volume >= .1){
				music.volume-=.1;
				break;
			}else if(SelectedVolume == 1 && pop.volume > .1){
				pop.volume-=.1;
				woohoo.volume = pop.volume;
				break;
			}
		}
		break;
		case keycode.E:
		if(!Paused){
			var CanMove = true;
			for(var i = 0;i<blocks.length;i++){
				if(Level[Math.floor(blocks[1].x+(blocks[i].x-blocks[1].x) * Math.cos(-Math.PI/2)-(blocks[i].y-blocks[1].y)*Math.sin(-Math.PI/2))/32][Math.floor(blocks[1].y+(blocks[i].x-blocks[1].x) * Math.sin(-Math.PI/2)+(blocks[i].y-blocks[1].y)*Math.cos(-Math.PI/2))/32] != 5){
					CanMove = false;
				}}
				if(CanMove){
					for(var i = 0;i<blocks.length;i++){
						var anchorx = blocks[1].x;
						var anchory = blocks[1].y;
						var oldX = blocks[i].x;
						var oldY = blocks[i].y;
						blocks[i].x=Math.floor(anchorx+(oldX-anchorx) * Math.cos(-Math.PI/2)-(oldY-anchory)*Math.sin(-Math.PI/2));
						blocks[i].y=Math.floor(anchory+(oldX-anchorx) * Math.sin(-Math.PI/2)+(oldY-anchory)*Math.cos(-Math.PI/2));
					}
				}
			
		}else{
			if(SelectedVolume == 0 && music.volume <= .9){
				music.volume+=.1;
				break;
			}else if(SelectedVolume == 1 && pop.volume <= .9){
				pop.volume+=.1;
				woohoo.volume = pop.volume;
				break;
			}
		}
		break;
		case keycode.S:
		if(!Paused){
			var CanMove = true;
			for(var i = 0;i<blocks.length;i++){
				if(Level[blocks[i].x/32][(blocks[i].y+32)/32] != 5){
					CanMove = false;
				}}
				if(CanMove){
					for(var i = 0;i<blocks.length;i++){
						blocks[i].timerSpeed = 2;
					}
				}
			
		}else{
			if(SelectedVolume == 0){
				SelectedVolume = 1;
				break;
			}else if(SelectedVolume == 1){
				SelectedVolume = 0;
				break;
			}
		}
		break;
		case keycode.A:
		if(!Paused){
			var CanMove = true;
			for(var i = 0;i<blocks.length;i++){
				if(Level[(blocks[i].x-32)/32][blocks[i].y/32] != 5){
					CanMove = false;
				}}
				if(CanMove && blocks.length == 4){
					for(var i = 0;i<blocks.length;i++){
						blocks[i].x-=32;
					}
			}
		}
			break;
		case keycode.D:
		if(!Paused){
			var CanMove = true;
			for(var i = 0;i<blocks.length;i++){
				if(Level[(blocks[i].x+32)/32][blocks[i].y/32] != 5){
					CanMove = false;
				}}
				if(CanMove && blocks.length == 4){
					for(var i = 0;i<blocks.length;i++){
						blocks[i].x+=32;
					}
				}
		}
			break;
		default:
			console.log(event.keyCode);
		}
	}
function onKeyboardUp(event){
	switch(event.keyCode){
		case keycode.S:
			for(var i = 0;i<blocks.length;i++){
						blocks[i].timerSpeed = 30;
					}
			break;
			default:
			console.log(event.keyCode);
		}
	}
var leftClicked=false;
var rightClicked=false;
function mouseDownEvent(event){
	switch(event.button){
		case 0:
			event.preventDefault();
			leftClicked = true;
			break;
		case 1:
			event.preventDefault();
			leftClicked = true;
			break;
		case 2:
			event.preventDefault();
			rightClicked = true;
			break;
		default:
			console.log(event.button);
		}
	}
function mouseUpEvent(event){event.preventDefault();}
function onWheelEvent(event){event.preventDefault();}