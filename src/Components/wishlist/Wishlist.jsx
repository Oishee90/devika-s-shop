import React from 'react';

import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import SijanProductCard from '../ShortCutModal/Sijan/ProductCard';

const Wishlist = () => {
    return (
<div>
    <Navbar />
            <div className='bg-[#F9EFD5] md:py-36 pt-32 md:px-32 px-2'>
           <div>
             <h3 className='canela font-bold text-[30px]'>My Wish list</h3>
             <p className='text-[20px] inter'>Your saved favorites, all in one place.</p>
           </div>

           <div className='grid md:grid-cols-4 grid-cols-1 mt-8 gap-8'>
            {
                [1,2,3,4,5,6,6,8,9,10].map(items => (
                    <div key={items}>
                        <SijanProductCard />
                    </div>
                ))
            }
           </div>
        </div>
        <Footer />
</div>
    );
};

export default Wishlist;