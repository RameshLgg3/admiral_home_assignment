# admiral_home_assignment
NodeJs Backend Developer

Steps to run the application in local

1. npm install
2. Create mysql database and import files from sqlfiles folder
3. npm run dev
4. Open a browser and launch http://localhost:3000/
4. Replace https://hometestadmiral.herokuapp.com/ with http://localhost:3000/ from below apis


Live Api:

Add new product (physical):

curl --location --request POST 'https://hometestadmiral.herokuapp.com/add-product' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "New product",
    "shortDescription": "short description of the product",
    "productTypeId": 1,
    "price": 8,
    "minimumQuantiry": 5
}'

Add new product (virtual):

curl --location --request POST 'https://hometestadmiral.herokuapp.com/add-product' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "New product - Virtual",
    "shortDescription": "short description of the product",
    "productTypeId": 2,
    "price": 8
}'

Add product to cart - with customization (physical product):

curl --location --request POST 'https://hometestadmiral.herokuapp.com/add-to-cart' \
--header 'Content-Type: application/json' \
--data-raw '{
    "productId": 2,
    "quantity": 10,
    "price": 13,
    "wrappingType": "Standard",
    "sessionId": "fjfufjfufjfjj"
}'

Add product to cart - without customization (virtual product):

curl --location --request POST 'https://hometestadmiral.herokuapp.com/add-to-cart' \
--header 'Content-Type: application/json' \
--data-raw '{
    "productId": 5,
    "quantity": 1,
    "price": 15,
    "sessionId": "fjfufjfufjfjj"
}'

Product listing

curl --location --request GET 'https://hometestadmiral.herokuapp.com/products' \
--data-raw ''

Cart summary

curl --location --request GET 'https://hometestadmiral.herokuapp.com/cart-summary' \
--data-raw ''



 
