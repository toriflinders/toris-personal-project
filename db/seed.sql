CREATE TABLE single_user (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(250) NOT NULL,
    admin BOOLEAN
);

CREATE TABLE announcements (
    announce_id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    content TEXT,
    author_id INT REFERENCES single_user(user_id),
    date_created TIMESTAMP
);

CREATE TABLE art (
    art_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    img_url VARCHAR(500) NOT NULL,
    price NUMERIC,
    artist_id INT REFERENCES single_user(user_id)
);
CREATE TABLE invoice (
   invoice_id SERIAL PRIMARY KEY,
   billing_name VARCHAR (80) NOT NULL,
   billing_address VARCHAR (80) NOT NULL,
   billing_city VARCHAR (50) NOT NULL,
   billing_state VARCHAR (50) NOT NULL,
   billing_zipcode VARCHAR (15) NOT NULL,
   art_invoice_id INT REFERENCES art(art_id)
);

