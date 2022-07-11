CREATE TABLE provider_payment (
    provider_id INTEGER NOT NULL REFERENCES provider(id),
    payment_id INTEGER NOT NULL REFERENCES payment(id),
    provider_description TEXT
);