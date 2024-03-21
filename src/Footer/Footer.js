import "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <p className="footer-text">Find us on:</p>
          <ul className="footer-text">
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <br />
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <br />
            <li>
              <a href="https://www.tiktok.com">TikTok</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-text">
            <i></i>Fireplace Palace
          </p>
          <a className="footer-text" id="email">
            info@firepalace.co.uk
          </a>
        </div>
      </footer>
    </>
  );
}
