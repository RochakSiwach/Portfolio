import React from "react";
import "./Profile.css";
import Avatar from "../../assets/king2.jpg";
import Resume from "../../assets/Rochak_Siwach.pdf";
import { Download } from "lucide-react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={Avatar} alt="avatar" />
          </div>

          <div className="profile-info">
            <h2>Rochak Siwach</h2>
            <p>@siwachshaab</p>
          </div>

          <a
            href={Resume}
            download="Rochak_Siwach.pdf"
            className="download-btn"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        <p className="profile-description">
          Research Intern{" "}
          <a href="https://nitdelhi.ac.in/" target="_blank" rel="noreferrer">
            @NITDELHI
          </a>
          {" | "}
          Frontend Developer Intern @MNT Dreams Pvt. Ltd.
        </p>

        <div className="profile-divider"></div>

        <i style={{ color: "grey", textAlign: "center", }}>
          A man with no money is only loved by his mother.
        </i>
      </div>
    </div>
  );
};

export default Profile;
