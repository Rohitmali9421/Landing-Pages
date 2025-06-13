import Baner from './components/Baner'
import Bestsellers from './components/Bestsellers/Bestsellers'
import Blogs from './components/Blogs/Blogs'
import Audio from './components/boltAudio/Audio'
import Brands from './components/Brands/Brands'
import Category from './components/Category/Category'
import Deals from './components/Deals/Deals'
import Discount from './components/Discount/Discount'
import Features from './components/Features/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NewLaunches from './components/NewLaunches/NewLaunches'
import Press from './components/Press/Press'
import Trending from './components/Trending/Trending'


function App() {

  return (
    <>
      <Navbar/>
      <Baner/>
      <Brands/>
      <Features/>
      <NewLaunches/>
      <Bestsellers/>
      <Discount/>
      <Category/>
      <Trending/>
      <Deals/>
      <Audio/>
      <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722359146/Firebolt-landing-page/mdd6yuc40srihzbzoygy.webp" className='md:p-8 p-2 border-t' alt="" />
      <Blogs/>
      <Press/>
      <Footer/>
      
        
    </>
  )
}

export default App
