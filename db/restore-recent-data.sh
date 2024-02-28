source ./.env

folder_path="./backups"

echo getting the most recent backup file...
most_recent_file=$(ls -lt "./backups" | awk 'NR==2 {print $9}')

PGPASSWORD=$DB_PASSWORD psql -U $DB_USERNAME -d $DB_NAME -h $DB_HOST -f $folder_path/$most_recent_file

echo database restored successfully!