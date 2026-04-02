import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">
              AFIS<span>SHOP</span>
            </h2>
            <p>
              Elevating your digital lifestyle with curated minimalist
              essentials.
            </p>
            <div className="footer-socials">
              <button
                type="button"
                aria-label="Github"
                className="footer-social-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55
  0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7
  1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.65
  0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.17a10.9 10.9 0 012.87-.39
  c.97 0 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.6.23 2.78.11 3.07.73.8 1.18 1.82 1.18 3.07
  0 4.39-2.69 5.36-5.25 5.64.41.36.77 1.08.77 2.18 0 1.57-.01 2.83-.01 3.21 0 .3.21.66.79.55A11.51
  11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                  />
                </svg>
              </button>
              <button aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21.5l-7.19 8.21L22 22h-6.828l-5.35-7.007L3.5 22H.244l7.69-8.79L2 2h6.828l4.83 6.35L18.244 2zm-1.197 18h1.886L7.026 3.88H5.003L17.047 20z" />
                </svg>
              </button>
              <button href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75
  5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75
  3.75 0 0016.25 4h-8.5z"
                  />
                  <path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                  <circle cx="17.5" cy="6.5" r="1.25" />
                </svg>
              </button>
              <button href="#" aria-label="Linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5
  8h3.98V24H.5V8zM8.5 8h3.81v2.18h.05c.53-1 1.83-2.18 3.77-2.18 4.03 0 4.77 2.65 4.77
  6.1V24h-3.98v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.5V8z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Shop</h3>
              <a href="#">New Arrivals</a>
              <a href="#">Best Sellers</a>
              <a href="#">Featured</a>
            </div>
            <div className="footer-column">
              <h3>Support</h3>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AFISSHOP. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
