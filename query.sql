CREATE TABLE signup(
	id SERIAL PRIMARY KEY,
	first_name varchar(30),
	last_name varchar(30),
	email varchar(30),
	password varchar(30)
);

CREATE TABLE donate(
	id SERIAL PRIMARY KEY,
	full_name varchar(50),
	email varchar(100),
	phone varchar(50),
	title varchar(40),
	author varchar(30),
	quantity int,
	genre varchar(20),
	description text
);