var screen=document.getElementById('screen');
var btn=document.getElementsByClassName('btn');
var i=false;



document.addEventListener('keydown',(e)=>{
    var cvalue=screen.value;
    const keyvalu=['0','1','2','3','4','5','6','7','8','9','-','+','*','/','%','(',')','.','^'];
    if(keyvalu.includes(e.key)){
        if(i){
            screen.value='';
            i=false;
        }
        screen.value+=e.key;
    }
    
    else if(e.key=="Backspace"){
        backspace();
    }
    else if(e.key=="!"){
        fact()
    }
    else if(e.key=="Escape"){
        screen.value='';
      }
    
    else if(e.key=="Enter"){
        if(screen.value.includes("tan")){
            screen.value=Math.tan(num);
        }
        else if(screen.value.includes("tan")){
            let num = parseInt(extractnumber(cvalue));
            screen.value=Math.tan(num);
        }
        else{
            screen.value=eval(screen.value);
        }
        
        i=true;
  
      }

    
    function extractnumber(cvalue){
        let numbers = '';
            for (let i = 0; i < cvalue.length; i++) {
                if (!isNaN(cvalue[i])) {
                    numbers += cvalue[i];
                }
            }
    }
    let num = parseInt(extractnumber(cvalue));
})




for(item of btn)
{
    item.addEventListener('click',function(e)
    {
        var cvalue=screen.value;
        btnText=e.target.innerHTML;
        if(i){
            screen.value='';
            i=false;
        }
            screen.value+=btnText;
        
    });
}



function sin()
{
    screen.value=Math.sin(screen.value);
}
function cos()
{
    screen.value=Math.cos(screen.value);
}
function tan()
{
    screen.value=Math.tan(screen.value);
}
function pow()
{
    screen.value=Math.pow(screen.value,2);
}
function sqrt()
{
    screen.value=Math.sqrt(screen.value);
}
function log()
{
    screen.value=Math.log(screen.value);
}
function pi()
{
    screen.value=3.14159265359;
}
function e()
{
    screen.value=2.71828182846;
}
function fact()
{
    var i,num,f;
    f=1;
    num=screen.value;
    for(i=1;i<=screen.value;i++)
    {
        f=f*num;//60
        num--;//1
    }
    screen.value=f;
}
function backspace()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}
function radian() {
    var degrees = screen.value;
    var radians = (degrees * Math.PI) / 180;
    screen.value = radians;
}

function degree() {
    var radians = screen.value;
    var degrees = (radians * 180) / Math.PI;
    screen.value = degrees;
}





function done(){
    var cvv=screen.value;

    function extractnumber(cvv){
        let numbers = '';
            for (let i = 0; i < cvv.length; i++) {
                if (!isNaN(cvv[i])) {
                    numbers += cvv[i];
                }
            }
            return numbers;
    }
   
    let num = parseInt(extractnumber(cvv));

    if(screen.value.includes("tan")){
        screen.value=Math.tan(num);
    }else{
        screen.value=eval(screen.value);
    }
    
    i=true;
    
}
