import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { navigation } from '../app/objects';
import { useDispatch, useSelector } from "react-redux";
import GlassInputNoButton from './GlassInputNoButton';
import { useNavigate } from "react-router-dom";
import { Button } from '@material-tailwind/react';
import Spiner from '../components/Spiner'
import SelectMenus from './SelectMenus';
import { toast } from "react-toastify";
import { PhoneIcon, EnvelopeIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { addWaitList, reset } from '../features/waitList/waitListSlice';
import logo from "../assets/removeLogo.png"
import twitter from "../assets/X.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import appstore from "../assets/app-store.png"
import playstore from "../assets/google-play.png"

const Footer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        serviceCategory: '',
    })

    const [errors, setErrors] = useState({});
    const { isError, isSuccess, message, isLoading } = useSelector((state) => state.waitList);
    const { fullName, email, phoneNumber, serviceCategory } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            toast.success("Successfully saved request! Thank you, we'll get in touch")
            navigate('/')
        }

        dispatch(reset())
    }, [isError, message, navigate, isSuccess, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        let temp = {};
        temp.email = (/\S+@\S+\.\S+/).test(email) ? false : true;
        temp.fullName = fullName !== "" ? false : true;
        temp.phoneNumber = phoneNumber !== "" ? false : true;
        temp.serviceCategory = serviceCategory !== "" ? false : true;
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validate()
        const requestData = {
            fullName,
            email,
            phoneNumber,
            serviceCategory
        }
        dispatch(addWaitList(requestData));
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            serviceCategory: '',
        })
    }

    return (

        <footer className="bg-[#e7e4ee] lg:mt-0">
            <div className="mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-8">

                <div className="md:grid md:grid-cols-2 lg:grid-cols-2 gap-10" id='contact'>

                    <div>
                        <img src={logo} className='w-24 my-4' />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1 my-10">
                            <div>
                                <h2 className="mb-6 text-[#2a2346] text-sm font-semibold">Features</h2>
                                <ul className="text-[#2a2346]">
                                    {
                                        navigation[0].items.map((item, index) => (
                                            <li key={index} className="mb-4">
                                                <a href={item.path} className="text-[#2a2346] font-semibold hover:underline">{item.name}</a>
                                            </li>
                                        ))
                                    }
                                    <li className='mb-4'>
                                        <a href="#" className='text-[#2a2346] font-semibold hover:underline'>Streamlined Booking</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="#" className='text-[#2a2346] font-semibold hover:underline'>Event Management Tools</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-[#2a2346] text-sm font-semibold">Legal</h2>
                                <ul className="text-[#2a2346] font-medium">
                                    <li className="mb-4">
                                        <a href="/privacy-policy" className="text-[#2a2346] font-semibold hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/terms-of-use" className="text-[#2a2346] font-semibold hover:underline">Terms of User</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="text-[#2a2346] font-semibold hover:underline flex space-x-2 sm:mt-0">
                                            <PhoneIcon className="h-5 w-5 text-[#2a2346]" /> <span>(+234) 9056299369</span>
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="text-[#2a2346] font-semibold hover:underline flex space-x-2 sm:mt-0">
                                            <EnvelopeIcon className="h-5 w-5 text-[#2a2346]" /> <span>info@feteflex.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[#2a2346] font-semibold hover:underline flex space-x-2 sm:mt-0">
                                            <BriefcaseIcon className="h-5 w-5 text-[#2a2346]" /> <span>career@feteflex.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <div className='my-10'>
                            <div className="bg-[#f1eef7] border border-[#2A2346]  p-5 items-center rounded-2xl">
                                <div className='w-full col-span-2'>
                                    <h2 className='text-dark text-2xl'>Work with us</h2>
                                    <p className='text-sm text-dark my-3'>Get early access and partnership once the product lunches by creating a business account</p>
                                    <form onSubmit={onSubmit}>
                                        <div className='inputs'>
                                            <GlassInputNoButton placeholder="Full Name" value={fullName} onChange={onChange} error={errors.fullName} type={'text'} name='fullName' />
                                            <GlassInputNoButton placeholder='Email Address' value={email} onChange={onChange} error={errors.email} type={'email'} name='email' />
                                            <GlassInputNoButton placeholder='Phone Number' value={phoneNumber} onChange={onChange} error={errors.phoneNumber} type={'tel'} name='phoneNumber' />
                                            <SelectMenus placeholder='Service Category' value={serviceCategory} onChange={onChange} error={errors.serviceCategory} name='serviceCategory' />
                                        </div>
                                        <Button size='lg' type='submit' className='capitalize font-family bg-[#2a2346] my-3 w-full'>
                                            {
                                                isLoading ? <Spiner /> : "Join Waitlist"
                                            }
                                        </Button>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="hidden">
                            <img src={facebook} alt="Facebook" />
                            <img src={instagram} alt="Instagram" />
                            <img src={twitter} alt="Twitter" />
                            <img src={linkedin} alt="LinkedIn" />
                            <img src={appstore} alt="LinkedIn" />
                            <img src={playstore} alt="LinkedIn" />
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between" id='social-media'>
                    <span className="text-sm text-[#2a2346] sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Feteflex™</a>. All Rights Reserved
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://x.com/feteflex" className="text-[#2a2346]">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a href="https://m.facebook.com/people/Feteflex/100093179137675/" className="text-[#2a2346]">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="http://www.instagram.com/feteflex/" className="text-[#2a2346]">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.tiktok.com/@feteflex" className="text-[#2a2346]">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="https://ng.linkedin.com/company/feteflexofficial" className="text-[#2a2346]">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://m.youtube.com/@Feteflex" className="text-[#2a2346]">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer