
import React from 'react';
import footerStyle from './Footer.module.css';
import { ReactComponent as InstaSvg } from "../../assets/Footer/footer-insta.svg";
import { ReactComponent as WhatsappSvg } from "../../assets/Footer/footer-whatsapp.svg";

const Footer = () => {
  return (
    <footer>
      <h2>Contact</h2>
      <div className={footerStyle.cards}>
      <div className={footerStyle.info}>
        <div className={footerStyle.infoItem}>
          <span>Phone</span>
          <h3>+7 (499) 350-66-04</h3>
        </div>
        <div className={footerStyle.infoItem}>
          <span>Socials</span>
          <div className={footerStyle.socials}>
            <InstaSvg />
            <WhatsappSvg />
          </div>
        </div>
        <div className={footerStyle.infoItem}>
          <span>Address</span>
          <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
        </div>
        <div className={footerStyle.infoItem}>
          <span>Working Hours</span>
          <h3>24 hours a day</h3>
        </div>
      </div>

      <div className={footerStyle.mapContainer}>
        <iframe
          className={footerStyle.iframeStyle}
          src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Dubininskaya%20Street,%2096,%20Moscow,%20115093&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
          frameborder="0"
        />
      </div>
      </div>
    </footer>
  );
}

export default Footer;
