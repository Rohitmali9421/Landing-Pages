import React from 'react'
import Card from '../Card';
import CardScrollLayout from '../CardScrollLayout';
function Deals() {

    return (
        <div className='w-full pt-10 border-t'>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold text-2xl md:text-4xl '>Bolt  </h1>
                <h1 className='font-bold text-2xl md:text-4xl text-orange-600'>Deals</h1>
            </div>
            <CardScrollLayout>
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358357/Firebolt-landing-page/m2qnlj8a16zw7p0gvcbi.webp" name="Dream " description="Android | Cellular Calling " price="₹4,499" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358413/Firebolt-landing-page/kzzpxdy801tkwd3qcxqe.webp" name="Case X series " description="49.5mm Display | BT Calling  " price="₹2,499" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358425/Firebolt-landing-page/owbx6wmpcvqis6pwqngc.webp" name="Oracle  " description="Android | Cellular Calling  " price="₹3,999" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358473/Firebolt-landing-page/perb90zdtlj4s1dcalm5.webp" name="4G Pro   " description="55mm Display | VoLTE " price="₹2,499" />
            </CardScrollLayout>

        </div>
    )
}

export default Deals
