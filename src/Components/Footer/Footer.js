import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const Various = [
        {name: "Excelent Team" , link: "/emergency"},
        {name: "Regular Monitoring" , link: "/checkup"},
        {name: "Excelent" , link: "/personal-treatment"},
        {name: "All New Attarction" , link: "/tooth-extract"},
        {name: "World Tour" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
        {name: "JasonBarg" , link: "//google.com/map"},

       
    ]
    const Packages = [
        {name: "Dayly Package" , link: "/emergency"},
        {name: "Weekly Package" , link: "/checkup"},
        {name: "2 Days Package" , link: "/personal-treatment"},
        {name: "Extraction" , link: "/tooth-extract"},
        {name: "Reveal New Place" , link: "/checkup"},
        {name: "Forest" , link: "/checkup"}
    ]
    const services = [
        {name: "Beach Travel" , link: "/emergency"},
        {name: "Pyramid Visit" , link: "/checkup"},
        {name: "Kasmir Tour" , link: "/personal-treatment"},
        {name: "Swap Forest" , link: "/tooth-extract"},
        {name: "Ocean Dive" , link: "/checkup"},
        {name: "Fastival Celebreate" , link: "/checkup"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Various"} menuItems={Various}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Packages" menuItems={Packages}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;