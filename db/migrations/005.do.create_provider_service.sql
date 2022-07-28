CREATE TABLE provider_service (
    id SERIAL PRIMARY KEY NOT NULL,
    provider_description TEXT,
    provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE,
    service_id INTEGER REFERENCES service(id) ON DELETE CASCADE
);