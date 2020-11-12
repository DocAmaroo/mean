mongoimport --db SUPERVENTES --collection members --file ../data/members.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection products --file ../data/products.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection carts --file ../data/carts.json --jsonArray --drop
# mongoimport --db SUPERVENTES --collection marques --file ../data/marques.json --jsonArray --drop