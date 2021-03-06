namespace Aufgabe6 {
    export class snow extends MovingObjects{ //Subklasse (snow) ist automatisch auch eine Instanz der Superklasse (Moving objects)
                                             //extends = Vererbung
    
        constructor (_x: number, _y: number) {  //constructor greift auf Superklasse,da "super"
            super(_x,_y);
        }
        
        move(): void { //

            if (this.y > 600) { //wenn Schneeflocken aus dem Bild fallen fangen diese wieder oben an
                this.y = 0;
            }

            this.y += Math.random(); //y wird erweitert um random

            this.draw(); //greift auf das Object wo ich grade bin 
        }
        draw(): void {
            crc2.fillStyle = "#FFFFFF";
        crc2.beginPath();
        crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
        crc2.fill();
        }
    }
}