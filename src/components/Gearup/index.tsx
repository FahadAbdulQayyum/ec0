import React from 'react';
// import Counter from '../Counter';
import { CarouselImage } from '../Carousel';

const GearUp = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center space-y-6">
            {/* Section for Title and Buttons */}
            <section className="flex flex-col items-center space-y-6">
                {/* <h1 className="text-3xl md:text-4xl font-bold font-sans">Gear Up</h1> */}
                <h1 className="text-xl font-medium font-sans text-left w-full">Gear Up</h1>
                {/* Buttons */}
                <div
                    className="flex flex-col sm:flex-row w-full justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                // className="flex flex-col sm:flex-row w-[8%] justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-right"
                >
                    <span
                        // className="w-[20%] sm:w-1/2 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-600"
                        className="w-full sm:w-1/2 py-2 text-black"
                    >
                        <button
                            className="text-center bg-gray-300 hover:bg-gray-600"
                        >
                            {'>'}
                        </button>
                    </span>
                    <span
                        className="w-full sm:w-1/2 py-2 text-black"
                    // className="w-[20%] sm:w-1/2 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-600"
                    >
                        <button
                            className="text-center bg-gray-300 hover:bg-gray-600"
                        >
                            {'>'}
                        </button>
                    </span>
                </div>
            </section >

            {/* Section for Carousel Images */}
            < section className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                <CarouselImage
                    flash={true}
                    data={[
                        {
                            image: '/assets/best-nike-1.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-2.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-3.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-3.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-3.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                    ]}
                />
                <CarouselImage
                    flash={true}
                    data={[
                        {
                            image: '/assets/best-nike-1.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-2.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-3.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-3.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                        {
                            image: '/assets/best-nike-3.svg',
                            title: 'Nike Air Max Pulse',
                            category: "Women's Shoes",
                            price: '13 995',
                        },
                    ]}
                />
            </section >
        </div >
    );
};

export default GearUp;
