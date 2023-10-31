CREATE TABLE provider_appointment_type (
    id SERIAL PRIMARY KEY NOT NULL,
    provider_description TEXT,
    provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE,
    appointment_type_id INTEGER REFERENCES appointment_type(id) ON DELETE CASCADE
);