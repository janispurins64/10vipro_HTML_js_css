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
    let axp = document.getElementById("koorax");
    let ayp = document.getElementById("kooray");
    let x = parseFloat(axp.value);
    let y = parseFloat(ayp.value);

    console.log(x,y);
    ax.push(x);
    ay.push(y);
    console.log(ax);
    console.log(ay);
}
function f10vipr2(){
    //Ievietojamā ziņa, labāk saņemt to no izsaucēja
    //funkcijas
    let t1 = "Šī ir jauna rinda";
    //Sagatave jaunu tagu ģenerēšanai
    let s1 = document.getElementById("sar1");
    //Izveido rindas sagatavi
    let newLI = document.createElement("li");
    // Izveido rāmi saturam
    let newDiv = document.createElement("p");
    //Izveido satura teksta sagatavi
    let newContent = document.createTextNode(t1);
    //Satura rāmī ievieto saturu
    newDiv.appendChild(newContent);
    //Saraksta rindā ievietojam satura rāmi 
    newLI.appendChild(newDiv); 
    //Pievienojam sarakstam jaunu rindu
    s1.appendChild(newLI);

}