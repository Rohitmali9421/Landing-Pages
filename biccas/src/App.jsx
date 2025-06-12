import React from 'react'
import Header from './Components/Header'
import Herosection from './Components/Herosection'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Footer from './Components/Footer'

function App() {
    return (
        <div>
            <Header />
            <Herosection />
            <Section1 />
            <Section2 />
            <div className='relative overflow-hidden'>
                {/* Blurred background circle */}
                <div className="absolute top-1/2 -right-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[50rem] h-[50rem] bg-emerald-400/20 rounded-full blur-3xl z-0">
                </div>

                {/* Foreground sections */}
                <Section3 />
                <Section4 />
            </div>

            <Footer />
        </div>
    )
}

export default App
