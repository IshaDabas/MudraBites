
import React from "react";
import styles from "../style";

const Features = () => {
  return (
    <section
      id="Features"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-greyy-gradient rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Features of MudraBites ERP</h2>
        <div className="marquee mt-4">
          <div className="marquee-content">
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className={`${styles.paragraph} max-w-[1500px] mt-2`}>
                    <strong>1. Nidhi Software - Scheme Management</strong>
                    <ul className="list-disc list-inside mt-4">
                      <li>Fixed Deposits Contributions</li>
                      <li>Recurring Deposits Contributions</li>
                      <li>Monthly Income Scheme Contributions</li>
                      <li>Daily Deposit Contributions</li>
                      <li>Weekly Deposit Scheme Contributions</li>
                      <li>MIS Combo Contributions schemes</li>
                      <li>Lock Specific Schemes for Entry</li>
                      <li>Scheme Wise Prematurity management</li>
                      <li>Branch Wise Contribution Schemes</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className={`${styles.paragraph} max-w-[1500px] mt-2`}>
                    <strong>2. Nidhi Software - Membership Management</strong>
                    <ul className="list-disc list-inside mt-4">
                      <li>Members Registration</li>
                      <li>Members KYC Details</li>
                      <li>Members List Report</li>
                      <li>Members Photo, Signature Upload</li>
                      <li>Member Complete Summary Report</li>
                      <li>Membership Application Entry</li>
                      <li>Member wise contributions/Deposit report</li>
                      <li>
                        Member opening shares, folio no., Distinctive No.'s
                        Details
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className={`${styles.paragraph} max-w-[1500px] mt-2`}>
                    <strong>
                      3. Nidhi Software - Advisor's and Collectors Management
                    </strong>
                    <ul className="list-disc list-inside mt-4">
                      <li>Advisor & Collectors Registration</li>
                      <li>
                        Advisor Position Adjustments (Manual & Automatic Both)
                      </li>
                      <li>Activate/DeActivate Advisors</li>
                      <li>Designation/Position/Rank wise Advisors list</li>
                      <li>Advisor Downline tree view</li>
                      <li>Advisor Upline tree view</li>
                      <li>Member to Advisor Creation facility</li>
                      <li>Advisor Promotion History</li>
                      <li>Transfer Advisor Contributions</li>
                      <li>Advisor Promotions/Demotions (Manual, Auto)</li>
                      <li>Transfer Advisor Incentive to Saving Account</li>
                      <li>Extend FD Contributions</li>
                      <li>Advisor remuneration entry and reports</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

