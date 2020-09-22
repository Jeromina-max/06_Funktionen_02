
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check
3. Fkt. Grundrechenarten :: check
4. Ausgabe in Konsole :: check
*/

//Modul: Übergabe der Daten an +/-/*/: Tests:
rechner(12,4,"+");
rechner(12,4,"-");
rechner(12,4,"*");
rechner(12,4,":");
rechner(12,0,":");
rechner(12,0,"irgendwas");

function rechner(a,b,op) {
  
    switch (op) {
        case "+": // Addition
            ausgabe(addieren(a,b));
            break;
        case "-": // Subtraktion
            ausgabe(subtrahieren(a,b));
        break;
        case "*": // Multiplikation
            ausgabe(multiplizieren(a,b));
        break;
        case ":": // Division
            ausgabe(dividieren(a,b));
        break;
        default:
            ausgabe("Bitte Operator korrigieren!")
            break;
    }
}

// Modul: Division | Test:
//ausgabe(dividieren(4, 2));
//ausgabe(dividieren(4, 0));
function dividieren(a,b) {
    if (b == 0) { // div durch 0 verhindern
        return "Keine Division durch 0!";
    }
    return a / b;
    console.log("hi"); // unreachable code
}

// Modul: Multiplikation | Test:
//ausgabe(multiplizieren(2, 4));
function multiplizieren(a,b) {
    return a * b;
} 

// Modul: Subtraktion | Test:
//ausgabe(subtrahieren(5, 3));
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Addition | Test:
//ausgabe(addieren(2, 5));
function addieren(a,b) { 
   return a + b;
}

// Modul: Konsolenausgabe |  Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
