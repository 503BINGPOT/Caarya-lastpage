import React from "react";
import "./Lastpage.css";
import TraitItem from './Trait.jsx';





export default function Lastpage() {
  return (
    <div className="container">
      <h1 className="heading">Marketing Coordinator</h1>

      <div className="subtext">Company Name</div>
      <div className="subtext">Project Name</div>
      <div className="tagline">Industry Safari</div>

      <div className="button-group">
        <button className="button">✏️ Edit Details</button>
        <button className="button">🗃️ Archive Job</button>
      </div>

      <div className="card">
        <div><strong>📍 Office Only:</strong> Gurugram, 10hrs / week</div>
        <div><strong>🕒 Fixed Work Schedule:</strong> 11:00 am - 7:00 pm</div>
        <div><strong>🎓 Academic Accommodation:</strong> Yes</div>
        <div><strong>📅 Work Experience:</strong> +4 Months</div>
        <div><strong>🧭 Level 1:</strong> Career Exploration</div>
      </div>

      <h2 className="section-title">About The Job</h2>
      <p className="paragraph">
        We are seeking a motivated and detail-oriented individual to join our
        team as a Junior Marketing Associate. In this role, you will assist in
        developing and executing marketing strategies to promote our products
        and services. Your responsibilities will include conducting market
        research, analyzing consumer trends, and collaborating with the
        marketing team to create impactful campaigns.
      </p>
      
      {/* Associated VCs Section */}
<div className="rewards-section">
  <div className="section-heading">Associated VCs</div>
  {["Associated VC_1", "Associated VC_2", "Associated VC_3"].map((vc, index) => (
    <div key={index} className="associated-vc">
      🖼️ {vc}
    </div>
  ))}
</div>


{/* Rewards & Benefits */}
<div className="rewards-container">
  <div className="section-heading">Rewards & Benefits</div>

  <div className="rewards-section">
    <div className="rewards-label">
      <img src="perks-icon.png" alt="Perks" /><br />
      Perks &<br />Compensation
    </div>
    <div className="rewards-items">
      <div className="reward-pill">💰 ₹5k per month</div>
      <div className="reward-pill">🪪 Letter of Recommendation <sup>*</sup></div>
      <div className="reward-pill">🚀 Pre Placement Offer <sup>*</sup></div>
      <div className="reward-pill">📄 4 Month Experience Letter</div>
    </div>
  </div>

  <div className="reward-note">* subject to performance</div>

  <div className="rewards-divider"></div>

  <div className="rewards-section">
    <div className="rewards-label">
      <img src="growth-icon.png" alt="Growth" /><br />
      Learning &<br />Growth
    </div>
    <div className="rewards-items">
      <div className="reward-pill">🧑‍🏫 Access to Mentors</div>
      <div className="reward-pill">🧭 Career Progression Roadmap</div>
      <div className="reward-pill">🔥 Strategic Ownership Opportunities</div>
      <div className="reward-pill">🧠 Involvement in Decision-Making</div>
    </div>
  </div>
</div>


{/* About the Project */}
<div className="about-section">
  <div className="section-heading">About The Project</div>
  <p className="about-text">
    Project Horizon is an innovative initiative aimed at redefining our brand's market presence...
  </p>
</div>

{/* About Innovatech Solutions */}
<div className="about-section">
  <div className="section-heading">About Innovatech Solutions</div>
  <p className="about-text">
    At Innovatech Solutions, we specialize in cutting-edge technology development and digital...
  </p>
</div>
{/* Industry Tags */}
<div className="industry-tags">
  <span className="tag outlined-pink">Education & Skill Development</span>
  <span className="tag outlined-pink">EdTech</span>
</div>

{/* Company Traits */}
<div className="trait-wrapper">
<div className="trait-container">
  <TraitItem
    title="Risk & Innovation"
    value="Conservative / Risk-Averse"
  />
  <TraitItem
    title="Pace Of Delivery"
    value="Steady / Consistent Pace"
    description="A steady pace creates a balanced work environment with predictable routines and regular deadlines. Expect a work setting where tasks follow a consistent schedule and you benefit from a rhythm that allows for progress and work-life balance."
    note="This is for you if you value a predictable work environment with regular feedback and a balanced approach to productivity."
  />
    <TraitItem
    title="Role & Priority Flexibility "
    value="Predictable Shifts"
      description=""
    note=""
  />
    <TraitItem
    title="Company Size"
    value="Small Team (1-20)"
          description=""
    note=""
  />
    <TraitItem
    title="Funding Status"
    value="Bootstrapped / Risk-Funded"
          description=""
    note=""
  />
      <TraitItem
    title="Organizational Lifecycle Stage"
    value="Growth / Scaling Stage"
          description=""
    note=""
  />
</div>
</div>
{/* Work Culture */}
<div className="work-culture">
  <h4>Work Culture</h4>
  <div className="culture-tags">
    {[
      "Lean / MVP-Focused", "Agile", "OKR-Driven", "Young",
      "Collaborative", "Chill", "Ambitious", "Flexible",
      "Creative", "Experimental", "Game Nights", "Daily / Weekly Standups",
      "Team Challenges / Contests"
    ].map((label, idx) => (
      <span key={idx} className="tag outlined-colored">{label}</span>
    ))}
  </div>
</div>

    </div>
  );
}
