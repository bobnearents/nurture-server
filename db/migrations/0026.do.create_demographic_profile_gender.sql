CREATE TABLE demographic_profile_gender (
id SERIAL PRIMARY KEY NOT NULL,
demographic_profile_description TEXT,
demographic_profile_id INTEGER REFERENCES demographic_profile(id) ON DELETE CASCADE,
gender_id INTEGER REFERENCES gender(id) ON DELETE CASCADE)