import React from "react";
import "./award.css";

const Award = () => {
    return (
        <div className="award_container d-flex align-items-center flex-wrap justify-content-between">
            <div className="award_item ">
                <AwardItem
                    year="2020"
                    title="Best Front End Developer"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, iure!"
                />
            </div>

            <div className="award_item ">
                <AwardItem
                    year="2020"
                    title="Best Front End Developer"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, iure!"
                />
            </div>

            <div className="award_item">
                <AwardItem
                    year="2020"
                    title="Best Front End Developer"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, iure!"
                />
            </div>

            <div className="award_item">
                <AwardItem
                    year="2020"
                    title="Best Front End Developer"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, iure!"
                />
            </div>
        </div>
    );
};

const AwardItem = ({ year, title, text }) => {
    return (
        <div className="single_award">
            <div className="award_year">2020</div>
            <h6 className="award_title">
                the Best frontend -<span>{text}</span>
            </h6>
        </div>
    );
};

export default Award;
