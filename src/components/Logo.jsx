import { Link } from "react-router-dom"
export default function Logo() {
    return (
        <div className="box-logo">
            <Link to={"/"}>
                <img src="./route.svg" alt="route-logo" />
            </Link>

        </div>
    )
}