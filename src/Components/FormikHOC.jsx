import React from 'react'
import { useField } from 'formik'
function FormikHOC(IncomingComponent) {
    function OutgoingComponent({name,...rest}){
    const field=useField(name);
   
    const [data,meta]=field;
    const {onBlur,onChange,value}=data;
    const {touched,error}=meta;
 
        return (
            <>
            <IncomingComponent
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={error}
            touched={touched}
            name={name}
            {...rest}
            
            />
           
            </>
          )
    }
    return OutgoingComponent;
 
}

export default FormikHOC
