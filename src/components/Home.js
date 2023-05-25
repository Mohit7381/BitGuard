import React from 'react'
import Typewriter from 'typewriter-effect';
import Sample from './assets/logo3.png'
import CommingSoon from './CommingSoon';
import './style.css'
const Home = () => {
    return (
    <>
        <div className="Header-Section">
            <div className="Header-Section-content">
                <Typewriter
                    options={{
                        strings: ['COMING SOON', 'Launhing Soon'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque harum unde nisi impedit illo. Perferendis recusandae nobis beatae inventore omnis suscipit culpa ea, facilis porro laudantium eos animi eaque numquam autem.</p> */}
            </div>
            <div className="Header-Section-Image">
                <img src={Sample} alt="" />
            </div>
        </div>
        <CommingSoon />
    </>
    )
}

export default Home