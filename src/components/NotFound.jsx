import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Pagina non trovata</h1>
            <p>La pagina che stai cercando non esiste.</p>
            <Link to="/" className="btn btn-primary">Torna alla Home</Link>
        </div>
    )
}