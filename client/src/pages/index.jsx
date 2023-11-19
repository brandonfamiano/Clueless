import { UserContext } from './UserContext';
import { useContext } from 'react';
import { UserContextProvider } from './UserContext';
export default function Index() {
   const{ready,user} = useContext(UserContext);
   if(ready, !user){
      return (
         <div>
            Welcome back {user?.name}
         </div>
      )
  }

  return(
     <div>
        index page here
     </div>
     )
}
