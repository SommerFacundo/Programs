let btnEnviar = document.getElementById("btnEnviar");
let res = document.getElementById("result");
let input = document.getElementById("num");

input.addEventListener("keyup",()=>{
    if(input.value.length >= 4){
        btnEnviar.style.display = "inline";
    }else if(input.value.length < 4){
        btnEnviar.style.display = "none";
    }

});

btnEnviar.addEventListener("click",()=>{
    res.innerHTML="";
    let numero = document.getElementById("num").value;
    let resultado;
    function numDif(n){
        let n1 = n[0];
        let diff = false;
       for (let i = 1; i < n.length; i++) {
            if(n1 != n[i]){
                diff = true;
            }
        
       }
       return diff;
    }
    if(numDif(numero)){
        do{
            let resultadoAux;
            numero = numero.split("");
                for (n in numero) {
                    numero[n] = parseInt(numero[n]);
                }
          
            let numeroAsc = numero.sort(function(a, b){return a -b});
            console.log(numeroAsc)
            let numeroDesc = numeroAsc.join("").split("").reverse();
            console.log(numeroDesc);
            for (nD in numeroDesc) {
                numeroDesc[nD] = parseInt(numeroDesc[nD]);
            
            }
            numeroAsc = parseInt(numeroAsc.join(""));
            numeroDesc = parseInt(numeroDesc.join(""));
        
            
             resultado = numeroDesc - numeroAsc;
             resultado = resultado + "";
             res.innerHTML += numeroDesc +"-" + numeroAsc + "=" + resultado +"<br>";
            resultadoAux = resultado.toString().split("").length;
            if(resultadoAux < 4){
                resultado = resultado.padStart(4,"0");
            }
            numero = resultado + "";
        
        }while(resultado != "6174"); 
    
    }else{
        alert("Numero igual");
    }
});
