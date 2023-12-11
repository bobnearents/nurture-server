source ./.env
# any object that has a seedNames value in the table-names json file shouldn't be backed up here. So we exclude those tables since they will be backed up from the seeds themselves
tables_to_exclude=$(awk '/"dbName":/ { found_dbName=1; dbName_line="-T "$2; next } /"seedNames":/ && found_dbName { print dbName_line; found_dbName=0 }' ./db/model/table-names.json | sed 's/"//g; s/,/ /g')

PGPASSWORD=$DB_PASSWORD pg_dump -U $DB_USERNAME -d $DB_NAME -h $DB_HOST -T schemaversion $tables_to_exclude --data-only >> ./backups/database_backup.`date +%m-%d-%Y-%H-%M`.sql

echo database backed up successfully!