CREATE TABLE provider_patient_demographic (
    id SERIAL PRIMARY KEY NOT NULL,
    demographic_id INTEGER REFERENCES provider_demographic(id) ON DELETE CASCADE,
    patient_id INTEGER REFERENCES patient_demographic(id) ON DELETE CASCADE
);