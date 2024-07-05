-- Steps:

-- 1. Create database named "Animals".

CREATE DATABASE Animals;
GO


-- 2. Create table named "Mammals" with columns "Id" and "Name".

USE Animals;
GO

CREATE TABLE Mammals (
    Id INT IDENTITY(1, 1) NOT NULL,
    Name VARCHAR(50)
);
GO


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
GO


-- 4. Select all animals in alphabetical order

SELECT Name
FROM Mammals
ORDER BY Name ASC;
GO


-- 5. 10-th position is a Secret Key

SELECT Name AS SecretKey
FROM Mammals
ORDER BY Name ASC
OFFSET 9 ROWS FETCH NEXT 1 ROW ONLY;
GO