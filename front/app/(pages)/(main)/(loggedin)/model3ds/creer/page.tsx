'use client'

import { useCallback, useEffect, useState } from "react";
import { Components } from "@/app/components";
import { Hooks } from "@/app/hooks";
import { useRouter } from "next/navigation";

export default function Model3dCreatePage() {
    let abortController = new AbortController();

    const router = useRouter();

    const useModel3d = Hooks.useModel3d();
    const [errorMessages, setErrorMessages] = useState<String[]>([]);

    const handleFormSubmit = async (e: Event) => {
        e.preventDefault();
        useModel3d.setIsDisabled(true);
        setErrorMessages([]);

        try {
            await useModel3d.createModel3d(abortController.signal);
            router.push('/');
        } catch (error: any) {
            if ('messages' in error)
                error.messages.then((messages: String[]) => setErrorMessages(messages));
        }finally{useModel3d.setIsDisabled(true);}
    }

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Utilisateurs</h6>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card card-table mb-4 p-4">
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <Components.Model3dForm useModel3d={useModel3d} 
                    handleFormSubmit={handleFormSubmit} isDisabled={useModel3d.isDisabled}/>
                    </div>
                </div>
            </div>
        </>
    )
}