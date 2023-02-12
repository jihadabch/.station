class Volume{
	constructor(){
		this.audiofile=document.getElementById("audiofile");
		this.audiofile.volume=50/100;
		
		this.volumerange=document.getElementById("inputVolume")
		this.volumerange.addEventListener("change",()=>{
			this.audiofile.volume=this.volumerange.value/100;
			
		})
	
		this.volumespeed=document.getElementById("inputSpeed")
		this.volumespeed.playbackRate=1;
		this.volumespeed.addEventListener("change",()=>{
			this.audiofile.playbackRate=this.volumespeed.value/50
		})
	}

};
onload= new Volume();
	//------------------------------------------------------------------
	
