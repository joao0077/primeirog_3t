function total(){
    let c = document.getElementById("capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if(Number(c)){
       alert("o valor do capital deve ser numero.");
       document.getElementById("capital").value= "";
       document.getElementById("capital").focus(); 
       return
    }


    if(Number(j)){
        alert("o valor do capital deve ser numero.");
        document.getElementById("capital").value= "";
        document.getElementById("capital").focus();
        return
     }

     if(Number(j)){
        alert("o valor do capital deve ser numero.");
        document.getElementById("capital").value= "";
        document.getElementById("capital").focus();
        return
     }


let m = 0;
for(let i = 1; i <= t; i++){ 
    m = c *(1+(j/100));
    document.write("valor no mes ")
}
