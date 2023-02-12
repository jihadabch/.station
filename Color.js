class Color{
	constructor(){
if(localStorage.getItem("savecolor")==null){
	document.body.style.background=document.body.style.background="linear-gradient(to right , red ,rgb(5, 5, 5), orange)"
	
}
	this.SetColor(localStorage.getItem("savecolor"))	
		
		this.colorButton=document.getElementById("color1")
		this.colorButton.addEventListener("click",()=>{
			this.SetColor("color1")
		});
		this.colorButton2=document.getElementById("color2")
		this.colorButton2.addEventListener("click",()=>{
			this.SetColor("color2")
		});
		this.colorButton3=document.getElementById("color3")
		this.colorButton3.addEventListener("click",()=>{
			this.SetColor("color3")
		});
		this.colorButton4=document.getElementById("color4")
		this.colorButton4.addEventListener("click",()=>{
			this.SetColor("color4")
		});
			
	}
	SetColor(colors){
		if(colors=="color1"){
			document.body.style.background=document.body.style.background="linear-gradient(to right , red , black , white , black , red)"
		}else if(colors=="color2"){
			document.body.style.background=document.body.style.background="linear-gradient(to right , blue , black , red, black,blue)"
		}else if(colors=="color3"){
			document.body.style.background=document.body.style.background=" linear-gradient(to right , orange, yellow,black, orange,yellow)"
		}else if(colors=="color4"){
			document.body.style.background=document.body.style.background=" linear-gradient(to right ,white, black , black,black,white)"
		}
		localStorage.setItem("savecolor",colors)
	}
	
};
onload= new Color();
