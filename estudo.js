let tabuada = 22;

function escreva (){
//2 x 1 = 2
    document.write("tabuada do" + tabuada + "<br>");
    document.write(tabuada+"x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada+"x 2 ="+(tabuada*2)+"<br>");
    document.write(tabuada+"x 3 ="+(tabuada*3)+"<br>");
    document.write(tabuada+"x 4 ="+(tabuada*4)+"<br>");
    document.write(tabuada+"x 5 ="+(tabuada*5)+"<br>");
    document.write(tabuada+"x 6 ="+(tabuada*6)+"<br>");
    document.write(tabuada+"x 7 ="+(tabuada*7)+"<br>");
    document.write(tabuada+"x 8 ="+(tabuada*8)+"<br>");
    document.write(tabuada+"x 9 ="+(tabuada*9)+"<br>");
    document.write(tabuada+"x 10 ="+(tabuada*10)+"<br>");

    
    

}


let lista = ["terra","marte","saturno","jupiter","venus"];

function mostralista(){
    document.write("tamanho da lista:" + lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){
    document.write("planeta" + lista[i] + "<br>");
  }

}
 
function repete (){
for(let i = 1; j <=10; j++){
document.write("tabuada do " + i + "<br>")
for(let i = 1; j <=10; j++){
    document.write("tabuada do " + i + "<br>")

}

}




}
function total(){
    let c = document.getElementById("capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let m =
    let m = c * (1 + (j/100));
    document.write("montante:" + m);
}
