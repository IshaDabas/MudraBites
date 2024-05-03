import styles from "../style";

const CTA = () => (
  <section
    id="WhyUs"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-greyy-gradient rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Why MudraBites ERP ?</h2>
      <p className={`${styles.paragraph} max-w-[1500px] mt-2`}>
        Customer/Membership Registration & Share Management, Deposits, FD, RD,
        DDS, Monthly Income Scheme, Loans Advances Group Loans, Business Loans,
        Personal Loans, UnSecured Loans, Secured Loans, Mortgage Loans, Loan on
        Deposits Multiple Branches/Cost Centres with Unlimited Users with Role
        based & Mac Address Based Security Model Integrated with Accounts (Trial
        & Balance Sheet), Stock and Payroll Management System Audit Trail &
        Tracking of User Activities with keeping history of all major financial
        activities in the system Fully GST Compliant & Taxing Support & TDS
        Deductions with various GST & Tax Reports Admin & Advisors & Business
        Logins, SMS & Email Integrations, Web Reporting Interface & Android
        Mobile Apps Fast, Accurate, Flexible, Robust & Secured Nidhi Software
        with Data Security is available in Online & Offline Mode Latest
        Technologies, User Friendly Interface, Easy to understand and easy to
        deploy based on the .Net Technologies
      </p>
    </div>
  </section>
);

export default CTA;
