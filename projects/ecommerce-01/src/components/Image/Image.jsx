import "./Image.scss";

export default function Image({
  src,
  alt = "",
  className = "",
  fallback = "image",
  ...props
}) {
  const handleError = (event) => {
    const image = event.currentTarget;

    image.style.display = "none";

    const parent = image.parentElement;

    if (!parent) {
      return;
    }

    parent.setAttribute(
      "data-image-error",
      fallback
    );
  };

  return (
    <div
      className={`sb-image ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        onError={handleError}
        {...props}
      />

      <span
        className="sb-image__fallback"
        aria-hidden="true"
      >
        {fallback === "product"
          ? "Product image"
          : "Image unavailable"}
      </span>
    </div>
  );
}