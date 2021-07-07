import React from 'react'
import { Footer } from './Footer'
import MetaTags from './MetaTags'
import Navbar from './Navbar'

export default function Layout({children}) {
    return (
        <div>
        
          <MetaTags/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
