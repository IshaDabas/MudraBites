import React from "react";
import styles from "../style";

const Features = () => {
  return (
    <section
      id="Features"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-greyy-gradient rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col max-h-[600px] overflow-y-auto custom-scrollbar">
        <h2 className={`${styles.heading2} text-center`}>Features of MudraBites ERP</h2>
        <div className="mt-4">
          <div className="content">
            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
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
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
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
                  Member opening shares, folio no., Distinctive No.'s Details
                </li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>
                3. Nidhi Software - Advisor's and Collectors Management
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Advisor & Collectors Registration</li>
                <li>Advisor Position Adjustments (Manual & Automatic Both)</li>
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
                <li>Down Line Contributions</li>
                <li>Express Renewal Deposit Form</li>
                <li>Contributions Audit Trail Report</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>4. Nidhi Software - Transactions</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Fixed Deposit Contributions</li>
                <li>Recurring Deposit Contributions</li>
                <li>MIS Contributions Certificate</li>
                <li>Express Daily Deposit Installments Entry</li>
                <li>Daily Deposit Contribution Policy</li>
                <li>Approve Contributions before Printing</li>
                <li>Installment Receipt</li>
                <li>Approve Installment Receipt before Printing</li>
                <li>Advisors Field Expenses Reimbursement</li>
                <li>Collectors DDS Renewal Sheet</li>
                <li>Pigmy Interface for DDS Entries</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>5. Nidhi Software - Payouts</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Contributions Maturity Payment</li>
                <li>Advisor Incentive Payouts</li>
                <li>Payout in Cash and Cheque both</li>
                <li>Maturity Paid Report</li>
                <li>Advisor Wise Incentive Calculations</li>
                <li>Month Wise Incentive Calculations</li>
                <li>MIS Contributions Monthly Payment</li>
                <li>Paid MIP Payment Report</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>6. Nidhi Software - Loan Module</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Loan Customer Verification Form Entry</li>
                <li>Verification Form Scrutiny and Approvals</li>
                <li>Loan Application Entry</li>
                <li>Loan Approvals/Rejections</li>
                <li>Loan Payment/Disbursal Entry</li>
                <li>Printing of Loan Amortization Schedule</li>
                <li>Loan Type Master and Business Rules</li>
                <li>Loan Float / Reducing Interest</li>
                <li>Loan Fixed & Flexi Installments Plans</li>
                <li>Advance Loan Installment Recovery Adjustments</li>
                <li>Loan Installment Recovery Entry</li>
                <li>Loan Closures Entry</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>7. Nidhi Software - Print Module</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Contribution Certificate Print</li>
                <li>Cash Receipt Print</li>
                <li>Passbook Print Setup</li>
                <li>Passbook Reprint Setup</li>
                <li>Statement Print</li>
                <li>Share Certificate Printing</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>8. Nidhi Software - SMS Integration</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Advisors Joining Welcome SMS</li>
                <li>Down line Wise Sms</li>
                <li>New Contribution Policy SMS</li>
                <li>Scheme wise SMS</li>
                <li>New RD Receipt wise SMS</li>
                <li>Installment Reminder SMS</li>
                <li>Saving Account Opening SMS</li>
                <li>Birthday SMS</li>
                <li>Loan Installment Reminder</li>
                <li>New Member Welcome SMS</li>
                <li>OTP Generation SMS</li>
                <li>Saving Account Transaction SMS</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>9. Nidhi Software - User Manager</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Branch Master</li>
                <li>Change Self Password</li>
                <li>State City Master</li>
                <li>Region Master</li>
                <li>Create Users</li>
                <li>Designation Master</li>
                <li>Designation Role</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>10. Nidhi Software - Saving Account Management</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Saving Account Master</li>
                <li>Saving Account New Account</li>
                <li>Saving Account Report</li>
                <li>Transaction Saving Account</li>
                <li>Cheque Management</li>
                <li>Balance Information</li>
                <li>Saving Account Statement</li>
                <li>Account Statement</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>
                11. Nidhi Software - Simple Loan & Mortgage Loan Processing
                Module
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Loan Master</li>
                <li>New Loan</li>
                <li>Approve Loan Application</li>
                <li>Loan Installment</li>
                <li>Loan Closing Details</li>
                <li>Loan Defaulter List</li>
                <li>Due Loan Installment Reminder</li>
                <li>Loan Repayment Schedule</li>
                <li>Loan Issue Cheque</li>
                <li>Loan Penalty Report</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>12. Nidhi Software - Additional Features</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Bank Reconciliation</li>
                <li>Financial Year Closing</li>
                <li>Member ID Card Print</li>
                <li>Dividend Distribution</li>
                <li>Member Nomination Details</li>
                <li>Passbook Issue Register</li>
                <li>Application Form Issue Register</li>
                <li>Cheque Book Issue Register</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>
                13. Nidhi Software - Employees Salary Management Module
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Position Master</li>
                <li>Employee Master</li>
                <li>Salary Making</li>
                <li>Advance Management</li>
                <li>Manual Increment</li>
                <li>Salary Report</li>
                <li>Increment Report</li>
                <li>Leave Processing</li>
                <li>Advance Payment Report</li>
                <li>Salary Processing</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>
                14. Nidhi Software - Integrated Financial Accounting
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Group Ledger Account</li>
                <li>Sub Group Accounts</li>
                <li>Payment Voucher</li>
                <li>Journal Voucher</li>
                <li>Receipt Voucher</li>
                <li>Voucher Report</li>
                <li>Transfer to Profit And Loss Account</li>
                <li>Balance Sheet</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>15. Nidhi Software - Members Share Management</strong>
              <ul className="list-disc list-inside mt-4">
                <li>Share Allotment and Transfer Entries</li>
                <li>Member Wise Share Reports</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>16. Nidhi Software - User Access Control Security</strong>
              <ul className="list-disc list-inside mt-4">
                <li>User Permissions</li>
                <li>Role Master</li>
                <li>Branch Wise User Permissions</li>
                <li>Role Permissions</li>
                <li>Client Access Approval System</li>
                <li>Change User Password</li>
              </ul>
            </div>

            <div className={`${styles.paragraph} max-w-[1500px] mt-2`}>
              <strong>
                17. Nidhi Software - Manage Multiple Branch Operations
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Lock Specific Branch</li>
                <li>Lock All Branches</li>
                <li>Branch Complaints Handling</li>
                <li>Define Weekly Off</li>
                <li>Branch Notice Board Scheduler</li>
                <li>Branch Master &amp; Branch Permissions</li>
                <li>Saving Account Statement</li>
                <li>Installment Deposit of Self Policy</li>
                <li>Branch Specific Business Rules Implementations</li>
                <li>Branch Wise Login Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


