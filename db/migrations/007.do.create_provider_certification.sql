CREATE TABLE provider_certification (
    id SERIAL PRIMARY KEY NOT NULL,
    provider_description TEXT,
    provider_id INTEGER REFERENCES provider(id),
    certification_id INTEGER REFERENCES certification(id)
);