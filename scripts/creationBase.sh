mongoimport --db SUPERVENTES --collection members --file ../json/members.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection products --file ../json/products.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection carts --file ../json/carts.json --jsonArray --drop