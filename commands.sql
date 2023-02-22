CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
	likes numeric DEFAULT 0,
    date time
);