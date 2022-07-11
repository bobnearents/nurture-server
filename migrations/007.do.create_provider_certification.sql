CREATE TABLE provider_certification (
    provider_id INTEGER NOT NULL REFERENCES provider(id),
    certification_id INTEGER NOT NULL REFERENCES certification(id),
    provider_description TEXT
);