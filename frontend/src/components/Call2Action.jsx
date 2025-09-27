import { Fragment, useState } from 'react'
import GlassInput from './GlassInput'
import AvatarStack from './AvatarStack'
import { Button, Dialog } from '@material-tailwind/react'

import landingImage from './../assets/landing.png'
import curve from './../assets/curve.png'
import WaitList from './WaitList'

const Call2Action = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <Fragment>
            <div className='bg-[#f1eef7]'>
                <div className="mx-auto lg:max-w-7xl lg:pt-10">
                    <div className="grid py-12 gap-5 sm:grid-cols-1 items-center lg:grid-cols-2 md:grid-cols-1 padding-utils">
                        <div className="grid lg:justify-items-center mt-6">
                            <div className='px-6 lg:px-0'>
                                <h1 className="lg:text-4xl mt-5 text-align text-[#2A2346] tracking-tight text-4xl font-semibold animate-once animate-delay-300 animate__animated animate__zoomIn heading-text">
                                    Transforming <span className='text-[#8663A6]'>event planning</span> with
                                    technology and innovation
                                </h1>
                                <img alt='curve' src={curve} className='w-48 absolute bottom-30 animate-once animate-delay-300 animate__animated animate__zoomIn' />
                                <p className="md:text-md text-lg leading-relaxed py-5 font-normal text-[#2A2346] animate-once animate-delay-400 animate__animated animate__zoomIn">
                                    <b>Discover, Book  and Get Booked</b> All in one platform, it only takes a few clicks to get started. Be the first to experience the event revolution by Joining our community!
                                </p>
                                <div className='hidden lg:block'>
                                    <GlassInput />
                                </div>
                                <div className='lg:hidden'>
                                    <Button variant="gradient" color="white" className='font-family w-48 text-md capitalize bg-[#2A2346] text-[#F1EEF7]' onClick={handleOpen}>
                                        Join Waitlist
                                    </Button>
                                </div>
                                <div className='mt-5 animate-delay-400 animate__animated animate__zoomIn'>
                                    <p className='text-[#2A2346] text-lg leading-relaxed mb-2'>Our Waitlist</p>
                                    <AvatarStack />
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:justify-items-end justify-items-center animate-delay-400 p-1 animate__animated animate__pulse animate__slower animate__infinite" id='about'>
                            <img src={landingImage} className='lg:w-4/5 w-full' alt="Landing Image" />
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                size="xs"
                open={open}
                onClose={open}
                handler={handleOpen}
                className="bg-transparent shadow-none">
                <WaitList onClick={handleOpen} />
            </Dialog>
        </Fragment>
    )
}

export default Call2Action