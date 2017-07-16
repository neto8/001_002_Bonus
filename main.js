//T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E,
var calculaDNI = function(numeroDNI) {

    var tablaLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var letra = "";
    console.log("El numero a validar es " + numeroDNI + " y tiene " + numeroDNI.toString().length);
    if (numeroDNI.toString().length == 8) {
        if (typeof(numeroDNI) != "string") {
            var indice = numeroDNI % 23
            letra = tablaLetras[indice];
            return numeroDNI + letra;
        } else {
            console.log("DNI Invalido, debe ser solo numeros");
        }

    } else {
        var completo = "00000000";
        var nuevo = "";
        var diferencia = completo.length - numeroDNI.toString().length
        for (var re = 0; re <= completo.length; re++) {

            if (re >= diferencia) {

                nuevo = nuevo + numeroDNI.toString().charAt(re - diferencia);
            } else {
                nuevo = nuevo + completo.toString().charAt(re)
            }

        }
        console.log("DNI Invalido, debe ser de 8 numeros, se compelta con 0 y queda " + nuevo);
        return nuevo;
    }

}

//Numero Valido
console.log(calculaDNI(12312312));
//Numero Invalido
console.log(calculaDNI(1231231));
console.log(calculaDNI("1231231a"));
