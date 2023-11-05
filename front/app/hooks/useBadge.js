import { useState } from 'react';
import { Services } from '../services';

export const useBadge = () => {
    const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [descritpion, setDescritpion] = useState('');
	const [img_url, setImg_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getBadge = (badgeId, signal) => {        
        return Services.BadgeService.getById(badgeId, signal)
        .then(response => {
            fillBadge(response.badge);
            setIsDisabled(false);
        });
    }

    const createBadge = signal => {
        const payload = {
            name,
		descritpion,
		img_url,
		
        };

        return Services.BadgeService.create(JSON.stringify(payload), signal);
    }
    const updateBadge = (badgeId, signal) => {
        const payload = {
            name,
		descritpion,
		img_url,
		
        };

        return Services.BadgeService.update(badgeId, JSON.stringify(payload), signal);
    }
    const deleteBadge = (badgeId, signal) => {
        return Services.BadgeService.destroy(badgeId, signal);
    }
    const fillBadge = (badge) => {
        setId(badge.id);
        setName(badge.name ?? '');
		setDescritpion(badge.descritpion ?? '');
		setImg_url(badge.img_url ?? '');
		
    }
    const emptyBadge = () => {
        setId('');
        setName('');
		setDescritpion('');
		setImg_url('');
		
    }

    return {
        id,
        name,
		descritpion,
		img_url,
		
        errors,
        isDisabled,
        setName,
		setDescritpion,
		setImg_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getBadge,
        createBadge,
        updateBadge,
        deleteBadge,
        fillBadge,
        emptyBadge
    };
}