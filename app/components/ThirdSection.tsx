import Image from 'next/image'
import React from 'react'

interface SecondSectionProps{

}

const ThirdSection: React.FC<SecondSectionProps> = () => {
    return(
        <section className='mt-20'>
            <h2 className='text-4xl font-["lepka"]'>Popular product</h2>

            <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-10'>
                {
                    [0,1,2].map((item:any)=>(
                        <div key={item}>
                            <div className='h-[50vh] max-xl:h-[40vh] max-lg:h-[35vh] rounded-3xl overflow-hidden'>
                                <Image src={'/image/section3.png'} alt="" width={100} height={100} className="h-full w-full"/>
                            </div>
                            <p className='mt-3 text-2xl max-md:text-xl max-sm:text-lg font-semibold'>John Devson</p>
                            <div className='flex items-center gap-5 mt-2'>
                                <p className='text-xl max-md:text-lg max-sm:text-base'>$56.00</p>
                                <Image src={'/image/section3-stars.png'} alt={''} width={150} height={100}/>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
    )
}

export default ThirdSection