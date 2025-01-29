### shopify-challenge-platter

# Key Requirements and Implementation

## 1. Product Cards

- Display 10 product cards.
- On desktop: Show 5 cards per row.
- On mobile: Show 2 cards per row.
- Initially display only the first 4 products on mobile and add a “Show More” button to reveal the remaining 6.

### Files Created:
- sections/product-cards.liquid
- assets/product-cards.js
- snippets/product-card.liquid


### Files Changed from theme:
- layout/theme.liquid: Inside tag <body> added render section: 
  {% section 'product-cards' %}


## 2. Image Hover Behavior

- On hover, the product card image should switch to a secondary image.

### Files Created:
- snippets/product-card.liquid


## 3. Scrollbar

- Hide the browser’s default scrollbar.
- Create a custom floating scrollbar.
- The scrollbar thumb should change size when hovered or clicked.

### Files Created:
- snippets/floating-button.liquid
- assets/floating-button.js

### Files Changed from theme:
- layout/theme.liquid: Inside tag <body> added render snippet: 
  {% render 'floating-button' %}
- assets/base.css


## Bonus Task

- Migrated the design into a Shopify Section using Liquid.
- Separated logic into sections, assets and snippets.
- Not implemented: Made products configurable from the Theme Editor.

Products in the current implementation are manually defined in the schema (product-cards.liquid).

For a more dynamic approach, products can be fetched in two ways:
- Using product_list in the schema: Allows merchants to manually select products via the Theme Editor.
- Using Shopify Metafields: Enables automatic selection of products (e.g., best sellers, featured products).

## Demo Video

For a demonstration of the implementation, watch the video below:


[![Shopify Challenge Video](https://img.youtube.com/vi/VVqW6T5Z-Wo/0.jpg)](https://youtu.be/VVqW6T5Z-Wo)


