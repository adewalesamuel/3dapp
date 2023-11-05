# Process pour lancer le project #

## Dépendence à installer ##

- python3
- pip
- node
- mysqlserver | xammp

## Process pour lancer le threeDapp back ##

- creer la db 3dapp
- lancer mysqlserver ou xamp 
- pip install pymysql
- python manage.py makemigrations
- python manage.py migrate
- pyhton manage.py runserver

## Process pour lancer le front back ##
- npm install
- creer .env.development
- npm run dev

