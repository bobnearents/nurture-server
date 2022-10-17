CREATE TABLE provider_demographic (
    id SERIAL PRIMARY KEY NOT NULL,
    provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE,
    age TEXT,
    gender TEXT
);