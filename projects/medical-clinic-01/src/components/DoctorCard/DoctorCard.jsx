import "./DoctorCard.scss";

export default function DoctorCard({
  doctor,
}) {
  return (
    <article className="clinic-doctor-card">

      <div className="clinic-doctor-card__image">
        <img
          src={doctor.image}
          alt={doctor.name}
          loading="lazy"
        />
      </div>

      <div className="clinic-doctor-card__body">

        <span>
          {doctor.specialty}
        </span>

        <h3>
          {doctor.name}
        </h3>

        <p>
          {doctor.education}
        </p>

        <small>
          {doctor.experience}
        </small>

      </div>

    </article>
  );
}