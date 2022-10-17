CREATE TABLE provider_setting (
    id SERIAL PRIMARY KEY NOT NULL,
    demographic_id INTEGER REFERENCES provider_demographic(id) ON DELETE CASCADE,
    setting_id INTEGER REFERENCES setting(id) ON DELETE CASCADE
);