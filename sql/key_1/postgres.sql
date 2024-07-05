 -- Posttgres
 -- Steps:

-- 1. Create database named "Animals".

CREATE DATABASE Animals;


-- 2. Create table named "Mammals" with columns "Id" and "Name".

\c Animals;

CREATE TABLE Mammals (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(50)
);



-- 3. Fill out the table with the following animals:
-- Blue Whale, Camel, Rhino, Bison, Giraffe,
-- Polar Bear, Elephant, Dolphin, Zebra,Tiger
-- Hippopotamus, Lion, Gorilla, Wolf, Kangaroo

INSERT INTO Mammals (Name) VALUES
('Blue Whale'),
('Camel'),
('Rhino'),
('Bison'),
('Giraffe'),
('Polar Bear'),
('Elephant'),
('Dolphin'),
('Zebra'),
('Tiger'),
('Hippopotamus'),
('Lion'),
('Gorilla'),
('Wolf'),
('Kangaroo');



-- 4. Select all animals in alphabetical order

SELECT Name
FROM Mammals
ORDER BY Name ASC;



-- 5. 10-th position is a Secret Key

SELECT Name AS SecretKey
FROM Mammals
ORDER BY Name ASC
OFFSET 9 LIMIT 1;
