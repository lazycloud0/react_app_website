import "react";
import "./Footer.css";

// created left column with footer header with social media links 
// created right column with email
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
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.tiktok.com">TikTok</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-text">
            <i>Fireplace Palace</i>
          </p>
          <a className="footer-text" id="email">
            info@firepalace.co.uk
          </a>
        </div>
      </footer>
    </>
  );
}
