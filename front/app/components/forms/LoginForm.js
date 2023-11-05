'use client'

import Link from "next/link"

export function LoginForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input disabled={props.isDisabled} type="email" className="form-control" 
                    value={props.useUser.email} placeholder="Email" onChange={e => 
                    props.useUser.setEmail(e.target.value)}/>            </div>
            <div className="form-group mg-b-50">
                <input disabled={props.isDisabled} type="password" className="form-control" 
                    value={props.useUser.password} onChange={e => 
                    props.useUser.setPassword(e.target.value)} placeholder="Mot de passe" />
            </div>

            <button className="btn btn-primary btn-block btn-signin" disabled={props.isDisabled}
            onSubmit={props.handleSubmit}>
                {props.isDisabled ? "Chargement..." : "Connexion"}
            </button>

            <p className="mg-t-40 mg-b-0">Vous n&amps;avez pas de compte ?
                <Link href="/inscription"> Inscrivez-vous</Link>
            </p>
        </form>
    )
}