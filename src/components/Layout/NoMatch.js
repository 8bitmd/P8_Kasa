import {Link} from "react-router-dom";
import "./nomatch.css"
import DocumentTitle from "../DocumentTitle";

export default function NoMatch() {
    DocumentTitle("Kasa - 404")
    return (
        <div className="container_404">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}