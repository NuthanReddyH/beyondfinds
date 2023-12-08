import React from "react";
import "./About.css"; // Ensure your CSS file is correctly linked
import ImageOne from "../../assets/Video upload-pana.png"; // Update with actual image paths
import Connectivity from "../../assets/connectivity.jpg";
import Security from "../../assets/security.jpg";
import Trade from "../../assets/trade.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About BeyondFinds</h1>

      <section className="about-section">
        <div className="image-content">
          <img src={ImageOne} alt="Our Mission" />
        </div>
        <div className="text-content right-align">
          <h2>Welcome to BeyondFinds</h2>
          <p>
            BeyondFinds is an independent marketplace crafted for the modern
            retail and shopping experience. We connect buyers and sellers in a
            dynamic online space, offering unique features and benefits that
            make online trading efficient, secure, and enjoyable.
          </p>
          <p>
            Our mission is to provide a dedicated platform for buyers and
            sellers to discover, negotiate, and transact with ease and
            confidence. We aim to revolutionize the online marketplace by
            focusing on direct communication, enhanced visibility, and user
            engagement.
          </p>
        </div>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="three-columns">
        <div className="column">
            <img src={Connectivity} alt="Connecting Buyers and Sellers" />
            <h3>Connecting Buyers and Sellers</h3>
            <p>
              At BeyondFinds, we bridge the gap between buyers and sellers with our innovative marketplace. Our platform is designed to facilitate seamless transactions, allowing buyers to easily discover unique products and sellers to expand their reach. Our focus on user-friendly navigation ensures a smooth and enjoyable experience for all.
            </p>
          </div>
          
          <div className="column">
            <img src={Trade} alt="Revolutionizing Online Trade" />
            <h3>Revolutionizing Online Trade</h3>
            <p>
              We are revolutionizing online trade by introducing cutting-edge features that cater to the modern shopper’s needs. Our platform not only simplifies the buying and selling process but also provides tools for price comparison, direct communication, and efficient negotiation. This approach empowers our users to make informed decisions and trade confidently.
            </p>
          </div>
          
          <div className="column">
            <img src={Security} alt="Ensuring Privacy and Security" />
            <h3>Ensuring Privacy and Security</h3>
            <p>
              Security and privacy are paramount at BeyondFinds. We are committed to providing a safe and secure environment for our users. Our platform implements advanced security measures to protect user data and transactions. We believe in creating a trustworthy space where our users can trade without concern, ensuring peace of mind for both buyers and sellers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
