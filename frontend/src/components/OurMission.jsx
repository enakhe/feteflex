import { Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import logoMulti from '../assets/logo-multi.png'

const OurMission = () => {
    return (
        <Fragment>
            <div className='mx-auto lg:max-w-7xl lg:pt-10'>
                <div className='px-6 lg:px-0'>
                    <div className="grid py-12 gap-5 sm:grid-cols-1 items-center my-6 lg:grid-cols-3 padding-utils">
                        <div className='col-span-2'>
                            <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                                <h3 className='text-[#2A2346] text-3xl font-bold'>Our Mission</h3>
                                <p className='text-lg text-[#2A2346] leading-relaxed mt-5 max-w-2xl'>
                                    At Feteflex, we’re committed to redefining event planning with creativity and innovative technology through a unified platform.
                                </p>
                                <p className='my-2 max-w-2xl text-lg leading-relaxed text-[#2A2346]'>
                                    Imagine a platform where you can easily find the perfect venue, caterer, entertainment, and more, all at your fingertips.
                                </p>
                                <p className='my-2 max-w-2xl text-lg leading-relaxed text-[#2A2346]' id='about'>
                                    Organizing events has never been easy and that is why we aim to simplify that process, providing a dedicated space for effective service marketing.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className="grid col-span-2 lg:col-span-1 animate-fade-up animate-once animate-delay-400 justify-items-center">
                            <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                                <img src={logoMulti} className='w-96' alt="Landing Image" />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OurMission