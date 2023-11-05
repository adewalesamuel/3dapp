'use client'

import { Components } from '../../components';
import { useEffect } from 'react';
import { Utils } from '../../utils';


export default function MainLayout(props){
    // useEffect(() => {
    //     if (!Utils.Auth.isLoggedIn()) 
    //         window.location.replace(('/connexion'));
    // })
    // if (!Utils.Auth.isLoggedIn()) return null;
    return (
        <>
            <Components.Header />
            <Components.MainMenu />
            <div className="slim-mainpanel">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </>
    )
}