// components/EventCard.jsx
import { useNavigate } from "react-router-dom";
import "./EventCard.scss";

const EventCard = ({ title, date, time, price, image }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    // Routes to payment gateway with dynamic data
    navigate("/creator/payment", { 
      state: { 
        product: { name: title, price: price, type: "service" } 
      } 
    });
  };

  return (
    <div className="event-card">
      <div className="event-card__img-wrap">
        <img src={image} alt={title} className="event-card__img" />
        <div className="event-card__badge">
          <span className="event-card__dot"></span> LIVE EVENT
        </div>
      </div>
      <div className="event-card__body">
        <h3 className="event-card__title">{title}</h3>
        <div className="event-card__info">
          <span>📅 {date}</span>
          <span>⏰ {time}</span>
        </div>
        <button className="event-card__btn" onClick={handleBooking}>
          Reserve Seat @ {price}
        </button>
      </div>
    </div>
  );
};

export default EventCard;