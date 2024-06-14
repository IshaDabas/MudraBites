import styles from "../style";
import { robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-black ss:leading-[100.8px] leading-[55px]">
            Nidhi Software Guru <br className="sm:block hidden" />{" "}
            <span className="text-greyy text-[35px]">- MudraBites ERP</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[2000px] mt-5`}>
          Nidhi Mutual Benefit Company deals in complex financial activities
          among its members and hence the data of the members is highly
          important and you need to have a specialized nidhi company software to
          handle the nidhi company business operations. If you are really
          serious about the building a finance business then you must have
          proper financial statements and accounting reports. We are the most
          prestigious nidhi company software development company in Delhi.
          MudraBites - Best Nidhi Software has the best user interface and best
          technologically superior software in the market developed by the best
          experts of Digisoft IT Solutions LLP, Delhi, INDIA MudraBites is
          recognised for best speeding up, best improving efficiency and best
          effectiveness of your daily operational work.{" "}
          <br className="sm:block hidden" />
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-5 relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-[70%] h-[90%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;
