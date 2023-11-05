'use client'

export function BadgeForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useBadge.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBadge.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='descritpion'>Descritpion</label>
                        <input className='form-control' type='text' id='descritpion' name='descritpion' 
                        placeholder='Descritpion' value={props.useBadge.descritpion ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBadge.setDescritpion(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Img_url</label>
                        <input className='form-control' type='text' id='img_url' name='img_url' 
                        placeholder='Img_url' value={props.useBadge.img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBadge.setImg_url(e.target.value) ?? null} required/>
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