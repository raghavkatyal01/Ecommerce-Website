import React ,{useContext} from 'react'
import { AlertContext, userContext } from '../Context';


function withProvider(provider){
function myHOC(IncomingComponent) {
    function OutgoingComponent(props){
        const contextInfo=useContext(provider)
        return <IncomingComponent {...props} {...contextInfo} />
    }

  return OutgoingComponent
  
}
return myHOC;
}
export default withProvider
export const withUser=withProvider(userContext)
export const withAlert=withProvider(AlertContext)


