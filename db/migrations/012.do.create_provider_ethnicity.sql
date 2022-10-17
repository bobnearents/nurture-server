CREATE TABLE provider_ethnicity (
    id SERIAL PRIMARY KEY NOT NULL,
    demographic_id INTEGER REFERENCES provider_demographic(id) ON DELETE CASCADE,
    ethnicity_id INTEGER REFERENCES ethnicity(id) ON DELETE CASCADE
);