CREATE DATABASE burgers_db2;
USE burgers_db2;

CREATE TABLE burgers(
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)