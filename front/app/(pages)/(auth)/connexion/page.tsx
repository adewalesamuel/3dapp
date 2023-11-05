'use client'

import { Hooks } from '../../../hooks'
import { Components } from "../../../components";

import { useState } from "react";
import { Utils } from "../../..//utils";
import { Services } from "../../../services";
import { useRouter } from 'next/navigation';

export default function LoginPage(){
    const aborController = new AbortController();

    const useUser = Hooks.useUser();
    const router = useRouter();

    const [errorMessages, setErrorMessages] = useState<String[]>([]); 

    const handleRegisterSubmit = async (e: Event) => {
        e.preventDefault();
        setErrorMessages([]);
        
        useUser.setIsDisabled(true);
        
        try {
            const payload = {
                email: useUser.email,
                password: useUser.password,
            };

            const response = await Services.AuthService.login(
                JSON.stringify(payload), aborController.signal)
    
            Utils.Auth.setUser(response.user);
            Utils.Auth.setSessionToken(response.token);

            router.push('/');
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
                    <h2 className="signin-title-primary">Connexion !</h2>
                    <h3 className="signin-title-secondary">Connectez vous à votre compte.</h3>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.LoginForm useUser={useUser} handleSubmit={handleRegisterSubmit}
                    isDisabled={useUser.isDisabled}/>
                </div>

            </div>
        </>
    )
}