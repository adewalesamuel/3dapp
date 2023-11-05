'use client'

export function UserForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input className='form-control' type='text' id='username' name='username' 
                        placeholder='Username' value={props.useUser.username ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setUsername(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useUser.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='password' id='password' name='password' 
                        placeholder='Password' value={props.useUser.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setPassword(e.target.value) ?? null} required/>
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