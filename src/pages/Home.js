import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Video from '../video/ClayShowreel.mp4'
import Videos from '../video/SlackAnimation.mp4'
import Fiverr from '../video/FiverrCoverWideM@1x.mp4'
import Snap from '../video/SnapchatAnimationSquare@1x.mp4'
import Joe from '../video/JoeAnimationVertical@1x.mp4'
import Wealth from '../video/WealthAnimationVertical@1x.mp4'
import Jokr from '../video/JokrAnimationVertical@1x.mp4'
import Marqeta from '../video/MarqetaAnimationWideM@1x.mp4'

const Home = () => {

    const [isUlVisible, setUlVisible] = useState(false);
    const [isVisible, setVisible] = useState(false);

    const videoRef = useRef(null);


    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                videoRef.current.muted = false;
                videoRef.current.requestFullscreen();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleVideo = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                videoRef.current.muted = false;
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleVideoMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.muted = true;
        }
        setUlVisible(true);
    };

    const handleVideoMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.muted = true;
        }
        setUlVisible(false);
    };


    const handleFiverrVideo = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                videoRef.current.muted = false;
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleFiverrMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.muted = true;
        }
        setUlVisible(true);
    };

    const handleFiverrMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.muted = true;
        }
        setUlVisible(false);
    };

    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };


    const clients = [
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/ac1c94344d31916be898fc55000cf9b27e68285b-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/689e01bd2c288dd03525e2190bb56ed9eaaaa06a-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/2b69caa1516c56a3989846a5c483f59eaa8f15cf-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/689e01bd2c288dd03525e2190bb56ed9eaaaa06a-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/1ccdef6d3ba4f4ee24105efd34fceaac4fb8ff6e-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/6233e543b7573b5345aaf41292cc0ce94dd46d9f-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/085e515adb0e0f68ad2869778b44868891400ac7-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/090d462d595141bf2bf5bd61e1a15e848dca1e01-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/1ccdef6d3ba4f4ee24105efd34fceaac4fb8ff6e-290x192.svg?q=75&fit=clip&auto=format"
        },
        {
            img: "https://cdn.sanity.io/images/r115idoc/production/7345fadd4bacc3a5c909120f905d3d08fc070486-290x192.svg?q=75&fit=clip&auto=format"
        }
    ]
    return (
        <div>
            <Navbar />
            <div className='px-48 my-20'>
                <h1 className='text-6xl font-semibold'>Clay is a global branding <br /> and UX design agency</h1>
            </div>
            <div className='px-32 my-10'>
                <video
                    ref={videoRef}
                    src={Video}
                    autoPlay
                    muted
                    controls={false}
                    onClick={handleVideoClick}
                ></video>
            </div>

            <div className='grid grid-cols-2 my-20 px-48'>
                <div className=''>
                    <h1 className='text-3xl'>We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.</h1>
                </div>
                <div className=''>
                    <div className='pl-48'>
                        <ul className=''>
                            <li className='text-2xl my-6 text-black font-bold'>Branding</li>
                            <li className='text-2xl my-6 text-black font-bold'>Digital Products</li>
                            <li className='text-2xl my-6 text-black font-bold'>Website</li>
                            <li className='text-2xl my-6 text-black font-bold'>Development</li>
                            <li className='text-2xl my-6 text-black font-bold'>Contend</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-48'>
                <ul className='grid grid-cols-5'>
                    {clients.map((img) => (
                        <>
                            <li><img src={img.img} alt="" /></li>
                        </>
                    ))}
                </ul>
                <h1 className='text-2xl text-center'>View all clients</h1>
            </div>

            <div className='grid grid-cols-2 gap-6 px-48 my-20'>
                <div className=''>
                    <video
                        ref={videoRef}
                        src={Videos}
                        autoPlay
                        muted
                        controls={false}
                        onClick={handleVideo}
                        onMouseEnter={handleVideoMouseEnter}
                        onMouseLeave={handleVideoMouseLeave}
                    ></video>
                    <h1 className='text-3xl mt-4 font-semibold'>Slack</h1>
                    <p className='text-lg'>Designing and building Slack’s interactive demo experience</p>
                    <div className='my-2'>
                        <ul className={`flex ${isUlVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Web Design</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Enterprise</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Development</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-40' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="https://cdn.sanity.io/images/r115idoc/production/4aac7e9e7cd421f7e9bfc411e148b17f168bb850-704x880.png?q=90&auto=format" className='' alt="" />
                    <h1 className='text-3xl mt-4 font-semibold'>Serena & Lily</h1>
                    <p className='text-lg'>Ecommerce redesign for a leader in luxury home decor</p>
                    <div className='my-2'>
                        <ul className={`flex ${isVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Web Design</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Design System</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Ecommerce</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-48 py-10'>
                <div className=''>
                    <video
                        ref={videoRef}
                        src={Fiverr}
                        autoPlay
                        muted
                        controls={false}
                        onClick={handleFiverrVideo}
                        onMouseEnter={handleFiverrMouseEnter}
                        onMouseLeave={handleFiverrMouseLeave}
                        style={{ width: '80%' }}
                    ></video>
                    <h1 className='text-3xl mt-4 font-semibold'>Fiverr</h1>
                    <p className='text-lg'>Web app design for a virtual creative collaboration service</p>
                    <div className='my-2'>
                        <ul className={`flex ${isUlVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>UI/UX</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Startup</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Design System</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-10 px-48 my-20'>
                <div className='mt-40'>
                    <video
                        ref={videoRef}
                        src={Joe}
                        autoPlay
                        muted
                        controls={false}
                        onClick={handleVideo}
                        onMouseEnter={handleVideoMouseEnter}
                        onMouseLeave={handleVideoMouseLeave}
                    ></video>
                    <h1 className='text-3xl mt-4 font-semibold'>Joe & The Juice</h1>
                    <p className='text-lg'>A digital commerce and loyalty app for a global coffee shop chain</p>
                    <div className='my-2'>
                        <ul className={`flex ${isUlVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>UI/UX</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Mobile App</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Consumer</li>
                        </ul>
                    </div>
                </div>
                <div className='' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <video
                        ref={videoRef}
                        src={Snap}
                        autoPlay
                        muted
                        controls={false}
                        onMouseEnter={handleFiverrMouseEnter}
                        onMouseLeave={handleFiverrMouseLeave}
                    ></video>
                    <h1 className='text-3xl mt-4 font-semibold'>Snapchat</h1>
                    <p className='text-lg'>Integrating augmented reality to elevate social commerce</p>
                    <div className='my-2'>
                        <ul className={`flex ${isVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>UI/UX</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Mobile App</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Ecommerce</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-48 py-10 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className=''>
                    <img src="https://cdn.sanity.io/images/r115idoc/production/133d129f60eb7ae8f487c99608760ac296c82779-1408x1760.png?q=90&auto=format" alt="" />
                    <h1 className='text-3xl mt-4 font-semibold'>Nuant</h1>
                    <p className='text-lg'>Design system for a crypto asset intelligence solution</p>
                    <div className='my-2'>
                        <ul className={`flex ${isVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>UI/UX</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Web App</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Web3</li>
                        </ul>
                    </div>
                </div>
            </div>
            

            <div className='grid grid-cols-2 gap-10 px-48 my-20'>
                <div className=''>
                    <video
                        ref={videoRef}
                        src={Wealth}
                        autoPlay
                        muted
                        controls={false}
                        onClick={handleVideo}
                        onMouseEnter={handleVideoMouseEnter}
                        onMouseLeave={handleVideoMouseLeave}
                    ></video>
                    <h1 className='text-3xl mt-4 font-semibold'>Wealth</h1>
                    <p className='text-lg'>Designing a self-service digital estate planning platform</p>
                    <div className='my-2'>
                        <ul className={`flex ${isUlVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Branding</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>UI/UX</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Website</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Design System</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-40' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <video
                        ref={videoRef}
                        src={Jokr}
                        autoPlay
                        muted
                        controls={false}
                        onMouseEnter={handleFiverrMouseEnter}
                        onMouseLeave={handleFiverrMouseLeave}
                    ></video>
                    <h1 className='text-3xl mt-4 font-semibold'>JOKR</h1>
                    <p className='text-lg'>Mobile app design for a fast grocery delivery startup</p>
                    <div className='my-2'>
                        <ul className={`flex ${isVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>UI/UX</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Startup</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Consumer</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-48 py-10 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className=''>
                <video
                    ref={videoRef}
                        src={Marqeta}
                        autoPlay
                        muted
                        controls={false}
                        onMouseEnter={handleFiverrMouseEnter}
                        onMouseLeave={handleFiverrMouseLeave}
                ></video>
                    <h1 className='text-3xl mt-4 font-semibold'>Marqeta</h1>
                    <p className='text-lg'>Website and digital branding for a modern card-issuing platform</p>
                    <div className='my-2'>
                        <ul className={`flex ${isVisible ? 'block' : 'hidden'}`}>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Web Design</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>3D</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Development</li>
                            <li className='mx-3 text-[#6a7c9a] text-lg'>Fintech</li>
                        </ul>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Home