function Block(x,y,ID){
	this.x=x;
	this.y=y;
	this.timer = 0;
	this.TurnToLevel = false;
	this.timerSpeed = 30;
	this.ID = ID;
}
Block.prototype.update = function(){
	this.timer++;
	if(this.timer >=this.timerSpeed){
		this.y+=32;
		this.timer = 0;
	}
}
Block.prototype.render = function(context){
	context.drawImage(img,32*(this.ID%4),32*Math.floor(this.ID/4),32,32,this.x, this.y,32,32);
}