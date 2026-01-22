import React from 'react'
import Navbar from '../Home/Navbar'
import ProductView from './Details/ProductView'
import Footer from '../Home/Footer'

export default function Productid() {
  return (
   <div className="relative bg-black">
      <Navbar></Navbar>

      {/* <ProductDetailPage></ProductDetailPage> */}
      {/* <ProductView></ProductView> */}
      <ProductView></ProductView>
      <Footer></Footer>
    </div>
  )
}
