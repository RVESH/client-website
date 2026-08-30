import Doctors from "../../sections/Doctors/Doctors";

export default function DoctorsPage() {
  return (
    <>
      <section className="section">
        <div className="page-shell">
          <span className="eyebrow">
            OUR DOCTORS
          </span>

          <h1 className="section-title">
            Meet the people
            <br />
            behind the care.
          </h1>
        </div>
      </section>

      <Doctors />
    </>
  );
}