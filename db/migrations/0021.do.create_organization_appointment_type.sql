CREATE TABLE organization_appointment_type (
id SERIAL PRIMARY KEY NOT NULL,
organization_description TEXT,
organization_id INTEGER REFERENCES organization(id) ON DELETE CASCADE,
appointment_type_id INTEGER REFERENCES appointment_type(id) ON DELETE CASCADE)