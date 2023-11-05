'use client'

import { useCallback, useEffect, useState } from "react";
import { Services } from "@/app/services";
import { Components } from "@/app/components";
import { Utils } from "@/app/utils";
import Link from "next/link";

export default function UserListPage() {
    let abortController = new AbortController();

    const tableAttributes = {
        'username': {},
        'email': {},
        'created_at': {}
    }
    const tableActions = [];

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {users} = await Services.UserService.getAll(abortController.signal);

            setUsers(users);
        } catch (error) {
            console.log(error);
        } finally {setIsLoading(false)};
    }, []);

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
                <h6 className="slim-pagetitle">Utilisateurs</h6>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card card-table mb-4">
                        <div className="table-responsive">
                            <Components.Table controllers={{}} tableAttributes={tableAttributes} 
                            tableActions={[]} 
                            tableData={users}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}