# Ecommerce-01 V1

## Pages
Home
Collection
Product
About
Contact

## Scope
Showcase + catalogue + enquiry + visit.

No:
Cart
Checkout
Buy Now
Add to Cart
Payment
Admin
Database
Inventory

## Flow
Home -> Collection -> Product -> Call / WhatsApp / Directions / Enquire / Visit

## Images
All images are stored in:
public/images/

Central image registry:
src/data/images.js

Product data:
src/data/products.js

One physical image can be reused anywhere without duplication.

## Client Updates
Business details:
src/data/site.js

Products:
src/data/products.js

Images:
public/images/

## Map
Set:
site.contact.mapUrl

Use the client's Google Maps Share URL.

## WhatsApp
Use international number without:
+
spaces
hyphens

Example:
9198XXXXXXXX

## HTTPS
Development:
npm run dev

Open:
https://localhost:5173

Local self-signed certificate warning is normal.

## Production
npm run build
npm run preview

Deploy:
dist/

Production HTTPS should be handled by the hosting/CDN.

## Error Check
npm run build
F12 -> Console

Old V2 references should not exist:
CartContext
useCart
/cart
/checkout
Buy Now
Add to Cart
CollectionLayout

## Old Image Paths
These should not exist in source:
product-*.jpg
hero-store.jpg
gallery-*.jpg
bags.jpg
clothing.jpg
accessories.jpg
footwear.jpg
home.jpg

## Traffic Protection
This is a static frontend.

Production should use:
HTTPS
CDN
Caching
WAF
DDoS protection
Rate limiting where required

Do not expose Vite development server as production.

## V1 Freeze
Exactly 5 pages.

No transactional ecommerce features.

Future:
Admin
Database
Payment
Order system
Inventory

belong to V2.
