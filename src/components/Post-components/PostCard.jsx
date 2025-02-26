import { Link } from "react-router-dom";


export default function PostCard(props) {
    console.log(props);
    // Destructuring the props object
    const { articolo, removeArticols } = props;

    return (
        // Single article
        <div className="toast d-block">
            {/* Header container */}
            <div className="toast-header">
                {/* Link to single post page */}
                <div className="post-zoom">
                    <Link to={`/posts/post/${articolo.id}`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </div>
                {/* Title */}
                <strong className="me-auto">{articolo.title}</strong>

                {/* Conditional badge for 'published' */}
                {articolo.pubblicato ? (
                    // If true, green badge
                    <span className="badge text-bg-success mx-2 p-2">
                        Pubblicato
                    </span>
                ) : (
                    // If false, red badge
                    <span className="badge text-bg-danger mx-2 p-2">
                        Non pubblicato
                    </span>
                )}

                {/* Delete button */}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    onClick={() => removeArticols(articolo.id)}
                ></button>
            </div>

            {/* Body container */}
            <div className="toast-body">
                {/* Content */}
                <p>{articolo.content}</p>
                {/* Image */}
                <div className="box-articolo-image">
                    <img src={articolo.image || null} alt={articolo.title} />
                </div>

                {/* Categories */}
                <ul className="category-list">
                    {articolo.tags?.map((tag, index) => (
                        <li key={index}>
                            <a href="#">{tag}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}