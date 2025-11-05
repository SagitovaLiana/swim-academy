import { useLanguage } from "../../hooks/useLanguage";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

return (
  <footer className="footer" id="contacts">
    <div className="container footer__container">
      

      <address className="footer__address" itemScope itemType="https://schema.org/PostalAddress">

          <span className="footer__academy-name">PT Bali Swimming Academy</span><br />
          <a
            href="tel:+6281337186534"
            itemProp="telephone"
            className="footer__academy-number"
          >
            +62 813 3718 6534
          </a>

                <p itemProp="footer__academy-street">
          Jl. Segara Wangi No.36, Jimbaran, Kec. Kuta, Kabupaten Badung, Bali 80361
        </p>
      </address>

      <p className="footer__rights">
        © {new Date().getFullYear()} PT Bali Swimming Academy. {t("all_rights_reserved")}
      </p>
    </div>
  </footer>
);
};

export default Footer;
