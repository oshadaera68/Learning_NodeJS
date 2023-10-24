DROP DATABASE IF EXISTS simple_crud_db;
CREATE DATABASE IF NOT EXISTS simple_crud_db;
USE simple_crud_db;
DROP TABLE IF EXISTS customer;
CREATE TABLE IF NOT EXISTS customer(
    nic VARCHAR(45) PRIMARY KEY,
    name VARCHAR(45),
    address LONGTEXT,
    password VARCHAR(255),
    salary DOUBLE
);