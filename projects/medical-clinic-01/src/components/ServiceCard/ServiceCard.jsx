import { ArrowUpRight } from "lucide-react";

import "./ServiceCard.scss";

export default function ServiceCard({
  service,
}) {
  return (
    <article className="clinic-service-card">

      <div className="clinic-service-card__number">
        {service.id.slice(0, 2).toUpperCase()}
      </div>

      <div>
        <h3>
          {service.name}
        </h3>

        <p>
          {service.short}
        </p>
      </div>

      <ArrowUpRight size={17} />

    </article>
  );
}