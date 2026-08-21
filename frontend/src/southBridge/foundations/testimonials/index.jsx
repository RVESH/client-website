import Testimonial01 from "./Testimonial01";
import Testimonial02 from "./Testimonial02";
import Testimonial03 from "./Testimonial03";
import Testimonial04 from "./Testimonial04";
import Testimonial05 from "./Testimonial05";
import Testimonial06 from "./Testimonial06";
import Testimonial07 from "./Testimonial07";
import Testimonial08 from "./Testimonial08";
import Testimonial09 from "./Testimonial09";
import Testimonial10 from "./Testimonial10";
import Testimonial11 from "./Testimonial11";
import Testimonial12 from "./Testimonial12";

import "./style.scss";

function Testimonials() {
  return (
    <div className="testimonials_foundation">
      <Testimonial01 />
      <Testimonial02 />
      <Testimonial03 />
      <Testimonial04 />
      <Testimonial05 />
      <Testimonial06 />
      <Testimonial07 />
      <Testimonial08 />
      <Testimonial09 />
      <Testimonial10 />
      <Testimonial11 />
      <Testimonial12 />
    </div>
  );
}

export {
  Testimonial01,
  Testimonial02,
  Testimonial03,
  Testimonial04,
  Testimonial05,
  Testimonial06,
  Testimonial07,
  Testimonial08,
  Testimonial09,
  Testimonial10,
  Testimonial11,
  Testimonial12,
};

export default Testimonials;













// Testimonials mein bhi visual identity alag hogi:
// 01  Soft blue      → SaaS / startup
// 02  Warm ivory     → Luxury / editorial
// 03  Peach / coral  → Creative brand
// 04  Deep navy      → Tech
// 05  Indigo         → SaaS
// 06  Olive / cream  → Restaurant / hotel
// 07  Lavender       → Agency
// 08  Sand / rose    → Personal brand
// 09  Plum           → Travel / lifestyle
// 10  Mint / teal    → Wellness
// 11  Clean white    → Minimal business
// 12  Sage           → Corporate / consulting

// Aur content structure bhi alag:

// quote
// client name
// role/company
// rating
// avatar/image
// result/metric
// industry
// project reference