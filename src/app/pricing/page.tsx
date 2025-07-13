import Pricing from '@/components/sections/Pricing'
import React from 'react'

const PricingPage = () => {
    return (
        <div className="container mx-auto rounded-4xl bg-zinc-100 px-6 py-8 md:px-12 lg:py-16 xl:py-20">
            <div className="mx-auto flex flex-col justify-between gap-8 md:flex-row md:items-end mb-16 xl:mb-24">
                <h2 className="text-5xl font-bold sm:text-7xl md:text-9xl">
                    Pricing
                </h2>
                <p className="max-w-md text-xs md:py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas consequuntur dicta deleniti nulla. Veritatis eveniet
                    quos qui dolorem ipsum itaque officiis soluta?
                </p>
            </div>
            <Pricing />
        </div>
    )
}

export default PricingPage
