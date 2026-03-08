import Link from "next/link";
import React from "react";
import TwitterXIcon from "../icons/TwitterXIcon";
import footerData from "../../data/footer.json";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import TabbyIcon from "../icons/TabbyIcon";
import TamaraIcon from "../icons/TamaraIcon";

const Footer = ({ style }) => {
  const {
    cta,
    quickLinks,
    hajjUmrahLinks,
    serviceLinks,
    contact,
    about,
    paymentPartner,
    socials,
    copyright,
    bottomLinks,
  } = footerData;

  return (
    <footer className={`footer-section ${style}`}>
      <div className="container">
        <div className="footer-top">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 dangerouslySetInnerHTML={{ __html: cta.title }}></h3>
                <p className="">{about.description}</p>
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
                      <Link href={link.link} className="d-flex align-items-center gap-1">
                        <ChevronRight size={14} />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>{hajjUmrahLinks.title}</h5>
                </div>
                <ul className="widget-list">
                  {hajjUmrahLinks.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.link} className="d-flex align-items-center gap-1">
                        <ChevronRight size={14} />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>{serviceLinks.title}</h5>
                </div>
                <ul className="widget-list">
                  {serviceLinks.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.link} className="d-flex align-items-center gap-1">
                        <ChevronRight size={14} />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>{about.title}</h5>
                </div>
                <div className="single-contact d-flex align-items-center gap-2">
                  <Phone size={18} color="white" />
                  <a href={contact.phone.link}>{contact.phone.number}</a>
                </div>
                <div className="single-contact d-flex align-items-center gap-2">
                  <Mail size={18} color="white" />
                  <a href={contact.email.link} style={{ display: "block" }}>
                    {contact.email.address}
                  </a>
                </div>
                <div className="single-contact">
                  {contact.addresses.map((address, index) => (
                    <div key={index} className="d-flex align-items-start gap-2">
                      <MapPin size={18} color="white" className="mt-1" />
                      <a href={address.link} style={{ display: "block" }}>
                        {address.text}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="payment-partner mt-30">
                  <div className="widget-title">
                    <h5>{paymentPartner.title}</h5>
                  </div>
                  <div className="icons">
                    <ul className="d-flex align-items-center gap-2 list-unstyled flex-wrap">
                      {paymentPartner.icons.map((item, index) => (
                        <li key={index} style={{ display: "flex", alignItems: "center" }}>
                          {item.alt === "tabby" ? (
                            <div style={{ height: "30px" }}><TabbyIcon /></div>
                          ) : item.alt === "tamara" ? (
                            <div style={{ height: "30px" }}><TamaraIcon /></div>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
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
  );
};

export default Footer;