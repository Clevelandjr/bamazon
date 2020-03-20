DROP DATABASE IF EXISTS management_db;

CREATE DATABASE management_db;

USE management_db;

CREATE TABLE department (
    id INT PRIMARY KEY auto_increment NOT NULL,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY auto_increment NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY auto_increment NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager VARCHAR(30) NOT NULL,
    manager_id INT 
);


INSERT INTO department (name) VALUES 
    ('Accounting'), 
    ('Sales'), 
    ('HR');

INSERT INTO role (title, salary, department_id) VALUES 
    ('General Manager', 80000.00, '1'), 
    ('Accountant', 55000.00, '2'), 
    ('Customer Service Rep', 25000.00, '3');

INSERT INTO employee (first_name, last_name, role_id, manager, manager_id) VALUES 
    ('Mike', 'Jones', 1, 'Cleveland', 1),
    ('Shawn', 'Carter', 2, 'Beyonce', 2);

USE management_db;