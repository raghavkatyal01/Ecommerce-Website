import React from 'react'
import { AlertContext } from '../Context';
import { useState } from 'react';
function AlertProvider({children}) {
    const [alert, setAlert] = useState();
    function removeAlert() {
        setAlert(undefined);
      }
  return (
    <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>{children}
        </AlertContext.Provider>
  )
}

export default AlertProvider
