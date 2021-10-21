/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su ogni cella:

- se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
- altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando:

- il giocatore clicca su una bomba
- o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */


//DOM elements
const selectEl = document.getElementById('lvl_choice');

const gameContainer = document.querySelector('.game_container');

//l'utente indica un livello di difficoltà clickando un lvl dal dropdown menu.
selectEl.addEventListener('change', function(){
    //cancello la scritta placeholder
    gameContainer.innerHTML = '';
    //attiva lo script solo alla selezione di 'lvl.1'
    if (this.value == '1'){
        //per il lvl1 il numero di celle sarà di 100. (Matrice 10x10)
        const n_cells = 100;
        //le celle per ogni riga saranno la radice quadrata del n di celle totali
        const n_cells_row = Math.sqrt(n_cells);
        
    
        // funzione che genera il numero di celle in base al livello
         generateGrid (n_cells, n_cells_row);
    } //else if (x2: lvl2 e lvl3)

    //seleziono gli elementi cella
    const cellsEl = gameContainer.getElementsByClassName('cell');
    //rendo clickabile ogni elemento cella
    for (let i = 0; i < cellsEl.length; i++) {
        cellsEl[i].addEventListener('click', function(){
            this.style.backgroundColor = "#444";
        });
    }

})













//////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////

/**
 * #### Genera una matrice quadrata con celle quadrate e numerate in sequenza.
 * @param {number} nCells - Numero di celle totali
 * @param {number} nCellsRow - Numero di celle per riga
 */
function generateGrid (nCells, nCellsRow) {
    //ciclo per creare tante celle quante servono per livello.
    for (let i = 1; i <= nCells ; i++) {
        //creo div.cell
        const divCell = document.createElement('div');
        //attribuisco la classe .cell
        divCell.className = 'cell';
        //inserisco il rispettivo numero indice all'interno della cella
        divCell.append(i);

        //attribuisco a .cell una width e height variabile in base al lvl
        divCell.style.cssText = `
        width: calc(100% / ${nCellsRow}); 
        height: calc(100% / ${nCellsRow});`

        //inserisco la cella dentro .game_container
        gameContainer.append(divCell);
    }


}