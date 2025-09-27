import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { Fragment, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { data } from '../app/objects'
import AccordionComp from './AccordionComp'

const FAQs = () => {
    const [activeTab, setActiveTab] = useState("benefits");

    return (
        <Fragment>
            <div className='bg-[#f1eef7]'>
                <div className="mx-auto max-w-3xl p-6 lg:max-w-7xl padding-utils">
                    <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                        <div>
                            <h3 className="text-[#2A2346] text-3xl mt-5 text-align font-bold animate-once animate-delay-300 animate__animated animate__zoomIn">
                                Got Any Question?</h3>
                            <p className="text-[#2A2346] text-lg py-5 text-dark animate-once animate-delay-400 animate__animated animate__zoomIn">Wandering what Feteflex got in store for you? what challenges its solving? or how it can improve your business to get more clients? the opportunities are endless </p>
                        </div>
                    </ScrollAnimation>

                    <div className="hidden lg:block">
                        <Tabs orientation="vertical" value={activeTab}>
                            <div className='grid grid-cols-2 gap-4 items-center'>
                                <TabsHeader
                                    fullwidth={"true"}
                                    className="rounded-none text-start text-[#F1EEF7] text-sm bg-transparent p-0"
                                    indicatorProps={{
                                        className:
                                            "!text-inherit font-family text-start text-sm capitalize bg-[#2A2346] text-[#F1EEF7]",
                                    }}>
                                    {data.map(({ label, value }) => (
                                        <Tab
                                            key={value}
                                            value={value}
                                            onClick={() => setActiveTab(value)}
                                            className={activeTab === value ? "justify-start text-left text-[#F1EEF7] text-sm py-4 px-4" : "justify-start text-left text-sm my-3 bg-[#e7e4ee] py-4 px-4 rounded"}>
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody className='h-mine overflow-auto bg-[#e7e4ee] rounded-md'>
                                    {data.map(({ value, desc }) => (
                                        desc.map((des, index) => (
                                            <TabPanel className='font-family leading text-semibold' key={value} value={value}>
                                                <p key={index} className='hidden lg:block'>{des}</p>
                                            </TabPanel>
                                        ))
                                    ))
                                    }

                                </TabsBody>
                            </div>
                        </Tabs>
                    </div>

                    <div className='lg:hidden'>
                        {
                            data.map((data, index) => (
                                <AccordionComp key={index} header={data.label} body={data.desc} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default FAQs