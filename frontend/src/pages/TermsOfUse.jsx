import Header from '../components/Header'

const TermsOfUse = () => {
    return (
        <div>
            <Header />

            <div>
                <div className="mx-auto lg:pt-10 lg:max-w-7xl">
                    <div className="grid col-span-2 py-12 gap-5 sm:grid-cols-1 items-center lg:grid-cols-3 md:grid-cols-1 padding-utils">
                        <div className="lg:justify-items-start mt-6 col-span-2">
                            <div className=''>
                                <h1 className="lg:text-4xl mt-5 px-10 text-align text-[#2A2346] 
                                    tracking-tight text-4xl font-semibold animate-once animate-delay-300 animate__animated animate__zoomIn heading-text">
                                    TERMS OF USE
                                </h1>

                            </div>
                        </div>
                    </div>

                    <div className="my-8">
                        <iframe
                            src="https://drive.google.com/file/d/1gICNCi5Cp6I2XhXkAPS2QXvBawhE_aEl/preview"
                            title="TERMS OF USE"
                            width="100%"
                            height="800px"
                            style={{ border: 'none' }}
                            allow="autoplay"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TermsOfUse