import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-4 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="mudraBites"
            className="w-[60%] h-[30%] object-contain"
          />
        </div>

        <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[200px]"
            >
              <h4 className="font-poppins font-medium font-bold text-[20px] leading-[27px] text-black">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[18px] leading-[24px] text-black hover:text-white cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-6" : "mb-0"
                    }`}
                    onClick={() => {
                      console.log("Opening link:", link.link);
                      window.open(link.link, "_blank");
                    }}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-8 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
          © Copyright 2016|Digisoft IT Solutions LLP , Delhi, INDIA || WhatsApp
          us at: +91-9811065255
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[25px] h-[25px] object-contain cursor-pointer bg-grey-color1 rounded-[10px] box-shadow ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
 
};

export default Footer;
