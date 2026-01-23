import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import banner from '../../assets/45467.jpg';
import banner2 from '../../assets/Mantraa (Devika)/83782.jpg'

const MantraaStory = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className='red-bg py-4 pb-16 md:py-8'>
                    <div className='mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-44'>
                        
                        {/* Main container - responsive positioning */}
                        <div className='relative flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-stretch'>
                            
                            {/* Image - responsive sizing */}
                            <div className='w-full lg:w-[60%] relative'>
                                <img 
                                    className='w-full h-[120vh] object-cover  rounded-lg lg:rounded-none shadow-md lg:shadow-none'
                                    src={banner} 
                                    alt="Mantraa Story" 
                                />
                            </div>

                            {/* Story Card - Stacked on mobile, absolute on desktop */}
                            <div className='
                                w-full lg:w-[40%] max-w-2xl lg:max-w-none
                                lg:absolute lg:top-1/2 lg:right-[5%] xl:right-[13%] 
                                lg:transform lg:-translate-y-1/2 lg:w-[35vw] xl:w-[25vw]
                                mt-6 sm:mt-8 lg:mt-0 -mb-8 lg:mb-0
                                relative lg:absolute
                            '>
                                <div className='
                                    bg-[#F9EFD5] p-5 sm:p-6 md:p-8 lg:p-9 
                                    rounded-lg lg:rounded-lg
                                    shadow-lg lg:shadow-xl
                                    h-auto min-h-[300px] sm:min-h-[350px] lg:h-[40vh] xl:h-[50vh]
                                    flex flex-col justify-center
                                    border border-[#5B0D0D]/10
                                '>
                                    <h2 className='text-xl lora sm:text-2xl md:text-3xl lg:text-[20px] xl:text-[24px] font-semibold text-[#5B0D0D] mb-3 sm:mb-4'>
                                        Maantra Story
                                        <div className='w-20 h-[0.6px] bg-[#5B0D0D]' />
                                    </h2>

                                    <div className='space-y-3 inter sm:space-y-4 lg:space-y-4 overflow-y-auto max-h-[200px] sm:max-h-[250px] lg:max-h-none lg:overflow-y-hidden lg:hover:overflow-y-auto pr-2 custom-scrollbar'>
                                        <p className='text-sm sm:text-base md:text-lg lg:text-[16px] xl:text-[18px] text-gray-800 leading-relaxed sm:leading-loose'>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nihil obcaecati quibusdam assumenda, earum eaque molestias doloremque accusantium, fuga voluptate optio placeat repellat natus ex iusto dolorem. Sunt molestiae enim omnis nisi error?
                                        </p>
                                        <p className='text-sm sm:text-base md:text-lg lg:text-[16px] xl:text-[18px] text-gray-800 leading-relaxed sm:leading-loose'>
                                            Lorem ipsum dolor lore sit amet consectetur adipisicing elit. Doloribus quaerat adipisci nihil quasi molestias ratione harum sequi odio quas possimus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex justify-center items-center flex-col red-bg text-white gap-5 md:px-36 px-4 py-10'>
                    <h3 className='text-[25px] lora text-[#F9EFD5]'>Fashion for every Generation</h3>

                    <p className='text-[20px] flex flex-col items-center inter justify-center pb-9 gap-8'>
                   <span>     I grew up as the only sister among four children, with three brothers, and naturally became their unofficial stylist. Growing up in Spain, and later navigating life in the UK, I often felt the gap when it came to South Asian wear. In the UK, options felt limited or unsuitable, and finding something that truly worked often meant travelling to India, a process that was expensive, time-consuming, and rarely practical.

</span>
                   
                  <span> Coming from a family of entrepreneurs, I learned early on that frustration doesn’t have to be accepted. Maantra was created to bridge that gap: to bring South Asian wear to the Western world without the logistical faff, unrealistic refund policies, or the need to step outside everyday life to access it.
</span>
<span className='font-medium'>
    The mission is simple: to make South Asian wear a natural part of every man’s wardrobe in the UK.
</span>
                    </p>
<img 
    className='w-[100%] h-[100vh]  md:object-top object-cover' 
    src={banner2} 
    alt="" 
/>
                </section>


                <section className='red-bg py-12 md:px-36 px-4 pb-20'>

                    <h2 className='text-center lora text-[#F9EFD5] text-[25px]'> Meet Our Team</h2>

        <div className='grid md:grid-cols-4 grid-cols-1 mt-9 gap-7 lora justify-items-center'>
                {
                [1,2,3,4].map(items => (
                    <div key={items} className='w-full'>
                        <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                   <div className='flex justify-center items-center flex-col mt-5 text-white'>
                    <p className='text-[30px]'>Devika Paul</p>
                    <p className='text-[20px] mt-2'>Ceo & Founder</p>
                   </div>
                    </div>
                ))
            }
        </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MantraaStory;