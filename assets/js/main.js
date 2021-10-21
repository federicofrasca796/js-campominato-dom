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
const start_h1 = document.querySelector('.game_container > h1');

//l'utente indica un livello di difficoltà clickando un lvl dal dropdown menu.
let numOfCells;

selectEl.addEventListener('change', function(){
    //cancello la scritta placeholder
    start_h1.style.display = "none";

    //attiva lo script solo alla selezione di 'lvl.1'
    if (this.value == '1'){
        console.log('click lvl1');
        //per il lvl1 il numero di celle sarà di 100. (Matrice 10x10)
        const nCells = 100;
        //le celle per ogni riga saranno la radice quadrata del n di celle totali
        const nCellsRow = Math.sqrt(nCells);
        
    
        // funzione che genera il numero di celle in base al livello
        
        //creo div.cell
        const divCell = document.createElement('div');
        //attribuisco la classe .cell
        divCell.className = 'cell';
        //inserisco il rispettivo numero indice all'interno della cella
        divCell.append(1);
        console.log(divCell);

        //attribuisco a .cell una width e height variabile in base al lvl
        divCell.style.cssText = `
        width: calc(100% / ${nCellsRow}); 
        height: calc(100% / ${nCellsRow});`

        //inserisco la cella dentro .game_container
        gameContainer.append(divCell);
    }
})
