import { useState } from 'react';
import { Services } from '../services';

export const useReward = () => {
    const [id, setId] = useState('');
	const [badge_id, setBadge_id] = useState('');
	const [user_id, setUser_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getReward = (rewardId, signal) => {        
        return Services.RewardService.getById(rewardId, signal)
        .then(response => {
            fillReward(response.reward);
            setIsDisabled(false);
        });
    }

    const createReward = signal => {
        const payload = {
            badge_id,
		user_id,
		
        };

        return Services.RewardService.create(JSON.stringify(payload), signal);
    }
    const updateReward = (rewardId, signal) => {
        const payload = {
            badge_id,
		user_id,
		
        };

        return Services.RewardService.update(rewardId, JSON.stringify(payload), signal);
    }
    const deleteReward = (rewardId, signal) => {
        return Services.RewardService.destroy(rewardId, signal);
    }
    const fillReward = (reward) => {
        setId(reward.id);
        setBadge_id(reward.badge_id ?? '');
		setUser_id(reward.user_id ?? '');
		
    }
    const emptyReward = () => {
        setId('');
        setBadge_id('');
		setUser_id('');
		
    }

    return {
        id,
        badge_id,
		user_id,
		
        errors,
        isDisabled,
        setBadge_id,
		setUser_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getReward,
        createReward,
        updateReward,
        deleteReward,
        fillReward,
        emptyReward
    };
}