import { pedirCarta} from "./pedirCarta";
import { valorCarta } from "./valorCarta";
import {crerCartaHtml} from "./crearCartaHtml";
// turno de la computadora

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHtml elemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento para mostrar las cartas
 * @param {Array<string>} deck Necesita el deck para pedir carta
 */



export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck ) => {

    if (!puntosMinimos) {
        throw new Error("Puntos minimos son necesarios");}
    if (!puntosHTML) {
        throw new Error("Puntos Html son necesarios");}

    if (!deck) {
        throw new Error("El deck es necesario");}
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">


        const imgCarta = crerCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}