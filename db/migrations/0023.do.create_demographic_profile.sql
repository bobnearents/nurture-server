CREATE TABLE demographic_profile (id SERIAL PRIMARY KEY NOT NULL,
  provider_id INTEGER REFERENCES provider(id) NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  age INTEGER
);