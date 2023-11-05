'use client'

import { Utils } from "@/app/utils";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Authenticated(props: any) {
    const router = useRouter();

    useEffect(() => {
        if (!Utils.Auth.isLoggedIn())
            router.replace('/connexion');
    }, []);

    if (!Utils.Auth.isLoggedIn()) return null;
    return (
        <>{props.children}</>
    )
}