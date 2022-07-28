CREATE TABLE provider_payment (
    id SERIAL PRIMARY KEY NOT NULL,
    provider_description TEXT,
    provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE,
    payment_id INTEGER REFERENCES payment(id) ON DELETE CASCADE
);