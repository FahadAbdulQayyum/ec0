import React from 'react';
// import Counter from '../Counter';
import { CarouselImage } from '../Carousel';

const FlashSale = () => {
    const products = [
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
    ];

    return (
        <div className="p-4 md:p-8 lg:p-standardSize flex flex-col justify-center space-y-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans">
                    Best of Air Max
                </h1>
                {/* <Counter /> */}
            </div>

            {/* Carousel Section */}
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
                <CarouselImage flash={true} data={products} />
            </div>

            {/* Optional Button */}
            <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded hover:bg-tertiary-dark transition-all">
                    View All Products
                </button>
            </span>
        </div>
    );
};

export default FlashSale;









// import React from 'react'
// // import Counter from '../Counter'
// import { CarouselImage } from '../Carousel'

// const FlashSale = () => {
//     const products = [
//         {
//             image: '/assets/best-nike-1.svg',
//             title: 'Nike Air Max Pulse',
//             category: 'Women\'s Shoes',
//             price: '13 995'
//         },
//         {
//             image: '/assets/best-nike-2.svg',
//             title: 'Nike Air Max Pulse',
//             category: 'Women\'s Shoes',
//             price: '13 995'
//         },
//         {
//             image: '/assets/best-nike-3.svg',
//             title: 'Nike Air Max Pulse',
//             category: 'Women\'s Shoes',
//             price: '13 995'
//         },
//         {
//             image: '/assets/best-nike-3.svg',
//             title: 'Nike Air Max Pulse',
//             category: 'Women\'s Shoes',
//             price: '13 995'
//         },
//         {
//             image: '/assets/best-nike-3.svg',
//             title: 'Nike Air Max Pulse',
//             category: 'Women\'s Shoes',
//             price: '13 995'
//         },
//     ];

//     return (
//         <div className="p-standardSize flex flex-col justify-center space-y-6">
//             {/* <span className="text-tertiary flex items-center font-bold"><div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>Today's</span> */}
//             <div className="flex justify-between items-center">
//                 <h1 className="text-3xl font-bold font-sans">Best of Air Max</h1>
//                 {/* <Counter /> */}
//             </div>
//             <div className="flex space-x-4">
//                 <CarouselImage flash={true} data={products} />
//             </div>
//             {/* <span className="text-center">
//                 <button className="bg-tertiary p-4 text-white rounded">View All Products</button>
//             </span> */}
//         </div>
//     );
// };

// export default FlashSale;
