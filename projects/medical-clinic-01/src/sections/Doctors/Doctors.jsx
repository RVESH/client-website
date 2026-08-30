import DoctorCard from "../../components/DoctorCard/DoctorCard";

import { doctors } from "../../data/doctors";

import "./Doctors.scss";

export default function Doctors() {
  return (
    <section className="clinic-doctors section">
      <div className="page-shell">

        <div className="clinic-doctors__heading">
          <span className="eyebrow">
            OUR TEAM
          </span>

          <h2 className="section-title">
            Experienced people.
            <br />
            Human care.
          </h2>
        </div>

        <div className="clinic-doctors__grid">
          {doctors.map(
            (doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}