import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Software For <br className="sm:block hidden" /> Nidhi Company
      </h2>
      <p className={`${styles.paragraph} max-w-[870px] mt-5`}>
        We specialize in developing Software For Nidhi Company that will
        automate your business development, building your business processes
        more effective and responsive, and saving your time and money. We
        believe in the development of quality software products and services
        delivered on time and in conformance with customer exact needs. We shall
        distinguish and respect our clients, their right to receive quality
        products and services on time and within budget.
      </p>
      <p className={`${styles.paragraph} max-w-[870px] mt-5`}>
        MudraBites ERP is a specialized software for all Credit Cooperative
        Societies, Nidhi Mutual Benefit companies and Micro Finance Companies.
        It is the best software solution for credit cooperative society, nidhi
        mutual benefit company and Micro Finance company available in the market
        today for sale in Delhi, Jaipur, Lucknow, Indore and throughout India.
        MudraBites software can be customized to meet the customers exact
        requirements for their Nidhi Company, Credit Co-operative Society or
        Micro Finance Company.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[90%] h-[90%]" />
    </div>
  </section>
);

export default CardDeal;
