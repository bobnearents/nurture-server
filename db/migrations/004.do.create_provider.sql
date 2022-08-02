CREATE TABLE provider (
    id SERIAL PRIMARY KEY NOT NULL,
    date_created TIMESTAMP DEFAULT now() NOT NULL,
    overview TEXT,
    name TEXT NOT NULL UNIQUE,
    business_name TEXT,
    address_1 TEXT,
    address_2 TEXT,
    city TEXT,
    state TEXT,
    zip VARCHAR(10),
    country TEXT,
    email TEXT,
    phone VARCHAR(15),
    website TEXT,
    role TEXT,
    needs_review BOOLEAN DEFAULT TRUE,
    currently_practicing BOOLEAN,
    shareable BOOLEAN
);