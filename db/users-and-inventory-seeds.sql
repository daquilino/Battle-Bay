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
("fashion", 30, 1),
("collectables", 24, 1),
("electronics", 5, 1),
-- Ben items
("fashion", 3, 2),
("collectables", 60, 2),
("electronics", 45, 2),
-- Tom items
("fashion", 90, 3),
("collectables", 40, 3),
("electronics", 9, 3),
-- Jerry items
("fashion", 2, 4),
("collectables", 100, 4),
("electronics", 20, 4);
