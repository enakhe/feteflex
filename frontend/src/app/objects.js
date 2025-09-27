import {
    BuildingLibraryIcon,
    ArrowPathIcon,
    MusicalNoteIcon,
    WrenchScrewdriverIcon,
    ChatBubbleLeftEllipsisIcon,
    ShieldCheckIcon,
    QuestionMarkCircleIcon,
    DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';

import logo from "../assets/logo.png"

export const navigation = [
    {
        name: 'Features',
        items: [
            {
                name: 'Artist Booking',
                path: '#artist',
                icon: MusicalNoteIcon,
                desc: 'Book your best artist'
            },
            {
                name: 'Venue Booking',
                path: '#venue',
                icon: BuildingLibraryIcon,
                desc: 'Find a perfect event center for your event'
            },
            {
                name: 'Organizer Booking',
                path: '#organizer',
                icon: ArrowPathIcon,
                desc: 'Get the best event planners'
            },
        ],
        href: "#features"
    },
    {
        name: 'About',
        items: [
            {
                name: 'Mission',
                path: '#about',
                icon: ShieldCheckIcon,
                desc: 'What is Feteflex?'
            }
        ],
        href: "#about"
    },
    {
        name: 'Contact',
        items: [
            {
                name: 'Join Waitlist',
                path: '#contact',
                icon: QuestionMarkCircleIcon,
                desc: 'Join our waitlist'
            },
            {
                name: 'Social Media',
                path: '#social-media',
                icon: DevicePhoneMobileIcon,
                desc: 'Follow us on our social handles'
            }
        ],
        href: "#contact"
    },
]

export const features = [
    {
        name: 'Artist Booking',
        description:
            "Elevate your venue's visibility! List with Feteflex to reach a broader audience and maximize your bookings effortlessly.",
        icon: MusicalNoteIcon,
        image: 'https://media.istockphoto.com/id/1337024740/photo/abstract-pastel-gray-color-and-gradient-white-light-background-in-studio-table-backdrops.jpg?s=612x612&w=0&k=20&c=_llvmKRKLzOPBdObLLWF_XxUX3JYduCkRgVFhWeqtkQ='
    },

    {
        name: 'Venue Booking',
        description:
            "Stand out in the crowded event planning market! showcase your services to a wider audience and simplify your bookings.",
        icon: BuildingLibraryIcon,
        image: 'https://media.istockphoto.com/id/1337024740/photo/abstract-pastel-gray-color-and-gradient-white-light-background-in-studio-table-backdrops.jpg?s=612x612&w=0&k=20&c=_llvmKRKLzOPBdObLLWF_XxUX3JYduCkRgVFhWeqtkQ='
    },
    {
        name: 'Organizer Booking',
        description:
            "Boost your artistry's exposure! Join Feteflex to connect with a wider audience and effortlessly increase your bookings",
        icon: ArrowPathIcon,
        image: 'https://media.istockphoto.com/id/1337024740/photo/abstract-pastel-gray-color-and-gradient-white-light-background-in-studio-table-backdrops.jpg?s=612x612&w=0&k=20&c=_llvmKRKLzOPBdObLLWF_XxUX3JYduCkRgVFhWeqtkQ='
    },
]

export const people = [
    {
        id: 1,
        name: 'Select Service Category',
        avatar: logo
    },
    {
        id: 2,
        name: 'Organized or Hosted Event',
        avatar:
            'https://media.istockphoto.com/id/1068618692/photo/business-network-concept.jpg?s=612x612&w=0&k=20&c=nhG46_71dEWiHbkbOh4R7u7WCQHUMQvj2KOHcDgVe44=',
    },
    {
        id: 3,
        name: 'Entertainment',
        avatar:
            'https://media.istockphoto.com/id/1204162313/photo/party-people-enjoy-concert-at-festival-summer-music-festival.jpg?s=612x612&w=0&k=20&c=G4w3LFJMXRFRDiZPVBNKlJZ3U3RKXt30YEEiPO6VZZI=',
    },
    {
        id: 4,
        name: 'Event Planning and Management',
        avatar:
            'https://media.istockphoto.com/id/1475798875/photo/business-woman-laptop-and-smile-for-phone-communication-or-reading-at-the-office-happy-female.jpg?s=612x612&w=0&k=20&c=jiqbqgCQGLuIc2NcqxX3mmWAGOV_GzHAGMIb6q3b-u0=',
    },
    {
        id: 5,
        name: 'Venue Owner',
        avatar:
            'https://media.istockphoto.com/id/1333513314/photo/portrait-of-restaurant-owner-using-laptop.jpg?s=612x612&w=0&k=20&c=e90aFc4Tn6R6aIVlPBu10q1hyGOZS10I2zGB_vezYt0=',
    },
]

export const data = [
    {
        label: "What benefits and advantages do I get for joining the wait-list?",
        value: "benefits",
        desc: ["Joining the wait-list for Feteflex grants you exclusive early access to our platform, ensuring you're among the first to experience the convenience and efficiency of our revolutionary event planning solution. You'll receive updates, special offers, and priority access to features, empowering you to stay ahead in orchestrating unforgettable events."],
    },
    {
        label: "When will feteflex launch?",
        value: "launch",
        desc: ["Feteflex is set to launch its innovative event planning platform between early November and late December 2024. Our comprehensive project roadmap outlines the meticulous steps leading up to this milestone, including brand creation, product design, website / App development, fundraising, customer acquisition, and final testing.",  "With a focus on sustainability and technological innovation, Feteflex aims to revolutionize the event management industry by digitizing every aspect of planning and attendance, making it faster, easier, and more secure for users."],
    },
    {
        label: "What makes feteflex different from other event planning platforms?",
        value: "different",
        desc: ["We stand out from other event planning platforms due to our unique combination of features and approach. Unlike traditional platforms, we offer a unified solution that consolidates scattered methods currently used by customers. Our user-friendly interface streamlines the booking process with real-time availability updates and advanced search options.", "We introduce an escrow payment system to address payment discrepancies, ensuring secure transactions. Additionally, Feteflex enhances visibility for event professionals beyond conventional social media channels, providing them with a dedicated space to market their services effectively."],
    },
    {
        label: "What types of events can I plan using feteflex?",
        value: "events",
        desc: ["With Feteflex, you can plan a wide range of events, including weddings, birthday parties, corporate events, conferences, seminars, product launches, charity events, fundraisers, concerts, festivals, trade shows, workshops, retreats, and much more. Whether it's a personal celebration or a professional gathering, Feteflex provides the tools and resources to make planning any event easier and more efficient."],
    },
    {
        label: "How will feteflex improve my event planning experience?",
        value: "planning",
        desc: ["Have you ever encountered the frustrating scenario of paying for a service upfront, only to be disappointed when it's not delivered as promised? With Feteflex's Escrow Payment System, your funds are held securely until services are rendered and confirmed, ensuring peace of mind and eliminating the risk of financial loss.Imagine having access to a diverse range of vendors and services at your fingertips.", "With Feteflex, you can explore an extensive marketplace of event professionals, from photographers and caterers to decorators and entertainers.Our platform empowers you to browse through a curated selection of vendors, ensuring that you find the perfect match for your event needs.", "Furthermore, Feteflex prioritizes convenience and flexibility in every aspect of the planning process. Need to make last-minute changes to your booking? No problem.", "Our platform allows for easy modifications and cancellations, giving you the flexibility to adapt to evolving circumstances with ease. Moreover, Feteflex takes the guesswork out of event planning with our comprehensive review system. Gain insights from real user experiences and make informed decisions when selecting vendors for your event. Our transparent feedback mechanism fosters trust and accountability within the Feteflex community, ensuring that you receive top- notch services every time."],
    },
    {
        label: "How can feteflex improve my business and get more clients?",
        value: "improve",
        desc: ["Enhanced Visibility: Listing your services on our platform connects you with a large network of event planners and organizers actively seeking vendors like you. Increase your visibility and showcase your offerings to a broader audience.", "Targeted Marketing: our platform uses advanced algorithms to match you with clients looking for your specific services. Benefit from targeted marketing that ensures you reach the right audience at the right time, increasing your booking opportunities.", "Streamlined Booking: Our platform makes it easy for clients to book your services. With a simple and efficient booking process, you can attract more clients and manage bookings effortlessly.", "Credibility and Trust: By joining Feteflex, you build credibility with potential clients. Our platform emphasizes transparency and accountability, helping you establish trust through client reviews and ratings.", "Valuable Insights: Use Feteflex's analytics tools to understand market trends and client preferences. With these insights, you can tailor your services to meet demand and stay ahead of the competition."],
    },
];