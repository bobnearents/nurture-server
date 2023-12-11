CREATE TABLE provider_pronoun (
id SERIAL PRIMARY KEY NOT NULL,
provider_description TEXT,
provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE,
pronoun_id INTEGER REFERENCES pronoun(id) ON DELETE CASCADE)