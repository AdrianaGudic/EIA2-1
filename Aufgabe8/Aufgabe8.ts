namespace Aufgabe8 {
    window.addEventListener("load", init);

    
    function init(): void {
        var Zahl: string = prompt("Bitte gewünschte Anzahl zwischen 10 und 100 angeben"); 
        var ZahlNumb: number = parseInt(Zahl); //die Funktion ParseInt wandelt einen String in eine Zahl um
        
        var Breite: string = prompt("Bitte gewünschte Breite angeben");
        var BreiteNumb: number = parseInt(Breite); 
        
        var Höhe: string = prompt("Bitte gewünschte Höhe angeben");
        var HöheNumb: number = parseInt(Höhe); 
        
        if (ZahlNumb >= 10 && ZahlNumb <= 100) { //Prüft ob die Zahl zwischen 10 und 100 ist
            for (var i: number = 0; i < ZahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", BreiteNumb, HöheNumb); //x,y und farbe an die Zeichenfunktion übergeben
            }
        } else {
            window.alert("Die Eingabe ist falsch"); //Warnung bei falscher Eingabe und neu laden der Funktion
            init();

      }
}
    
    
 //Funktion Kästchen Zeichnen
    function drawRect (_x: number, _y: number, _color: string, _width: number, _height: number): void {

        let div: HTMLDivElement = document.createElement("div"); //div erstellen
        div.style.width = _width.toString(); //Returns a String of an object
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString(); //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color; //zufällige Farbe
        document.body.appendChild(div); //html ELement in den Code einfügen lassen
    }
}

