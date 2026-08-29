import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProductCard/ProductCard";

import { products } from "../../data/products";
import { categories } from "../../data/categories";

import "./Collection.scss";

const SORT_OPTIONS = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "price-low",
    label: "Price: Low to High",
  },
  {
    value: "price-high",
    label: "Price: High to Low",
  },
  {
    value: "name",
    label: "Name: A–Z",
  },
];

function getCategoryFromUrl(value) {
  if (!value) {
    return "All";
  }

  const match = categories.find(
    (category) =>
      category.name.toLowerCase() ===
      value.toLowerCase()
  );

  return match?.name || "All";
}

export default function Collection() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const urlCategory =
    searchParams.get("category");

  const [query, setQuery] =
    useState("");

  const [category, setCategory] =
    useState(
      getCategoryFromUrl(
        urlCategory
      )
    );

  const [sort, setSort] =
    useState("featured");

  const filteredProducts = useMemo(() => {
    const normalizedQuery =
      query.trim().toLowerCase();

    const result = products.filter(
      (product) => {
        const matchesCategory =
          category === "All" ||
          product.category === category;

        const searchableText = [
          product.name,
          product.category,
          product.description,
          ...(product.features || []),
        ]
          .join(" ")
          .toLowerCase();

        const matchesQuery =
          !normalizedQuery ||
          searchableText.includes(
            normalizedQuery
          );

        return (
          matchesCategory &&
          matchesQuery
        );
      }
    );

    return [...result].sort(
      (a, b) => {
        switch (sort) {
          case "price-low":
            return a.price - b.price;

          case "price-high":
            return b.price - a.price;

          case "name":
            return a.name.localeCompare(
              b.name
            );

          default:
            return 0;
        }
      }
    );
  }, [
    query,
    category,
    sort,
  ]);

  const handleCategoryChange =
    (nextCategory) => {
      setCategory(nextCategory);

      if (nextCategory === "All") {
        setSearchParams({});
        return;
      }

      setSearchParams({
        category: nextCategory,
      });
    };

  return (
    <section className="shop-page section">
      <div className="page-shell">

        <header className="shop-page__heading">
          <div>
            <span className="eyebrow">
              THE SHOP
            </span>

            <h1 className="section-title">
              A considered collection.
            </h1>

            <p className="section-copy">
              Everyday pieces chosen for
              useful design, quality and
              lasting appeal.
            </p>
          </div>

          <Search
            value={query}
            onChange={setQuery}
            placeholder="Search products..."
          />
        </header>

        <div className="shop-page__toolbar">

          <div
            className="shop-page__filters"
            aria-label="Product categories"
          >
            {[
              "All",
              ...categories.map(
                (item) => item.name
              ),
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={
                  category === item
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleCategoryChange(
                    item
                  )
                }
              >
                {item}
              </button>
            ))}
          </div>

          <label className="shop-page__sort">
            <span>SORT</span>

            <select
              value={sort}
              onChange={(event) =>
                setSort(event.target.value)
              }
              aria-label="Sort products"
            >
              {SORT_OPTIONS.map(
                (option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                )
              )}
            </select>
          </label>

        </div>

        <div className="shop-page__meta">
          <span>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </span>

          {query && (
            <button
              type="button"
              onClick={() =>
                setQuery("")
              }
            >
              Clear search
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid shop-page__grid">
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>
        ) : (
          <div className="shop-page__empty">
            <h2>
              Nothing matched your search.
            </h2>

            <p>
              Try another product name or
              category.
            </p>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                handleCategoryChange(
                  "All"
                );
              }}
            >
              View all products
            </button>
          </div>
        )}

      </div>
    </section>
  );
}