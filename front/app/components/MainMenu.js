'use client'

import Link from "next/link";

export function MainMenu(props){
    return (
        <div className="slim-navbar">
            <div className="container">
                <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" href="/">
                    <i className="icon ion-ios-home-outline"></i>
                    <span>Accueil</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/utilisateurs">
                    <i className="icon ion-ios-book-outline"></i>
                    <span>Utilisateurs</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" href="/model3ds/creer">
                    <i className="icon ion-ios-gear-outline"></i>
                    <span>Ajouter votre model 3d</span>
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    )
}