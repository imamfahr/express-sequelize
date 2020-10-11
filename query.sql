CREATE database school;
use school;

CREATE TABLE users(
	id INT auto_increment primary key,
    name varchar(45),
    email varchar(45),
    birth_date date,
    exschool_id int,
    FOREIGN KEY (exschool_id) REFERENCES exschool(id)
    );

CREATE TABLE exschool(
id INT auto_increment primary key,
name varchar(45));


select * from school.users;

INSERT INTO users (name, email, birth_date, exschool_id) VALUES
('Budi','budipekerti@gmail.com','2000-12-2',2),
('Siti','sitikus@gmail.com','2000-12-2',3),
('rina','rinax@gmail.com','2000-12-2',5),
('susi','susi@gmail.com','2000-12-2',5);

INSERT INTO exschool (name) VALUES
('sepak bola'),
('seni tari'),
('drama'),
('mewarnai'),
('basket');

select * from school.exschool;
select * from school.exschool;

SELECT 
users.id, 
users.name as student_name, 
users.email, 
users.birth_date, 
exschool.name as exschool_name
FROM users left join exschool
on users.exschool_id = exschool.id;