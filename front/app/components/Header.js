'use client'

import logo from '../assets/img/logo.png';
import { Utils } from '../utils';
import { Dom } from '../utils/Dom';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const AuthBtn = dynamic(() => import('../components/AuthBtn'), {ssr: false});

export function Header(props) {
    const user = Utils.Auth.getUser() ?? {};
    const userProfilUrl = (user.profil_img_url === '' || !user.profil_img_url) ? 
    "http://via.placeholder.com/500x500" : user.profil_img_url;

    return (
        <div className="slim-header">
            <div className="container">
                <div className="slim-header-left">
                    <h2 className="slim-logo">
                        <a href="index.html"><Image width={80} src={logo} 
                        height={40} alt="" priority={true} /></a>
                    </h2>
                </div>
                <div className="slim-header-right">
                    <div className="dropdown dropdown-c">
                        <span className="logged-user" onClick={e => 
                            Dom.toggleElement('#dropdownMenu')} role='button'>
                            <Image width={40} height={40} src={userProfilUrl} 
                            loader={({ src, width }) => { return src + "?w=" + width }}
                            alt='' style={{objectFit: 'cover'}}/>
                            <span>{user.firstname} {user.lastname}</span>
                            <i className="fa fa-angle-down"></i>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right" id="dropdownMenu">
                            <div className="nav">
                                <AuthBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}