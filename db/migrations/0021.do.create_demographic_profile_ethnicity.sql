CREATE TABLE demographic_profile_ethnicity (
id SERIAL PRIMARY KEY NOT NULL,
demographic_profile_description TEXT,
demographic_profile_id INTEGER REFERENCES demographic_profile(id) ON DELETE CASCADE,
ethnicity_id INTEGER REFERENCES ethnicity(id) ON DELETE CASCADE)