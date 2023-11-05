'use client'

import { Hooks } from "@/app/hooks"; 
import { Services } from "@/app/services";
import Image from "next/image";
import { useEffect } from "react";

export default function Model3dShowPage(props: any) {
    let aborController = new AbortController();

    const { id } = props.params

    const useModel3d = Hooks.useModel3d();
    const useView = Hooks.useView();

    const fileImg = (useModel3d.file_url === '' || !useModel3d.file_url) ? 
    "http://via.placeholder.com/500x500" : useModel3d.file_url;

    useEffect(() => {
        const func = async () => {
            useModel3d.setIsDisabled(true);

            try {
                const payload = {model3d_id: id};

                await useModel3d.getModel3d(id, aborController.signal);
                await Services.ViewService.create(JSON.stringify(payload), 
                aborController.signal);
            }catch {
                useModel3d.setIsDisabled(false);
            }
        }

        func();
    }, [])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Models 3D</h6>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card mx-auto" style={{maxWidth: "800px"}}>
                        <div className="card-header">
                            <h3>{useModel3d.name}</h3>
                        </div>
                        <div className="card-body tx-center">
                            <Image src={fileImg} loader={() => fileImg} 
                            unoptimized={true} alt='' width={800} height={800} 
                            style={{width:'100%', height:'auto'}}/>
                            <p>{useModel3d.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}