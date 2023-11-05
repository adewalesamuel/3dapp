'use client'

export function RewardForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='badge_id'>Badge_id</label>
                        <select className='select2 form-control' id='badge_id' name='badge_id' value={props.useReward.badge_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReward.setBadge_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='user_id'>User_id</label>
                        <select className='select2 form-control' id='user_id' name='user_id' value={props.useReward.user_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReward.setUser_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}