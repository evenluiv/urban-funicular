import React from "react";

interface CardProps {
    image: string;
    title: string;
    price: string;
    listItems: string[]
}

const PriceCard: React.FC<CardProps> = (

    {
        image,
        title,
        price,
        listItems
    }

) => {

    return (
        <div className="relative mx-auto w-5/6 max-w-80 h-80 bg-pink-50 shadow-lg rounded-xl">
            <div className="relative">
                <img
                 src={image} 
                 alt="sun-or-moon" 
                 className="absolute -top-12 left-1/2 transform -translate-x-1/2"
                 />
            </div>
            <div className="flex flex-col pt-12 pl-12 tablet:pl-14 gap-2">
                <h1 className="text-xl font-semibold">{title}</h1>
                <h2 className="text-md font-medium">{price}</h2>
                <ul className="flex flex-col list-disc gap-2">
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    ) 
}

export default PriceCard