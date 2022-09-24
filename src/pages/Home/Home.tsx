import React from 'react';
import './Home.css';
import profile from '../../resources/profile.jpeg';
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
    return (

        <div className='HomePage'>

            <div className='content item'>
                <Parallax speed={40}>
                    <h1 className='name'>VARUN ALLA</h1>
                </Parallax>
                <Parallax speed={20}>
                    <p className='summary'>Heyya!! I'm a Full-stack Web Developer currently interning at Strong Arm Technologies and pursuing Master of Sciences in Computer Software Engineering at San Jose State University. My previous experience includes work at EdgeVerve Systems Ltd and Infosys Ltd.</p>
                </Parallax>
            </div>
            <div className='picture item'>
                <Parallax speed={50}>
                    <img src={profile} className="App-logo" alt="logo" />
                </Parallax>
            </div>
        </div>

    );
}
export default Home;