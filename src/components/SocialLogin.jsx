import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLogin = () => {
    return (
       <div>
         <div className='space-y-4 mt-10'>
            <button className='btn w-full'><FaGoogle></FaGoogle> Login with Google</button>
            <button className='btn w-full'><FaGithub></FaGithub> Login with Github</button>
        </div>
       
        <h3 className=' font-semibold my-10'>Find Us On</h3>
        <div >
        <button className='btn w-full bg-base-100 justify-start'><FaFacebook></FaFacebook> FaceBook</button>
        <button className='btn w-full bg-base-100 justify-start'><FaTwitter></FaTwitter> Twitter</button>
        <button className='btn w-full bg-base-100 justify-start'><FaInstagram></FaInstagram> Instagraam</button>
        </div>
       </div>
    );
};

export default SocialLogin;