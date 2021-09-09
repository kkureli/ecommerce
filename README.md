# ecommerce

Simple ecommerce app. 
- TypeScript
- Redux
- Google Font
- Material Icon

There are 3 screens:
1- Home
2- Hot Deals
3- Basket

- The products under the Home and Hot Deals page are displayed according to the date/time ranges returned from the productTimings endpoint

- The Hot Deals page only contains products returned from the hotDeals endpoint.

- Hot Deals page is in masonry structure

- The dimensions of the product images coming from the API are resized using the image url.
(The height value is chosen randomly from 320, 440, 560.)

- When the product image is clicked, the product is added to the cart.

- The user is informed that the product has been added to the cart.

- There is a night mode feature for ease of reading in the hamburger menu.
