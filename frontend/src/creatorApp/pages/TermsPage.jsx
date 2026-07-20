// pages/TermsPage.jsx
import { useNavigate } from "react-router-dom";
import "./TermsPage.scss";

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-page">
      <header className="terms-header">
        <button className="terms-header__back" onClick={() => navigate(-1)}>←</button>
        <h1 className="terms-header__title">Legal & Policies</h1>
      </header>

      <div className="terms-content">
        <section className="terms-section">
          <h2>Terms of Service</h2>
          <p>Welcome to Sarahaf's exclusive creator platform. By accessing our premium content and services, you agree to the following terms.</p>
          
          <h3>1. Content Access & Usage</h3>
          <p>All content provided—including 1-on-1 calls, VIP memberships, live streams, and exclusive posts—is strictly for personal, non-commercial use. Unauthorized recording, downloading, or distribution of this content is strictly prohibited and will result in a permanent ban.</p>
          
          <h3>2. User Conduct</h3>
          <p>Respectful behavior is required in all chats, comments, and live events. Harassment, spam, or abusive language towards the creator or other community members will result in immediate termination of your subscription without refund.</p>
        </section>

        <section className="terms-section">
          <h2>Refund Policy</h2>
          <p>Due to the digital nature of the content and the scheduling of personalized services (video/audio calls), <strong>all sales are final.</strong></p>
          <p>No refunds will be issued once a transaction is completed or a subscription is activated. If you miss a scheduled 1-on-1 call without prior 24-hour notice, the session will be forfeited.</p>
        </section>

        <section className="terms-section">
          <h2>Privacy Policy</h2>
          <p>Your privacy is our priority. We collect only the information necessary to provide you with a seamless experience (Name, Email, Phone Number).</p>
          <p>Your payment data is securely encrypted and processed via our PCI-compliant payment partners (e.g., Razorpay). We do not store your credit card details on our servers.</p>
        </section>

        <section className="terms-section terms-section--disclaimer">
          <h2>Disclaimer</h2>
          <p>The information, insights, and advice provided during 1-on-1 consultations, masterclasses, or exclusive posts are based entirely on personal experience.</p>
          <p>This content should <strong>not</strong> be considered professional financial, medical, psychological, or legal advice. You are solely responsible for any decisions made based on the content provided on this platform.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;