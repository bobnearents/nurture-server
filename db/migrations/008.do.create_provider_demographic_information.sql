CREATE TABLE provider_demographic_information (
    id SERIAL PRIMARY KEY NOT NULL,
    race/ethnicity TEXT,
    gender TEXT,
    age TEXT,
    setting TEXT, --this might not be possible yet
    service_area, --this might not be possible yet
    patient_demographic, --this might not be possible yet
);