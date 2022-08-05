# Run migrations on fresh db
symfony console doctrine:migrations:migrate

# Seed db with initial data
symfony run psql < data/catalog.sql
symfony run psql < data/measure.sql
symfony run psql < data/goods.sql