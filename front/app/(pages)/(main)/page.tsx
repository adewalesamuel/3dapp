'use client';

import { Utils } from "../../utils";
import { useCallback, useEffect, useState } from "react";
import { Services } from "../../services";
import { Components } from "@/app/components";

export default function HomePage() {
    let abortController = new AbortController();

    const user = Utils.Auth.getUser() ?? {};

    const [model3ds, setModel3ds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const { model3ds } = await Services.Model3dService.getAll(
                abortController.signal);
            
            setModel3ds(model3ds);
        } catch (error) {
            console.log(error);
        } finally {setIsLoading(false)};
    }, [])

    useEffect(() => {
      init();

      return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Models 3D</h6>
            </div>

            <div className="row row-sm">
                {model3ds.map((model3d, index) => {
                    return (
                        <div className="col-sm-6 col-lg-4 pb-2" key={index}>
                            <Components.UserCard model3d={model3d}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}