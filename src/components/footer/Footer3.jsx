import Link from "next/link";
import React from "react";
import InquiryPhoneIcon from "../icons/InquiryPhoneIcon";
import SendMailIcon from "../icons/SendMailIcon";
import LocationAddressIcon from "../icons/LocationAddressIcon";
import TwitterXIcon from "../icons/TwitterXIcon";
import footerData from "../../data/footer.json";

const Footer3 = () => {
  const {
    logo,
    cta,
    quickLinks,
    contact,
    about,
    paymentPartner,
    socials,
    copyright,
    bottomLinks,
  } = footerData;

  return (
    <>
      <footer className="footer-section style-3">
        <div className="container one">
          <div className="footer-top">
            <div className="row g-lg-4 gy-5 justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <h3 dangerouslySetInnerHTML={{ __html: cta.title }}></h3>
                  <Link href={cta.buttonLink} className="primary-btn1">
                    {cta.buttonText}
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h5>{quickLinks.title}</h5>
                  </div>
                  <ul className="widget-list">
                    {quickLinks.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.link}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-md-start">
                <div className="footer-widget">
                  <div className="single-contact mb-30">
                    <div className="widget-title">
                      <InquiryPhoneIcon />
                      <h5>{contact.phone.title}</h5>
                    </div>
                    <a href={contact.phone.link}>{contact.phone.number}</a>
                  </div>
                  <div className="single-contact mb-35">
                    <div className="widget-title">
                      <SendMailIcon />
                      <h5>{contact.emails[0].title}</h5>
                    </div>
                    {contact.emails.map((email, index) => (
                      <a key={index} href={email.link}>
                        {email.address}
                        {index < contact.emails.length - 1 && <br />}
                      </a>
                    ))}
                  </div>
                  <div className="single-contact">
                    <div className="widget-title">
                      <LocationAddressIcon />
                      <h5>{contact.addresses[0].title}</h5>
                    </div>
                    {contact.addresses.map((addr, index) => (
                      <a
                        key={index}
                        href={addr.link}
                        dangerouslySetInnerHTML={{ __html: addr.text }}
                      ></a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h5>{about.title}</h5>
                  </div>
                  <p>{about.description}</p>
                  <div className="payment-partner">
                    <div className="widget-title">
                      <h5>{paymentPartner.title}</h5>
                    </div>
                    <div className="icons">
                      <ul>
                        {paymentPartner.icons.map((item, index) => (
                          <li key={index}>
                            <img src={item.img} alt={item.alt} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
                <ul className="social-list">
                  {socials.map((social, index) => (
                    <li key={index}>
                      <a href={social.link}>
                        {social.type === "twitter-x" ? (
                          <TwitterXIcon />
                        ) : (
                          <i className={social.icon} />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
                <p>
                  ©Copyright {copyright.year} {copyright.company} | Design By{" "}
                  <a href={copyright.designerLink}>{copyright.designer}</a>
                </p>
                <div className="footer-right">
                  <ul>
                    {bottomLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.link}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer3;
