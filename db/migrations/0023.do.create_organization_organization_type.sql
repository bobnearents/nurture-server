CREATE TABLE organization_organization_type (
id SERIAL PRIMARY KEY NOT NULL,
organization_description TEXT,
organization_id INTEGER REFERENCES organization(id) ON DELETE CASCADE,
organization_type_id INTEGER REFERENCES organization_type(id) ON DELETE CASCADE)