# Store Backend

### Setup db

`docker-compose up -d` - to spin up postgres image

Optional:

`./seed_db.sh` - to run migrations + populate initial seed data.


### Start server:

Make sure you have [symfony-cli](https://symfony.com/download) installed

Required `.env` variables:

```
APP_ENV=prod|dev
DATABASE_URL="postgresql://change_to_your_db_name:change_to_your_db_password@127.0.0.1:5439/app?serverVersion=13&charset=utf8"
CORS_ALLOW_ORIGIN='^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$'
POSTGRES_DB=your_db_name
POSTGRES_PASSWORD=your_db_password
POSTGRES_USER=your_db_user
```

`symfony server:start` 

