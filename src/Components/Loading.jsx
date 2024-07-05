import {memo,React} from 'react'
import { ImSpinner } from "react-icons/im";
function Loading() {
  return (
   <>

      <div className="  h-96  text-5xl flex items-center justify-center animate-spin">
      <ImSpinner />  
</div>
    </>
  )
}

export default memo(Loading)
