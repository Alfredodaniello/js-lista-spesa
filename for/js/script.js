/*
Data una lista della spesa:
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while 
*/

alert("Ecco la tua lista della spesa!!!");

//ottengo il mio array

const list = ['Latte','Cacao','Insalata','Carote','Pomodori','Piatti pronti'];
//seleziono il mio div 

const container = document.querySelector("#list");

//scorro il mio array e per ogni elemento creo un nuovo div, e poi ci aggiungo i vari elementi
for (let i = 0; i < list.length; i++) {
    let elementsList = list[i];
    const divList = document.createElement("div");
    container.append(divList)
    divList.append(elementsList)
}