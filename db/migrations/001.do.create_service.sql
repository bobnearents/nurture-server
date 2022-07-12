CREATE TABLE service (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    full_name TEXT,
    at_risk BOOLEAN
);