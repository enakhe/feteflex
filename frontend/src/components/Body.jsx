import { Fragment, useState } from 'react'
import { Dialog } from '@material-tailwind/react'
import mainLogo from '../assets/mainLogo.png'

import Footer from './Footer'
import WaitList from './WaitList'
import Call2Action from './Call2Action'
import OurMission from './OurMission'
import Features from './Features'
import Slideshow from './Slideshow'
import Features2Card from './Features2Card'
// import Video from './Video'

import 'animate.css';
import FAQs from './FAQs'
import Services from './Services'

const Body = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <Fragment>
            <Call2Action />
            <OurMission />
            <Features />
            <Services />

            <Fragment>
                <div className="bg-gradient">
                    <Slideshow />

                    <div className='mx-auto lg:max-w-7xl p-6 pt-20'>
                        <Features2Card />
                        {/* <Video /> */}
                    </div>
                </div>
            </Fragment>

            <FAQs />

            <Dialog
                size="xs"
                open={open}
                onClose={open}
                handler={handleOpen}
                className="bg-transparent shadow-none">
                <WaitList onClick={handleOpen} />
            </Dialog>

            <Fragment>
                <Footer />
            </Fragment>
        </Fragment>
    )
}

export default Body