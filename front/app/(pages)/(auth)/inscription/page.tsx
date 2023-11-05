'use client'

import { Hooks } from '../../../hooks';
import { Components } from "../../../components";

import { useState } from "react";
import { Utils } from "../../..//utils";
import { Services } from "../../../services";
import { useRouter } from 'next/navigation';

export default function RegsiterPage(){
    const aborController = new AbortController();

    const useUser = Hooks.useUser();
    const router = useRouter();

    const [errorMessages, setErrorMessages] = useState<String[]>([]); 

    const handleRegisterSubmit = async (e: Event) => {        
        e.preventDefault();
        setErrorMessages([]);
        
        useUser.setIsDisabled(true);
        
        try {
            const response = await useUser.createUser(aborController.signal);
    
            Utils.Auth.setUser(response.user);
            Utils.Auth.setSessionToken(response.token);

            router.push('/connexion');
        } catch (error: any) {
            // Utils.Error.handleError(error);
            
            if ('messages' in error)
                error.messages.then((messages: String[]) => setErrorMessages(messages));
        } finally {
            useUser.setIsDisabled(false)
        }

    }

    return (
        <>
            <div className="signin-right mx-auto">
                <div className="signin-box">
                    <h2 className="signin-title-primary">Inscription !</h2>
                    <h3 className="signin-title-secondary">Créer un compte.</h3>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.UserForm useUser={useUser} handleFormSubmit={handleRegisterSubmit}
                    isDisabled={useUser.isDisabled}/>
                </div>

            </div>
        </>
    )
}