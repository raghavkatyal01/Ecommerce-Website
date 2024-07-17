import React from 'react'
import axios from 'axios';
import Loading from '../Components/Loading';
import { userContext } from '../Context';
import { useState ,useEffect} from 'react';

function UserProvider({children}) {
    const [user, setUser] = useState();
    
  const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

if (loading) {
    return <Loading />;
  }
  return (
<userContext.Provider value={{user,setUser}}>
    {children}
</userContext.Provider>
  )
}

export default UserProvider
