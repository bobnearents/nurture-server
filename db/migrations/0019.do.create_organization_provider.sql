CREATE TABLE organization_provider (
id SERIAL PRIMARY KEY NOT NULL,
organization_description TEXT,
organization_id INTEGER REFERENCES organization(id) ON DELETE CASCADE,
provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE)