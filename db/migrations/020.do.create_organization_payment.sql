CREATE TABLE organization_payment (
    id SERIAL PRIMARY KEY NOT NULL,
    organization_description TEXT,
    organization_id INTEGER REFERENCES organization(id) ON DELETE CASCADE,
    payment_id INTEGER REFERENCES payment(id) ON DELETE CASCADE
);