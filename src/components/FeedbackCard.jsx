
const FeedbackCard = ({ content, name, title, h3 }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-greyy-gradient">
    <p className="font-poppins font-bold text-center font-normal xs:text-[20.45px] text-[20.45px] xs:leading-[26.58px] leading-[21.58px] text-bg-grey-color1 uppercase ml-3">
      {h3}
    </p>

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 ">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[25px] leading-[40px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[25px] leading-[24px] text-bg-grey-color1">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
