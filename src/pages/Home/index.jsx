import React , { useRef }from 'react';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import Navbar from "../../components/common/Header";
import Footer from '../../components/common/Footer';
import CartCountButton from '../../components/common/CartCountButton';
import { menuItemsData } from '../../components/common/Menu/data';
import TopBrand from '../../components/common/TopBrand';
import Offers from '../../components/common/Offers';

const Home = () =>
{
    const menuRef = useRef();
    
    const handleScrollMenu = () =>
    menuRef.current.scrollIntoView({behaviour:'smooth'})

    return( 
    <div> 
        <Navbar handleScrollMenu={handleScrollMenu}/>
        <Banner handleScrollMenu={handleScrollMenu}/>
        <h2 style={{marginTop:"35px", padding: "25px"}}>Menu</h2>
        <Menu list={menuItemsData} ref={menuRef}/>
        <h2 style={{marginTop:"35px", padding: "25px"}}>Top Brands</h2>
        <TopBrand />
        <h2 style={{marginTop:"35px", padding: "25px"}}>Offers</h2>
        <Offers />
        <Footer />
        <CartCountButton />
    </div>
    );
};

export default Home;