var jFrames = 0, jActive = false;
var gFrames = 0;

function gravity(player,acceleration){
	player.y += acceleration;
}
function jump(player,boolean,duration,VPF,gravity){
	if(!jActive){
		if(boolean){
			jActive = true;
			jFrames = 0;
		}
	}	
	if(jFrames > duration){
		jActive = false;
	}
	if (jActive) {
		player.y -= VPF + gravity;
	}
	jFrames++;
}
