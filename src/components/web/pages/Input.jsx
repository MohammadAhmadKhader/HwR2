import React from 'react'

function Input({type="text",id,name,title,onChange,value,errors,onTouchError}) {
// onTouchError = {formik.setFieldTouched}

  let _handleTouch = () =>{
    onTouchError(name);
  }
  
  return (
    <>
        <div className='input-group mb-3'>
            <label htmlFor={id}>{title}</label>
            <input placeholder={title.toLowerCase()} type={type} id={id} name={name} value={value} onChange={onChange} className="form-control" onBlur={_handleTouch}/>
            {errors?.[name] && <span className='text-danger input-error'> {errors[name].toLowerCase()} </span>}
            {/* touched[name] && {errors[name] && <span className='text-danger input-error'> {errors[name].toLowerCase()} </span>} */}
        </div>
        
    </>
  )
}

export default Input