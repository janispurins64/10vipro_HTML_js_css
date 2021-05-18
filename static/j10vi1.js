function jp_01(a,b,c){
    let d;
    d = b*b-4*a*c;
    if(a === undefined || b === undefined || c === undefined){
        console.log("Kāds no koeficientiem nav definēts");
    }
    else{
        if(a===0 ){
            console.log("Šis nav kvadrātvienādojums");        
        }
        else if(d<0){
            console.log("Vienādojumam nav reālu sakņu");  
        }
        else{
            console.log("x1=",(-b+Math.sqrt(d))/(2*a));
            console.log("x2=",(-b-Math.sqrt(d))/(2*a));
        }   
    }

}
var ax =[];
var ay =[];

function f10vipr1(){
    let axp = document.getElementById("koor_ax");
    let ayp = document.getElementById("koor_ay");
    let x = parseFloat(axp.textContent);
    let y = parseFloat(ayp.textContent);
    console.log(axp.textContent);
    console.log(ayp.textContent);
    console.log(x,y);
    ax.push(x);
    ay.push(y);
    console.log(ax);
    console.log(ay);
}