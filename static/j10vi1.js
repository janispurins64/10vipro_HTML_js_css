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