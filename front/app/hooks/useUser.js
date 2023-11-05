import { useState } from 'react';
import { Services } from '../services';

export const useUser = () => {
    const [id, setId] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [profil_img_url, setProfil_img_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUser = (userId, signal) => {        
        return Services.UserService.getById(userId, signal)
        .then(response => {
            fillUser(response.user);
            setIsDisabled(false);
        });
    }

    const createUser = signal => {
        const payload = {
            username,
		email,
		password,
		profil_img_url,
		
        };

        return Services.UserService.create(JSON.stringify(payload), signal);
    }
    const updateUser = (userId, signal) => {
        const payload = {
            username,
		email,
		password,
		profil_img_url,
		
        };

        return Services.UserService.update(userId, JSON.stringify(payload), signal);
    }
    const deleteUser = (userId, signal) => {
        return Services.UserService.destroy(userId, signal);
    }
    const fillUser = (user) => {
        setId(user.id);
        setUsername(user.username ?? '');
		setEmail(user.email ?? '');
		setPassword(user.password ?? '');
		setProfil_img_url(user.profil_img_url ?? '');
		
    }
    const emptyUser = () => {
        setId('');
        setUsername('');
		setEmail('');
		setPassword('');
		setProfil_img_url('');
		
    }

    return {
        id,
        username,
		email,
		password,
		profil_img_url,
		
        errors,
        isDisabled,
        setUsername,
		setEmail,
		setPassword,
		setProfil_img_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getUser,
        createUser,
        updateUser,
        deleteUser,
        fillUser,
        emptyUser
    };
}