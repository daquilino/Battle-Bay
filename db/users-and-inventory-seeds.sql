-- users seeds
INSERT 
allUsers (username, password, balance, money_spent, money_earned) 
VALUES 
("Leslie", "waffles", 650, 900, 1900),
("Ben", "dunshire", 1200, 2300, 6850),
("Tom", "swag", 200, 745, 1000),
("Jerry", "Garry", 150, 2300, 1500);

-- user inventory seeds
INSERT 
usersInventory (item_name, quantity, allUserId) 
VALUES
-- Leslie items
("fasion", 30, 1),
("collectibles", 24, 1),
("electronics", 5, 1),
-- Ben items
("fasion", 3, 2),
("collectibles", 60, 2),
("electronics", 45, 2),
-- Tom items
("fasion", 90, 3),
("collectibles", 40, 3),
("electronics", 9, 3),
-- Jerry items
("fasion", 2, 4),
("collectibles", 100, 4),
("electronics", 20, 4);
