import { Bars3Icon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { navigation } from '../app/objects'
import Dropdown from './Dropdown'
import { Dialog } from '@headlessui/react';
import { Button, Dialog as Dialog2 } from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import logo from './../assets/header-logo.png'

import subBlack from './../assets/logo-black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import WaitList from './WaitList';

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen((cur) => !cur);

	return (
		<header className="relative z-50 inset-x-0 header-bg">
			<nav className="rounded-b-lg py-6 fixed top-0 left-0 right-0 bg-[#F1EEF7]" aria-label="Global">
				<div className='mx-auto lg:max-w-7xl padding-utils px-6 lg:px-0'>
					<div className='flex justify-between items-center lg:mx-10'>
						<div className="flex lg:flex-1">
							<a href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Feteflex</span>
								<img
									className="w-24"
									src={logo}
									alt="Feteflex Logo" />
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark"
								onClick={() => setMobileMenuOpen(true)}>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							{navigation.map((item, index) => (
								<Fragment key={index}>
									<Dropdown name={item.name} list={item.items} />
								</Fragment>
							))}
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<Button variant="gradient" color="white" className='font-family capitalize bg-[#2A2346] py-4 text-[#F1EEF7]' onClick={handleOpen}>
								Get Started
							</Button>
						</div>
					</div>

				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Feteflex</span>
							<img
								className="w-24"
								src={subBlack}
								alt="Feteflex Logo" />
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-black"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className='absolute inset-x-0 bottom-0 py-6 px-6'>
						<Button size='lg' className='font-family capitalize w-full bg-[#2A2346] py-4 text-[#F1EEF7]' onClick={handleOpen}>Join Waitlist</Button>
						<hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
						<div className="sm:flex sm:items-center sm:justify-between" id='social-media'>
							<span className="text-sm text-gray-900 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Feteflex™</a>. All Rights Reserved
							</span>
							<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
								<a href="https://x.com/feteflex" className="text-gray-500 hover:text-[#2A2447]">
									<FontAwesomeIcon icon={faXTwitter} />
								</a>
								<a href="https://m.facebook.com/people/Feteflex/100093179137675/" className="text-gray-500 hover:text-[#2A2447]">
									<FontAwesomeIcon icon={faFacebook} />
								</a>
								<a href="http://www.instagram.com/feteflex/" className="text-gray-500 hover:text-[#2A2447]">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
								<a href="https://www.tiktok.com/@feteflex" className="text-gray-500 hover:text-[#2A2447]">
									<FontAwesomeIcon icon={faTiktok} />
								</a>
								<a href="https://ng.linkedin.com/company/feteflexofficial" className="text-gray-500 hover:text-[#2A2447]">
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<a href="https://m.youtube.com/@Feteflex" className="text-gray-500 hover:text-[#2A2447]">
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</div>
						</div>
					</div>


				</Dialog.Panel>
			</Dialog>

			<Dialog2
				size="xs"
				open={open}
				onClose={open}
				handler={handleOpen}
				className="bg-transparent shadow-none">
				<WaitList onClick={handleOpen} />
			</Dialog2>
		</header>

	)
}

export default Header