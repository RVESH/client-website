import { useNavigate } from "react-router-dom";
import "./ServiceCard.scss";

const ServiceCard = ({ icon, title, desc, price }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    // Dynamic data pass ho raha hai state mein
    navigate("/payment", { 
      state: { 
        service: { 
          title: title, 
          price: price 
        } 
      } 
    });
  };

  
  return (
    <div className="service-card">
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      <button className="service-card__btn" onClick={handleBooking}>
        Book Now @ {price}
      </button>
      
    </div>
  );
};

export default ServiceCard;
  //  <button className="service-card__btn" onClick={() => alert("Booking coming soon!")}>
  //     Book Now @ {price}
  //   </button>