source ./.env

for file in ./db/seeds/*.sql; do
PGPASSWORD=$DB_PASSWORD psql -U $DB_USERNAME -h $DB_HOST -p $DB_PORT -d $DB_NAME -f $file
done