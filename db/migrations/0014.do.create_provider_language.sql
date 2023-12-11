CREATE TABLE provider_language (
id SERIAL PRIMARY KEY NOT NULL,
provider_description TEXT,
provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE,
language_id INTEGER REFERENCES language(id) ON DELETE CASCADE)