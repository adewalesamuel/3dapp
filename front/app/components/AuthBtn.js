'use client'

import { useRouter } from "next/navigation"
import { Utils } from "../utils";

export default function AuthBtn(props) {
    const router = useRouter();

    const handleLogoutClick = e => {
        e.preventDefault();
        Utils.Auth.removeSessionToken();

        window.location.reload();
    }

    return( 
        <>
            {Utils.Auth.isLoggedIn() ? 
                <span className="nav-link text-danger" onClick={handleLogoutClick} role='button'>
                    <i className="icon ion-forward text-danger"></i> Se deconnecter
                </span>
            :
                <span onClick={() => router.push('/connexion')} className="nav-link">
                    <i className="icon ion-key"></i> Connexion
                </span>
            }
        </>
    )
}