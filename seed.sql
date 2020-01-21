USE employeeTracker_DB;

INSERT INTO department(name) VALUES('Collections');
INSERT INTO department(name) VALUES('Human Resources');
INSERT INTO department(name) VALUES('Sales');
INSERT INTO department(name) VALUES('Reposessions');

INSERT INTO roles(title, salary, department_id) VALUES('Vice President', 200000, 1);
INSERT INTO roles(title, salary, department_id) VALUES('Regional Manager', 160000, 1);
INSERT INTO roles(title, salary, department_id) VALUES('District Manager', 130000, 2);
INSERT INTO roles(title, salary, department_id) VALUES('General Manager', 100000, 2);
INSERT INTO roles(title, salary, department_id) VALUES('Store Manager', 70000, 3);
INSERT INTO roles(title, salary, department_id) VALUES('Assistant Manager', 45000, 4);
INSERT INTO roles(title, salary, department_id) VALUES('Customer Service Representative', 25000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Mike', 'Jones', 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('John', 'Locke', 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Robin', 'Dabank', 1, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Issa', 'Joke', 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Candy', 'Apple', 3, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Victoria', 'Secrets', 4, 5);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Eata', 'Weener', 4, 7);