import { useState } from 'react';
import { Services } from '../services';

export const useModel3d = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [description, setDescritpion] = useState('');
	const [file_url, setFile_img_url] = useState('');
	const [user_id, setUser_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getModel3d = (model3dId, signal) => {        
        return Services.Model3dService.getById(model3dId, signal)
        .then(response => {
            fillModel3d(response.model3d);
            setIsDisabled(false);
        });
    }

    const createModel3d = signal => {
        const payload = {
            name,
		description,
		file_url,
		user_id,
		
        };

        return Services.Model3dService.create(JSON.stringify(payload), signal);
    }
    const updateModel3d = (model3dId, signal) => {
        const payload = {
            name,
		description,
		file_url,
		user_id,
		
        };

        return Services.Model3dService.update(model3dId, JSON.stringify(payload), signal);
    }
    const deleteModel3d = (model3dId, signal) => {
        return Services.Model3dService.destroy(model3dId, signal);
    }
    const fillModel3d = (model3d) => {
        setId(model3d.id);
        setName(model3d.name ?? '');
		setDescritpion(model3d.description ?? '');
		setFile_img_url(model3d.file_url ?? '');
		setUser_id(model3d.user ?? '');
		
    }
    const emptyModel3d = () => {
        setId('');
        setName('');
		setDescritpion('');
		setFile_img_url('');
		setUser_id('');
		
    }

    return {
        id,
        name,
		description,
		file_url,
		user_id,
		
        errors,
        isDisabled,
        setName,
		setDescritpion,
		setFile_img_url,
		setUser_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getModel3d,
        createModel3d,
        updateModel3d,
        deleteModel3d,
        fillModel3d,
        emptyModel3d
    };
}