import { Button } from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import iphone1 from '../assets/iPhone 13.png'
import iphone2 from '../assets/iPhone 13-2.png'
import iphone3 from '../assets/iPhone 13-3.png'
import { Dialog } from '@material-tailwind/react'
import WaitList from './WaitList'


const Services = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <Fragment>
            <div className="bg-[#F8F8F8]">
                <div className='mx-auto lg:max-w-7xl lg:pt-10 p-6 padding-utils'>
                    <h3 className='text-[#2A2346] text-3xl mb-5 pt-10 font-bold'>Are You Planning an Event or Offering Event Services</h3>
                    <div className='flex justify-center'>
                        <div className="">
                            <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce={true}>

                                <div className='grid gap-5 sm:grid-cols-1 items-center lg:px-0 lg:grid-cols-2'>
                                    <div className='bg-[#ffffff] rounded-2xl'>
                                        <h3 className='text-2xl text-[#2A2346] font-bold pt-6 px-6'>Feteflex For Your Events</h3>
                                        <div className='grid gap-5 sm:grid-cols-1 items-center lg:grid-cols-2'>
                                            <p className='px-6 mt-2 text-[#2A2346] text-lg leading-relaxed'>Browse through a diverse range of options, by location, vendor type, budget to find exactly what they need.</p>
                                            <div className='justify-items-end mt-6 px-6'>
                                                <img src={iphone1} className='w-96 float-end' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-[#ffffff] rounded-2xl'>
                                        <h3 className='text-2xl text-[#2A2346] font-bold pt-6 px-6'>Feteflex For Service Providers</h3>
                                        <div className='grid gap-5 sm:grid-cols-1 items-center lg:grid-cols-2'>
                                            <p className='px-6 mt-2 text-[#2A2346] text-lg leading-relaxed'>Event service providers now have the chance to showcase their unique offerings, and attract more clients</p>
                                            <div className='justify-items-end mt-6 px-6'>
                                                <img src={iphone2} className='w-96 float-end' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#ffffff] w-full rounded-2xl mt-10 col-start-1 col-end-6'>
                                    <div className='grid gap-5 sm:grid-cols-1 items-end lg:grid-cols-3'>
                                        <div className='lg:col-span-2 my-5 px-6'>
                                            <h3 className='text-2xl text-[#2A2346] font-bold'>From Intimate Gatherings to Grand Celebrations</h3>
                                            <h2 className='text-lg text-[#8563A6] font-semibold'>Make Every Bookings With Confidence</h2>
                                            <p className='w-full text-[#2A2346] max-w-lg my-4 text-lg leading-relaxed'>Our escrow payment system ensures that funds are held securely until services are successfully delivered, providing peace of mind and mitigating financial disputes for you and your client.</p>
                                            <Button variant="gradient" color="white" className='font-family text-md w-48 capitalize bg-[#2A2346] text-[#F1EEF7]' onClick={handleOpen}>
                                                Join Waitlist
                                            </Button>
                                        </div>
                                        <div className='mx-6 grid justify-items-center'>
                                            <img src={iphone3} className='w-96 flex justify-items-center' />
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
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

export default Services