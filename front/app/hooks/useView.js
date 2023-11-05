import { useState } from 'react';
import { Services } from '../services';

export const useView = () => {
    const [id, setId] = useState('');
	const [model3d_id, setModel3d_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getView = (viewId, signal) => {        
        return Services.ViewService.getById(viewId, signal)
        .then(response => {
            fillView(response.view);
            setIsDisabled(false);
        });
    }

    const createView = signal => {
        const payload = {
            model3d_id,
		
        };

        return Services.ViewService.create(JSON.stringify(payload), signal);
    }
    const updateView = (viewId, signal) => {
        const payload = {
            model3d_id,
		
        };

        return Services.ViewService.update(viewId, JSON.stringify(payload), signal);
    }
    const deleteView = (viewId, signal) => {
        return Services.ViewService.destroy(viewId, signal);
    }
    const fillView = (view) => {
        setId(view.id);
        setModel3d_id(view.model3d_id ?? '');
		
    }
    const emptyView = () => {
        setId('');
        setModel3d_id('');
		
    }

    return {
        id,
        model3d_id,
		
        errors,
        isDisabled,
        setModel3d_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getView,
        createView,
        updateView,
        deleteView,
        fillView,
        emptyView
    };
}