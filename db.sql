-- command to create db
-- psql -U postgres -f db.sql


CREATE DATABASE persons_db;
\connect world


CREATE TABLE PERSON (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(40) UNIQUE,
    dob DATE,
    photo VARCHAR(50),
    country  VARCHAR(30)

);

-- Insert to database
INSERT INTO PERSON(name, email, dob, country) VALUES ('Ahmed', 'ahmedl@gmail.com' ,  TO_DATE('03/09/1999', 'DD/MM/YYYY'), 'Bahrain');
INSERT INTO PERSON (name, email, dob, country) VALUES ('Yousif', 'yousif@gmail.com' ,  TO_DATE('04/05/1999', 'DD/MM/YYYY'), 'Bahrain');
INSERT INTO PERSON (name, email, dob, country) VALUES ('Ali', 'ali@gmail.com' ,  TO_DATE('01/01/1999', 'DD/MM/YYYY'), 'Bahrain');