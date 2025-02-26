
// importiamo Link
import { Link, } from "react-router-dom";

export default function PostCard(props) {

    {/* singolo articolo*/ } {

        <div key={articolo.id} className="toast d-block">

            {/* contenitore header */}
            <div className="toast-header">
                {/* link in single post page */}
                <div className="post-zoom">
                    <Link to={`/posts/post/${articolo.id}`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </div>
                {/* titolo */}
                <strong className="me-auto">{articolo.title}</strong>

                {/* condizione per badge pubblicato*/}
                {articolo.pubblicato ?
                    // se è vero badge verde
                    <span className="badge text-bg-success mx-2 p-2">
                        Pubblicato
                    </span>
                    // altrimento
                    :
                    // se è falso badge rosso
                    <span className="badge text-bg-danger mx-2 p-2">
                        Non pubblicato
                    </span>}

                {/* button delete */}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    // onclick con funzione inserita in una callback function per prevenire attivazione automatica
                    onClick={() => removeArticols(articolo.id)}
                >

                </button>
            </div>

            {/* contenitore corpo */}
            <div className="toast-body">

                {/* contenuto */}
                <p>{articolo.content}</p>
                {/* immagine */}
                <div className="box-articolo-image">
                    <img src={articolo.image || null} alt={articolo.title} />
                </div>


                {/* categoria */}
                <ul className="category-list">
                    {articolo.tags?.map((tag, index) => (
                        <li key={index}>
                            <a href="#">{tag}</a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    }
}