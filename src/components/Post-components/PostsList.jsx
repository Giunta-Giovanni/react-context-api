// importiamo i Componenti
import PostCard from "./PostCard";

// importiamo la libreria axios per effettuare le chiamate Api
import axios from "axios";

// endpoint
const endpoint = 'http://localhost:3000/posts';

export default function PostList() {

    // funzione di rimozione dei post
    function removeArticols(id) {

        // filter sull'array
        const updateArticols = articols.filter(articol => {
            return articol.id !== id
        })

        // chiamata ad api sulla rotta di delete con parametro dinamico id
        axios.delete(`${endpoint}/${id}`)
            .then(res =>
                // aggiorna gli articoli 
                console.log(res),
                // lo gestiamo anche nel front end
                setArticols(updateArticols)
            )

            .catch((error) => {
                console.error("Errore durante il recupero dei dati:", error);
            });
    }

    return (

        <section className="section-articoli">
            {/* contenitore esterno */}
            <div className="container">

                {/* PARTE OUTPUT ARTICOLI*/}
                {/* condizione di output */}
                {articols.length === 0 ?

                    // CONDIZIONE VERA
                    <h2 className="m-3">Non ci sono Articoli</h2>
                    // Altrimenti
                    :
                    // CONDIZIONE FALSA
                    <div className="box-articoli">

                        {/* effettuiamo map su articols che è il nostro array dinamico */}
                        {articols.map(articolo => (<PostCard articolo={articolo} />))}
                    </div>
                }


            </div>
        </section >
    )

}