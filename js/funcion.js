var tabBottons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPaneles = document.querySelectorAll(".tabContainer .tabPanel");
var botonPotencia = document.getElementById("potencialengua"),
    cajaalfa1 = document.getElementById("conjuntoalfa"),
    cajaalfa2 = document.getElementById("conjuntalfa1"),
    cajalengua1 = document.getElementById("conjuntolengua"),
    cajalengua2 = document.getElementById("conjuntolengua1"),
    cajapotencia = document.getElementById("numpotencilengua"),
    cajapala = document.getElementById("conjuntopala"),
    listaalfa = document.getElementById("listaalfa"),
    listalengua = document.getElementById("listalengua"),
    listapala = document.getElementById("listapala");

document.getElementById('potenciass').style.display ="none";

function showPanel(panelIndex,colorCode){
    tabBottons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color="";
    });
    tabBottons[panelIndex].style.backgroundColor=colorCode;
    tabBottons[panelIndex].style.color="white";
    tabPaneles.forEach(function(node){
        node.style.display="none";
    });
    tabPaneles[panelIndex].style.display="block";
    tabPaneles[panelIndex].style.backgroundColor=colorCode;
}
function bajarPotencia(){
    if(document.getElementById("potenciass").style.display = "none"){
        document.getElementById("potenciass").style.display = "block";
    }else{
        document.getElementById("potenciass").style.display = "none";
    }
}
function union(indice){
    if(indice == 0){
        var aux = cajaalfa1.value,
            aux1 = cajaalfa2.value;
    }else{
        var aux = cajalengua1.value,
            aux1 = cajalengua2.value;
    }
    var nueva = document.createElement("li"),
        enlace = document.createElement("a");

    aux = aux.slice(1,aux.length-1);
    aux1 = aux1.slice(1,aux1.length-1);
    var coma = ",", vacio =0,vacio1=0;
    aux = aux.split(coma);
    aux1 = aux1.split(coma);
    var vec2 =[];
    var vec1 = [];
    for(var i =0;i<aux.length;i++){
        vec1[i] = aux[i];
    }
    for(var j =0; j < aux1.length;j++){
        vec2[j]=aux1[j];
    }
    for(var p = 0; p < vec1.length;p++){
        if(vec1[p] == "&"){
            vacio = 1;
            vec1.splice(p,1);
            break;
        }
    }
    for(var p = 0; p < vec2.length;p++){
        if(vec2[p] == "&"){
            vacio1 = 1;
            vec2.splice(p,1);
            break;
        }
    }
    for(var k = 0; k < vec2.length;k++){
        var c;
        for(var l=0;l< vec1.length;l++){
            if(vec1[l] == vec2[k]){
                c = 0;
                break;
            }else{
                c = 1;
            }
        }
        if(c==1){
            vec1[vec1.length] = vec2[k]; 
        }
    }
    var contenido = document.createTextNode( "La Union es: "+"{" + vec1 + "}");
    enlace.appendChild(contenido);
    nueva.appendChild(enlace);
    if(indice == 0){
        listaalfa.appendChild(nueva);
    }else{
        listalengua.appendChild(nueva);
    } 
}
function diferencia(indice){
    if(indice == 0){
        var aux = cajaalfa1.value,
            aux1 = cajaalfa2.value;
    }else{
        var aux = cajalengua1.value,
            aux1 = cajalengua2.value;
    }
    var nueva = document.createElement("li"),
        enlace = document.createElement("a");
    aux = aux.slice(1,aux.length-1); //elimina el primero y el ultimo
    aux1 = aux1.slice(1,aux1.length-1); //elimina el primero y el ultimo
    var coma = ",", vacio = 0, vacio1 = 0;
    aux = aux.split(coma); 
    aux1 = aux1.split(coma);
    var vec2 =[];
    var vec1 = [];
    var resul = [];
    var resul2 = [];
    var cont = 0, cont1 = 0;
    for(var i =0;i<aux.length;i++){
        vec1[i] = aux[i];
    }
    for(var j =0; j < aux1.length;j++){
        vec2[j]=aux1[j];
    }
    for(var p = 0; p < vec1.length;p++){
        if(vec1[p] == "&"){
            vacio = 1;
            vec1.splice(p,1);
            break;
        }
    }
    for(var p = 0; p < vec2.length;p++){
        if(vec2[p] == "&"){
            vacio1 = 1;
            vec2.splice(p,1);
            break;
        }
    }
    for(var k = 0; k < vec1.length;k++){
        var c;
        for(var l=0;l< vec2.length;l++){
            if(vec1[k] == vec2[l]){
                c = 1;
                break;
            }else{
                c = 0;
            }
        }
        if(c != 1){
            resul[cont] = vec1[k];
            cont++;
        }
    }
    for(var k = 0; k < vec2.length;k++){
        var c;
        for(var l=0;l< vec1.length;l++){
            if(vec2[k] == vec1[l]){
                c = 1;
                break;
            }else{
                c = 0;
            }
        }
        if(c != 1){
            resul2[cont1] = vec2[k];
            cont1++;
        }
    }
    var contenido = document.createTextNode("La Diferencia de A → B es: "+"{" + resul + "} " + "La Diferencia de B → A es:" + "{" + resul2 + "} " );
    enlace.appendChild(contenido);
    nueva.appendChild(enlace);
    if(indice == 0){
        listaalfa.appendChild(nueva);
        
    }else{
        listalengua.appendChild(nueva);
    } 
}
function interseccion(indice){
    if(indice == 0){
        var aux = cajaalfa1.value,
            aux1 = cajaalfa2.value;
    }else{
        var aux = cajalengua1.value,
            aux1 = cajalengua2.value;
    }
    var nueva = document.createElement("li"),
        enlace = document.createElement("a");

    aux = aux.slice(1,aux.length-1);
    aux1 = aux1.slice(1,aux1.length-1);
    var coma = ",", vacio1 = 0,vacio = 0;
    aux = aux.split(coma);
    aux1 = aux1.split(coma);
    var vec2 =[];
    var vec1 = [];
    var resul = [];
    var cont = 0;
    for(var i =0;i<aux.length;i++){
        vec1[i] = aux[i];
    }
    for(var j =0; j < aux1.length;j++){
        vec2[j]=aux1[j];
    }
    for(var p = 0; p < vec1.length;p++){
        if(vec1[p] == "&"){
            vacio = 1;
            vec1.splice(p,1);
            break;
        }
    }
    for(var p = 0; p < vec2.length;p++){
        if(vec2[p] == "&"){
            vacio1 = 1;
            vec2.splice(p,1);
            break;
        }
    }
    for(var k = 0; k < vec1.length;k++){
        var c;
        for(var l=0;l< vec2.length;l++){
            if(vec1[k] == vec2[l]){
                c = 1;
                break;
            }else{
                c = 0;
            }
        }
        if(c == 1){
            resul[cont] = vec1[k];
            cont++;
        }
    }
    var contenido = document.createTextNode("La Intersecion es: " + "{" + resul + "}");
    enlace.appendChild(contenido);
    nueva.appendChild(enlace);
    if(indice == 0){
        listaalfa.appendChild(nueva);
        
    }else{
        listalengua.appendChild(nueva);
    }
}
function concatenar(){
    var aux = cajalengua1.value,
        aux1 = cajalengua2.value,
        nueva = document.createElement("li"),
        enlace = document.createElement("a");
    aux = aux.slice(1,aux.length-1);
    aux1 = aux1.slice(1,aux1.length-1);
    var coma = ",", vacio = 0, vacio =0;
    aux = aux.split(coma);
    aux1 = aux1.split(coma);
    var vec2 =[];
    var vec1 = [];
    var resul = [];
    var cont = 0;
    for(var i =0;i<aux.length;i++){
        vec1[i] = aux[i];
    }
    for(var j =0; j < aux1.length;j++){
        vec2[j]=aux1[j];
    }
    for(var p = 0; p < vec1.length;p++){
        if(vec1[p] == "&"){
            vacio = 1;
            vec1.splice(p,1);
            break;
        }
    }
    for(var p = 0; p < vec2.length;p++){
        if(vec2[p] == "&"){
            vacio1 = 1;
            vec2.splice(p,1);
            break;
        }
    }
    if(vec1.length <=0){
        var contenido = document.createTextNode("La Concatenacion es: " + "{" + vec2 + "}");
    }else if(vec2.length <= 0){
        var contenido = document.createTextNode("La Concatenacion es: " + "{" + vec1 + "}");
    }else{
        for(var i = 0; i < vec1.length;i++){
            for(var j = 0; j < vec2.length;j++){
                resul[cont] = vec1[i] + vec2[j];
                cont++;
            }
        }
        var contenido = document.createTextNode("La Concatenacion es: " + "{" + resul + "}");
    }
    enlace.appendChild(contenido);
    nueva.appendChild(enlace);
    listalengua.appendChild(nueva);
}
function cardinalidad(indice){
    if(indice == 0){
        var aux = cajalengua1.value,
            aux1 = cajalengua2.value;
        aux = aux.slice(1,aux.length-1);
        aux1 = aux1.slice(1,aux1.length-1);
        var coma = ",", vacio1 = 0,vacio = 0;
        aux = aux.split(coma);
        aux1 = aux1.split(coma);
        var vec2 =[];
        var vec1 = [];
        for(var i =0;i<aux.length;i++){
            vec1[i] = aux[i];
        }
        for(var j =0; j < aux1.length;j++){
            vec2[j]=aux1[j];
        }
        for(var p = 0; p < vec1.length;p++){
            if(vec1[p] == "&"){
                vacio = 1;
                vec1.splice(p,1);
                break;
            }
        }
        for(var p = 0; p < vec2.length;p++){
            if(vec2[p] == "&"){
                vacio1 = 1;
                vec2.splice(p,1);
                break;
            }
        }
        if((vacio == 1)&&(vacio1 == 1)){
            var contenido = document.createTextNode("La Cardinalidad de A es: " + (vec1.length+1) + " La Cardinalidad de B es: "+(vec2.length+1));
        }else if(vacio==1){
            var contenido = document.createTextNode("La Cardinalidad de A es: " + (vec1.length+1) + " La Cardinalidad de B es: "+vec2.length);
        }else{
            var contenido = document.createTextNode("La Cardinalidad de A es: " + vec1.length + " La Cardinalidad de B es: "+(vec2.length+1));
        }
        
    }else{
        var aux = cajapala.value;
        aux = aux.slice(1,aux.length-1);
        var contenido = document.createTextNode("La Cardinalidad es: " + aux.length);
    }
    var nueva = document.createElement("li"),
        enlace = document.createElement("a"); 
    enlace.appendChild(contenido);
    nueva.appendChild(enlace);
    if(indice == 0){
        listalengua.appendChild(nueva);
        
    }else{
        listapala.appendChild(nueva);
    }
}
function inversa(indice){
    if(indice ==0){
        var aux = cajalengua1.value,
            aux1 = cajalengua2.value;
        aux = aux.slice(1,aux.length-1);
        aux1 = aux1.slice(1,aux1.length-1);
        var invertida = "", invertida1 = "";
        for(var i =aux.length;i>=0;i--){
            invertida = invertida + aux.charAt(i);
        }
        for(var j =aux1.length; j >=0;j--){
            invertida1 = invertida1 + aux1.charAt(j);
        }
        var coma = ",";
        invertida = invertida.split(coma);
        invertida1 = invertida1.split(coma);
        var vec2 =[];
        var vec1 = [];
        var resul = [];
        var resul2 = [];
        var cont = 0, cont1 = 0, a=0, b=0;
        for(var i =0; i < invertida.length; i++){
            vec1[cont]= invertida[i];
            cont++;
        }
        for(var j =0; j < invertida1.length; j++){
            vec2[cont1] = invertida1[j];
            cont1++;
        }
        for(var i = vec1.length-1; i >=0;i--){
            resul[a] = vec1[i];
            a++;
        }
        for(var j = vec2.length-1; j >=0;j--){
            resul2[b] = vec2[j];
            b++;
        }
        var contenido = document.createTextNode("La Inversa de A es: "+ "{"+ resul + "}"+" La Inversa de B es: "+"{"+resul2+"}");
    }else{
        var aux = cajapala.value;
        aux = aux.slice(1,aux.length-1);
        var vec1 = [];
        var resul = [];
        var invertida = "";
        var cont = 0, cont1 = 0;
        for(var i =aux.length;i>=0;i--){
            invertida = invertida + aux.charAt(i);
        }
        var coma = ",";
        invertida = invertida.split(coma);
        for(var i =0; i < invertida.length; i++){
            vec1[cont]= invertida[i];
            cont++;
        }
        for(var i = vec1.length-1; i >=0;i--){
            resul[cont1] = vec1[i];
            cont1++;
        }
        var contenido = document.createTextNode("La Inversa es: " + "{" + resul +"}");
    }
    var nueva = document.createElement("li"),
        enlace = document.createElement("a"); 
    enlace.appendChild(contenido);
    nueva.appendChild(enlace);
    if(indice == 0){
        listalengua.appendChild(nueva);
        
    }else{
        listapala.appendChild(nueva);
    }
}
function potencia(indice){
    if(indice==0){
        var aux = cajalengua1.value;
    }else{
        var aux = cajalengua2.value;
    }
    var potencia = cajapotencia.value;
    aux = aux.slice(1,aux.length-1);
    var coma =",", vec1 = [], vacio = 0;
    aux = aux.split(coma);
    for(var i = 0; i < aux.length;i++){
        vec1[i]=aux[i];
    }
    for(var p = 0; p < vec1.length;p++){
        if(vec1[p] == "&"){
            vacio = 1;
            vec1.splice(p,1);
            break;
        }
    }
    var result = [], vec2 = [];
    for(var i = 0; i < vec1.length;i++){
        vec2[i] = vec1[i];
    }
    if(potencia>1){
        var  cont = 0;
        for(var j = 1; j < potencia;j++){
            for(var i = 0; i < vec1.length;i++){
                for(var k = 0; k < vec2.length;k++){
                    result.push(vec1[i] + vec2[k]);
                }
                
            }
            for(var l = 0; l < result.length;l++){
                vec2[l] = result[l];
            }
        }
    }
    var nueva = document.createElement("li"),
        enlace = document.createElement("a");
    if(indice == 0){
        if(vacio == 1){
            var contenido = document.createTextNode( "La Potencia del Lenguaje 1 es: "+"{"+ "&,"+ vec1 + "," + result + "}");
        }else{
            var contenido = document.createTextNode( "La Potencia del Lenguaje 1 es: "+"{"+ vec1 +"," + result + "}");
        }
        enlace.appendChild(contenido);
        nueva.appendChild(enlace);
        listalengua.appendChild(nueva);
    }else{
        if(vacio == 1){
            var contenido = document.createTextNode( "La Potencia del Lenguaje 2 es: "+"{"+ "&,"+ result + "}");
        }else{
            var contenido = document.createTextNode( "La Potencia del Lenguaje 2 es: "+"{" + result + "}");
        }
        enlace.appendChild(contenido);
        nueva.appendChild(enlace);
        listalengua.appendChild(nueva);
    }
}
botonPotencia.addEventListener("click",bajarPotencia);