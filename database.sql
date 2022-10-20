-- CREATE DATABASE: fs-react-shopping

-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shoppingList" (
    "name" VARCHAR(80), 
    "quantity" INTEGER, 
    "units" VARCHAR(20), 
    "purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shoppingList" ("name", "quantity", "units", "purchased")
	VALUES 
	('Apples', 5, 'lbs', FALSE),
	('Bananas', 3, 'lbs', FALSE),
	('Kiwis', 1, 'lbs', FALSE),
	('Mayonnaise', 2, 'oz', TRUE),
	('Potatoes', 6, 'lbs', FALSE);