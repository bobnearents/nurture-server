CREATE TABLE provider_service (
    provider_id INTEGER NOT NULL REFERENCES provider(id),
    service_id INTEGER NOT NULL REFERENCES service(id),
    provider_description TEXT
);