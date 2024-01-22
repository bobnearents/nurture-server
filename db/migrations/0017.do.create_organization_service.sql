CREATE TABLE organization_service (
id SERIAL PRIMARY KEY NOT NULL,
organization_description TEXT,
organization_id INTEGER REFERENCES organization(id) ON DELETE CASCADE,
service_id INTEGER REFERENCES service(id) ON DELETE CASCADE)