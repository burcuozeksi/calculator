var durum = false;
var oprt = ""
var sonuc = "0"
//var bekleyenDeger=""
var ekran = document.querySelector(".calculate-input")
var btn = document.querySelectorAll(".button")
var operator = document.querySelectorAll(".operator")
var clear = document.querySelector(".clear")
var esittir = document.querySelector(".equal")
var decimal = document.querySelector(".decimal")

ekran.value="0"
btn.forEach(function(element){
    element.onclick=function(e){
        if(ekran.value=="0" || durum){
           ekran.value=""
        }
        ekran.value+=e.target.value
        durum= false
    }
})
operator.forEach(function(element){
    element.onclick=function(e){
        durum = true
        var yeni = this.value
        //bekleyenDeger =  ekran.value+bekleyenDeger.value

if(!durum){
        switch(oprt){
            case"+":ekran.value=(sonuc + Number(ekran.value));break;
            case"-":ekran.value=(sonuc - Number(ekran.value));break;
            case"*":ekran.value=(sonuc * Number(ekran.value));break;
            case"/":ekran.value=(sonuc / Number(ekran.value));break;
            default:break;
        }}
        sonuc=Number(ekran.value);
        oprt=yeni
    }
})

clear.onclick=function(){
    ekran.value="0";
    sonuc = "0";
    oprt="";
    //bekleyenDeger="";
}

esittir.onclick= function(){
    //bekleyenDeger.value=""
    durum=true
    switch(oprt){
        case"+":ekran.value=(sonuc + Number(ekran.value));break;
        case"-":ekran.value=(sonuc - Number(ekran.value));break;
        case"*":ekran.value=(sonuc * Number(ekran.value));break;
        case"/":ekran.value=(sonuc / Number(ekran.value));break;
        default:break;
   
 
}
sonuc=Number(ekran.value);
ekran.value=sonuc
sonuc=0
oprt=""

}
    

    decimal.onclick=function(){
    if(!ekran.value.includes(".")){
        ekran.value+=".";
    } 
    durum=false

}

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
    e.preventDefault(); //ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar.
   esittir.onclick();
    }
  });


  //addEventListener -belirtilen öğeye bir olay işleyicisini ekler. Bu olay meydana geldiğinde, dinleyici fonksiyon yürütülür.


//   background


const hesap = [  "1", "2","3","4","5","6","7","8","9","0"]

   
    let img= new Image();
    img.src="img/background.jpg";
    document.body.style.backgroundImage= `url(${img.src})`

    btn.forEach(event=>{
        event.addEventListener("click",function(e){
          
            {
        if (e.target.value=="1"){
            
            img.src="img/bir.jpg"
            
        }else if(e.target.value== "2"){
            img.src="img/iki.jpg"
           
        }else if(e.target.value =="3"){
            img.src="img/uc.jpg"
        }else if(e.target.value =="4"){
            img.src="img/dort.jpg"
        }else if(e.target.value =="5"){
            img.src="img/bes.jpg"
        }else if(e.target.value =="6"){
            img.src="img/alti.jpg"
        }else if(e.target.value =="7"){
            img.src="img/yedi.jpg"
        }else if(e.target.value =="8"){
            img.src="img/sekiz.jpg"
        }
        else if(e.target.value =="9"){
            img.src="img/dokuz.jpg"
        }
        else if(e.target.value =="0"){
            img.src="img/sifir.jpg"
        }
        document.body.style.backgroundImage=`url(${img.src})`
    } 
        })
    })