class Screen{
	constructor(){
		this.mainheight=document.getElementById("player");
		this.mainheight.style.height=screen.height+"px";
		if(screen.width<500){
			this.mainheight.style.width=screen.width+"px";
		}
		this.divheight=document.getElementById("content");
		this.divheight.style.height=screen.height -120  +"px"
	}
};
onload = new Screen();
//------------------------------------------------------------------
class Slider{
	constructor(){
	this.images=[];
	this.images[0]="mu1.jpg";
	this.images[1]="mu2.jpg";

	this.counter=0;
	
	setInterval(() => {
		this.sliDernow();
	}, 1000);
	
	};
	sliDernow(){
		if(this.counter< this.images.length-1){
			this.counter++;
		}else{
			this.counter=0;
		}
		document.slider.src=this.images[this.counter];
		document.getElementById("link").href=this.links[this.counter];
	}
	
	
};
onload=new Slider();
//------------------------------------------------------------------

function update(){
	var date=new Date;
	var settime=document.getElementById("settime");
	settime.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	var setdate=document.getElementById("setdate");
	setdate.innerHTML=date.getDate()+"/"+parseInt(date.getMonth()+1)+"/"+date.getFullYear();
	
}
setInterval(update,1);
onload=update;
//------------------------------------------------------------------
class Play{
	constructor(){
		this.audiofile=document.getElementById("audiofile");
		this.audiotitle=document.getElementById("audiotitle");
		this.playButton=document.getElementById("play");
		this.playButton.addEventListener("click",()=>{
			
			this.setaudio();
			
		});
		this.isPlayed;
		
	//------------------------------------------------------------------	
		
		this.namesRadio=[];
			this.namesRadio[0]="Nostalgie  FM 88.1 ";
			this.namesRadio[1]="FM 87.9 أغاني أغاني";
			this.namesRadio[2]=" Light FM -90.5- MHz";
			this.namesRadio[3]=" FM 91.3 صوت الهدى ";
			this.namesRadio[4]=" FM 103.0 MCD  ";
			this.namesRadio[5]="صوت الغد  97.1";
			this.namesRadio[6]=" FM 102.7  لبنان الحر";
			this.namesRadio[7]="AL FAJER FM 104.9 ";
			this.namesRadio[8]="Mix FM 104.4  MHz";
			this.namesRadio[9]="صوت النجوم FM 95.9";
			
			this.sourceAudio=[];
			this.sourceAudio[0]="https://scdn.nrjaudio.fm/adwz1/lb/55175/mp3_128.mp3";
			this.sourceAudio[1]="http://185.52.127.168/lb/1/mp3_128.mp3?access_token=6074266b963c4b5eba78f6be792103d2";
			this.sourceAudio[2]="https://playerservices.streamtheworld.com/api/livestream-redirect/LIGHTFM.mp3";
			this.sourceAudio[3]="https://l3.itworkscdn.net/itwaudio/9032/stream";
			this.sourceAudio[4]="https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3";
			this.sourceAudio[5]="https://l3.itworkscdn.net/itwaudio/9030/stream";
			this.sourceAudio[6]="https://edge.mixlr.com/channel/qtqeb";
			this.sourceAudio[7]="http://vps1.osina.cloud:9306/;";
			this.sourceAudio[8]="https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_LEBANONAAC.aac";
			this.sourceAudio[9]="http://s25.myradiostream.com:15298/listen.mp3";

		this.server=0;
		this.setsources();
		
		document.getElementById("next").addEventListener("click",()=>{
			if(this.server<this.sourceAudio.length -1){
				++this.server;
				this.isPlayed=false;
			}else{
				this.server=0;
				
			}
			localStorage.setItem("saveChanel",this.server)
			this.setsources();
		})
		
		document.getElementById("back").addEventListener("click",()=>{
			if(this.server>0){
				--this.server;
				this.isPlayed=false;
			}else{
				this.server=this.sourceAudio.length -1;
			}
			localStorage.setItem("saveChanel",this.server)
			this.setsources();
		})
	};

	setsources(){
		if(localStorage.getItem("saveChanel")!=null){
			this.server=localStorage.getItem("saveChanel");
		}
	this.audiofile.src=this.sourceAudio[this.server];
	this.audiotitle.innerHTML=this.namesRadio[this.server];
	this.setaudio();
	}
	setaudio(){
		if(this.isPlayed===false){
			this.playButton.src="pause.jpg"
			this.audiofile.play();
			this.isPlayed=true;
		}else{
			this.playButton.src="play.jpg"
			this.audiofile.pause();
			this.isPlayed=false;
		}
	}
};
onload= new Play();
	//------------------------------------------------------------------