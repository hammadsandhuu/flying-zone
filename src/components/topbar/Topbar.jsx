import React from "react";
import { EmailIcon, TwitterXIcon, TikTokIcon } from "@/components/common/SvgIcons";

const Topbar = () => {
  return (
    <>
      <div className="top-bar style-2">
        <div className="topbar-left two">
          <div className="icon">
            <EmailIcon width={27} height={27} />
          </div>
          <div className="content">
            <span>Email:</span>
            <a href="mailto:ifo@example.com">info@flyingzone.ae</a>
          </div>
        </div>
        <p>
          50% Off Your Next Trip. Hurry Up For your new Tour!{" "}
          <a href="#">Book Your Tour</a>{" "}
        </p>
        <div className="topbar-right">
          <div className="social-icon-area">
            <ul>
              <li>
                <a href="https://www.facebook.com/flyingzonetraveluae">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/flyingzonellcuae">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@flyingzonellc">
                  <TikTokIcon
                    width={10}
                    height={10}
                    fill="currentColor"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
