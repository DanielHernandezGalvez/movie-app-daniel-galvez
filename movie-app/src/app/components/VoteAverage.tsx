import { useEffect } from "react";

interface VoteAverageProps {
  voteAverage: number;
}

const VoteAverage: React.FC<VoteAverageProps> = ({ voteAverage }) => {
  const formattedVoteAverage = voteAverage
    ? voteAverage.toFixed(1).replace(".", "")
    : "";
  const strokeDashoffset = 220 - (175 * parseFloat(formattedVoteAverage)) / 100;
  return (
    <div className="box">
      <div className="percent">
        <svg>
          <circle cx="25" cy="25" r="20"></circle>
          <circle
            cx="25"
            cy="25"
            r="20"
            style={{ strokeDashoffset: strokeDashoffset }}
          ></circle>
        </svg>{" "}
        <div className="number">
          <p>
            {formattedVoteAverage}
            <span>%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoteAverage;
