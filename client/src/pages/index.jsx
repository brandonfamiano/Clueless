import { UserContext } from './UserContext';
import { useContext } from 'react';
import '../assets/styles/index.scss'
import { Link } from 'react-router-dom';
export default function Index() {
   const{ready,user} = useContext(UserContext);
   if(ready, !user){
      return (
      <div className='index'>
        <h1>Welcome!</h1>
        <img src='https://cdn.vox-cdn.com/thumbor/anlmCvw_DM2xC2ba3WosE-C0itE=/0x0:1584x891/1400x933/filters:focal(666x320:918x572):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/70771177/clueless.0.jpg'></img>
        <p>Redefining the clothing industry, one upload at a time. Clueless seeks to create a virtual wardrobe. Do you ever trouble finding an outfit, only to find all your rejects on the floor with more mess to clean up? This app is your solution. You don't have to go digging through your closet to find your next outfit, instead just login to our website, select your favorite pieces, and just like that you're ready for the party. So don't just stand there!</p>
        <Link to='/register'><button className='link'>Become a part of the Clueless Family</button></Link>
        <Link to='/login'>Already a member? Sign in</Link>
     </div>
      )
  }

  return(
     <div className='index'>
        <h1>Welcome Back {user?.name}</h1>
        <img src='https://cdn.vox-cdn.com/thumbor/anlmCvw_DM2xC2ba3WosE-C0itE=/0x0:1584x891/1400x933/filters:focal(666x320:918x572):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/70771177/clueless.0.jpg'></img>
        <p>Redefining the clothing industry, one upload at a time. Inspired from the movie Clueless, in a scene in which Cher selects her wardrobe from an app, Clueless seeks to create a virtual wardrobe. Do you ever trouble finding an outfit, only to find all your rejects on the floor with more mess to clean up? This app is your solution. You don't have to go digging through your closet to find your next outfit, instead just login to our website, select your favorite pieces, and just like that you're ready for the party. So don't just stand there!</p>
        <Link to='/wardrobe'><button className= "link ">Jump back in!</button></Link>
        
     </div>
     )
}
