mongoimport --db SUPERVENTES --collection members --file ../jsons/members.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection products --file ../jsons/products.json --jsonArray --drop
mongoimport --db SUPERVENTES --collection carts --file ../jsons/carts.json --jsonArray --drop