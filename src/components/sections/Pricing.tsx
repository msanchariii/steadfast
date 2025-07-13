"use client"

import { pricingPlans, whatsIncluded } from '@/data/pricing'
import gsap from 'gsap'
import { Check, CircleSmall } from 'lucide-react'
import React from 'react'

const Pricing = () => {

    const onMouseEnterGetAQuote = () => {
        gsap.to('#get-quote', {
            y: -50,
            ease: "ease.inOut",
            duration: 0.16,
        })

    }
    const onMouseLeaveGetAQuote = () => {
        gsap.to('#get-quote', {
            y: 0,
             ease: "ease.inOut",
            duration: 0.16,
        })

    }


    return (
        <div className='bg-white rounded-3xl p-8 '>
            <div className='space-y-6'>
                <h3 className='font-semibold text-xl mb-3'>Per Project</h3>
                <p className='text-zinc-600'>Perfect for brands that need a full-service launch, a one-off redesign, or a focused creative sprint.</p>
                <h2 className='font-bold text-3xl mb-1 '>From $1,499</h2>
            </div>
            <div className='flex gap-4 flex-col lg:flex-row lg:justify-between'>
                <div className='w-full lg:w-1/2 mt-8 space-y-4 '>
                    <h4 className='bg-zinc-200 text-zinc-700 w-fit py-2 px-4 rounded-full font-medium mb-8'>What&apos;s Included</h4>

                    <ul className='space-y-3'>
                        {whatsIncluded.map((item, index) => (
                            <li key={index} className='flex items-center gap-2  text-zinc-600 text-lg'>
                                <Check className='h-6 w-6 text-zinc-800' />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-full lg:w-1/2 mt-8 space-y-4 '>
                    <h4 className='bg-zinc-200 text-zinc-700 w-fit py-2 px-4 rounded-full font-medium mb-8'>Popular Services</h4>

                    <ul className='list-disc space-y-3'>
                        {pricingPlans.map((item, index) => (
                            <li key={index} className='flex flex-row justify-between items-center gap-2  text-zinc-700 text-xl'>
                                <span className='flex items-center gap-2'>
                                    <CircleSmall fill='black' stroke='white' size={16} />
                                    {item.service}
                                </span>
                                <span className='text-zinc-500 font-semibold'>
                                    from ₹{item.pricingRupees}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-8 text-lg'>
                <p className='text-zinc-600 py-2 md:w-fit md:order-2'>We&apos;ll tailor the quote to your timeline, goals, and budget.</p>
                <button
                    onMouseEnter={onMouseEnterGetAQuote}
                    onMouseLeave={onMouseLeaveGetAQuote}
                    className='flex justify-center items-center gap-2 w-full md:max-w-xs py-4 bg-black text-white text-center rounded-full md:order-1
                    h-16 overflow-y-hidden
                    '>
                    <CircleSmall fill='white' stroke='white' size={16} />
                    <div id='get-quote' className=' h-22 self-start flex flex-col space-y-5.5'>
                        <span>
                            Get a Custom Quote
                        </span>
                        <span>
                            Get a Custom Quote
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Pricing
