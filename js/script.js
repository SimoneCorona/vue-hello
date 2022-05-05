// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
                saluta : 'Ciriciao!',
                arale: 'https://tse3.mm.bing.net/th?id=OIP.tYpdY-hR79upFSvWz0aiVgHaEK&pid=Api&P=0&w=260&h=146',
        }
    }
);