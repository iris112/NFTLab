import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

//react functional component
const UserTopSeller = ({ user }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="author_list_pp" onClick={() => {navigate(`/Artist/${user.id}`);}}>
        <span>
          <img className="lazy" src={ user.avatar.url} alt="" />
          {/* <i className="fa fa-check"></i> */}
        </span>
      </div>
      <div className="author_list_info" onClick={() => navigate("/Artist/" + user.id, "_self")}>
        <h4
          style={{ color: "#fff" }}
          className="mb-0"
        >
          {user.username}
        </h4>
        {/* <span className="bot">{user.author_sale.sales} ETH</span> */}
        <span className="bot" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span style={{ fontWeight: "bold", color: "#fff" }}>
            {user.nfts.length}
          </span>{" "}
          NFTs
        </span>
      </div>
    </>
  );
};

export default memo(UserTopSeller);
