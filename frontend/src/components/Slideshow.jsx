import { Fragment } from 'react'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'
import phone4 from '../assets/phone4.png'
import phone5 from '../assets/phone5.png'
import phone6 from '../assets/phone6.png'
import phone7 from '../assets/phone7.png'

const Slideshow = () => {
    return (
        <Fragment>
            <h3 className='text-[#2A2346] text-3xl text-center max-w-3xl lg:max-w-7xl pt-10 mx-auto font-bold px-4 lg:px-0'>Tell Us What You Are Planning</h3>
            <div className='flex justify-center'>
                <p className='lg:max-w-xl text-center text-[#2A2346] text-md p-6 text-lg leading-relaxed'>
                    Whether you&apos;re organizing a wedding, concert, birthday party, corporate event, or beach party, our platform has everything you need to ensure seamless experiences for you.
                </p>
            </div>

            <div className='lg:pl-20 pl-5 padding-utils mt-10 no-scrollbar scroll-smooth overflow-x-auto overflow-visible'>
                <div className="phones flex">
                    <img src={phone1} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                    <img src={phone2} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                    <img src={phone3} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                    <img src={phone4} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                    <img src={phone5} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                    <img src={phone6} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                    <img src={phone7} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />

                    <img src={phone1} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                    <img src={phone2} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                    <img src={phone3} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                    <img src={phone4} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                    <img src={phone5} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                    <img src={phone6} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mb-20' />
                    <img src={phone7} alt="" className='w-48 lg:w-64 lg:mr-20 mr-10 mt-20' />
                </div>
            </div>
        </Fragment>
    )
}

export default Slideshow