CREATE TABLE certification (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    abbreviation TEXT,
    at_risk BOOLEAN
);