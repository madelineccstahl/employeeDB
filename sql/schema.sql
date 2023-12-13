DROP DATABASE IF EXISTS employeedb;

CREATE DATABASE employeedb;

USE employeedb;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(35) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(35) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(35) NULL,
    last_name VARCHAR(35) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);