import React, { useEffect } from "react";
import "./RankPairs.css"; // Import the CSS file

const RankPairs = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("section button");
    const initial = document.querySelectorAll("button img").length / 2;
    let count = initial;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (count > 1) {
          document
            .querySelectorAll(`button img:nth-child(${count})`)
            .forEach((img) => {
              img.classList.add("fade-out");
            });

          count--;
        } else {
          // For demo purposes (looping images)
          count = initial;
          document.querySelectorAll(`button img`).forEach((img) => {
            img.classList.remove("fade-out");
          });
        }
      });
    });
  }, []);

  return (
    <section className="Section block padding">
      <div className="Wrapper block">
        <div className="RankContainer container block">
          <button className="Button rounded border truncate">
            <div className="ImgContainer block">
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-1.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-3.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-5.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-7.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-9.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-11.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-13.webp"
                alt="Halloween Celebration"
              />
            </div>
          </button>
          <button className="Button rounded border truncate">
            <div className="ImgContainer block">
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-2.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-4.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-6.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-8.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-10.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-12.webp"
                alt="Halloween Celebration"
              />
              <img
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/halloween-rank-pairs/images/img-14.webp"
                alt="Halloween Celebration"
              />
            </div>
          </button>
        </div>
        <div className="RowBelow">
          <p>Which will perform better the next 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default RankPairs;
