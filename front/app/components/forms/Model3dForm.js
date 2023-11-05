'use client'

import { Services } from "@/app/services";
import { Components } from "..";

export function Model3dForm(props) {
    let abortController = new AbortController();

    const handleFileUpload = async file => {
        props.useModel3d.setIsDisabled(true);
        
        try {
            const formData = new FormData();

            formData.append('file', file);
            
            const {file_url} = await Services.FileService.store(
                formData, abortController.signal);

            props.useModel3d.setFile_img_url(file_url);
        } catch (error) {
            console.log(error);
        }finally {props.useModel3d.setIsDisabled(false)}
    }

    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='file_url'>File_img_url</label>
                        <Components.ImageFileInput handleFileChange={handleFileUpload} 
                        img_url={props.useModel3d.file_url}/>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useModel3d.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useModel3d.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Descritpion</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Descritpion' value={props.useModel3d.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useModel3d.setDescritpion(e.target.value) ?? null} required/>
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