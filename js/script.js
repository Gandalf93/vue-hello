// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const messaggio = new Vue(
    {
      el : '#frase',
      data : {
          message: 'Ciao sono Piero, stai molto attento'
      }
    }
);