/* Dropping and Creating database */
DROP DATABASE IF EXISTS studentCrudApp;
CREATE DATABASE IF NOT EXISTS studentCrudApp;
SHOW DATABASES;
USE studentCrudApp;

/* Creating Tables */
DROP TABLE IF EXISTS student;
CREATE TABLE IF NOT EXISTS student(
    stuId VARCHAR(15) PRIMARY KEY,
    name VARCHAR(45),
    address TEXT,
    email VARCHAR(100),
    contact_no VARCHAR(11)
);
SHOW TABLES;
DESC student;

DROP TABLE IF EXISTS program;
CREATE TABLE IF NOT EXISTS program(
    proId VARCHAR(15) PRIMARY KEY,
    proName VARCHAR(50),
    duration TIME,
    cost DOUBLE,
    studentId VARCHAR(15),
    CONSTRAINT FOREIGN KEY (studentId) REFERENCES student(stuId)
);
SHOW TABLES;
DESC program;

DROP TABLE IF EXISTS lecturer;
CREATE TABLE IF NOT EXISTS lecturer(
    lecturerId VARCHAR(15) PRIMARY KEY,
    lecturerName VARCHAR(50),
    programId VARCHAR(15),
    CONSTRAINT FOREIGN KEY (programId) REFERENCES program(proId)
);
SHOW TABLES;
DESC lecturer;

DROP TABLE IF EXISTS registration;
CREATE TABLE IF NOT EXISTS registration(
    regId VARCHAR(15) PRIMARY KEY,
    regDate DATE
);
SHOW TABLES;
DESC registration;