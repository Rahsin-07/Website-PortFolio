import React from "react";
import "./Usecases.css"; // Ensure this file is correctly linked

const UseCases = () => {
  return (
    <div className="usecase-container">
      <div className="usecase-head">
        <h3>Case Studies</h3>
        <p> Explore Real-life Examples of our proven digital marketing success through Our Case Studies</p>
      </div>

      <div className="usecase-content">
        <div className="inside-content">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a href="/">Case info →</a>
        </div>

        <div className="inside-content">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first-page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a href="/">Case info →</a>
        </div>

        <div className="inside-content">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a href="/">Case info →</a>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
