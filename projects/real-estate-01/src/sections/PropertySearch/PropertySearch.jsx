import { useMemo, useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

import { properties } from "../../data/properties";

import "./PropertySearch.scss";

export default function PropertySearch() {
  const [query, setQuery] =
    useState("");

  const [type, setType] =
    useState("All");

  const filtered =
    useMemo(() => {
      const q =
        query.trim().toLowerCase();

      return properties.filter(
        (property) => {
          const matchesQuery =
            !q ||
            [
              property.name,
              property.location,
              property.type,
            ]
              .join(" ")
              .toLowerCase()
              .includes(q);

          const matchesType =
            type === "All" ||
            property.type === type;

          return (
            matchesQuery &&
            matchesType
          );
        }
      );
    }, [query, type]);

  return (
    <section className="property-search section">
      <div className="page-shell">

        <div className="property-search__tools">

          <SearchBar
            value={query}
            onChange={setQuery}
          />

          <div className="property-search__filters">
            {[
              "All",
              "Villa",
              "Apartment",
              "House",
              "Penthouse",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={
                  type === item
                    ? "is-active"
                    : ""
                }
                onClick={() =>
                  setType(item)
                }
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        <div className="property-search__count">
          {filtered.length} properties
        </div>

        {filtered.length ? (
          <div className="property-search__grid">
            {filtered.map(
              (property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              )
            )}
          </div>
        ) : (
          <div className="property-search__empty">
            <h2>
              Nothing matched.
            </h2>

            <p>
              Try another location,
              property type or name.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}