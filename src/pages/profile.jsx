import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import Archivements from '../components/achievements'
import ProfileCard from '../components/mainProfile'
import { Link } from 'react-router-dom';
import DeleteAccount from '../components/eliminarcuenta';


function Profile() {
  return (
    <>

<Navbar fluid rounded>
      <Navbar.Brand >
        <span className="self-center text-xl font-semibold dark:text-white mx-10"> <Link to="/muscles">EntrenAT</Link></span>
      </Navbar.Brand>
     
        
        <Navbar.Toggle />
      
      <Navbar.Collapse>
        <Navbar.Link href="/perfil" className='mx-5'>Perfil</Navbar.Link>
        <Navbar.Link href="#" className='mb-20 mx-5'>Buscar GymBro!</Navbar.Link>
      <button> <span className=" text-ml font-semibold dark:text-white "><Link to="/" > Log out</Link></span></button>
      </Navbar.Collapse>
    </Navbar>
        <ProfileCard></ProfileCard>
        <Archivements></Archivements>
        <DeleteAccount></DeleteAccount>
    
    </>
  )
}

export default Profile