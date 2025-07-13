import React from 'react'

const ServiceCards = ({ title = "Title", desc="Desc" }) => {
    return (
        <div>
            <div className="flex flex-row justify-between items-center relative container mx-auto my-12 py-8 px-12 bg-white rounded-lg shadow-lg ">
                <h2 className="sr-only">Services</h2>
                <p className="tracking-tight max-w-lg font-bold">{desc}</p>
                <h1 className="font-semibold  mb-6">{title}</h1>
            </div>
        </div>
    )
}

export default ServiceCards
