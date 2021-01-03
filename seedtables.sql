DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT;
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30)  NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
); 

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30)  NULL,
    salary decimal(10,2)  NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);



USE company_db

INSERT INTO department ( name)
VALUES ("Human Resources");

INSERT INTO department ( name )
VALUES ("Administration");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department ( name )
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Art");


INSERT INTO role (title, salary, department_id)
VALUES ("Counselor", 80000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 200000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Leet Engineer", 150000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Conman", 90000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Animator", 70000.00, 5);


INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Ace", "Deuce", 2, NULL);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Carebear", "Love", 1, );

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Cyber", "Shadow", 3, NULL);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 4, NULL);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Osiris", "Vanadue", 5, NULL);


INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Ace", "Deuce", 2, NULL);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Carebear", "Love", 1, );

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Cyber", "Shadow", 3, NULL);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 4, NULL);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ("Osiris", "Vanadue", 5, NULL);