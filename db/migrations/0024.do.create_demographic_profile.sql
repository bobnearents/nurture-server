CREATE TABLE demographic_profile (id SERIAL PRIMARY KEY NOT NULL,
  provider_id INTEGER REFERENCES provider(id) ON DELETE CASCADE NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  age TEXT
);