# tpFinalNode

## Prérequis

- Node.js (version 14 ou supérieure)
- PostgreSQL

## Installation

1. Clonez le dépôt :

```sh
git clone https://github.com/votre-utilisateur/tpFinalNode.git
cd tpFinalNode
```

2. Installez les dépendances :

```
npm install
```

3. Configurez les variables d'environnement :

Créez un fichier [.env](vscode-file://vscode-app/c:/Users/bekka/AppData/Local/Programs/Microsoft VS Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) à la racine du projet et ajoutez les variables suivantes :

```
DB_NAME=tpFinalNode
DB_USER=postgres
DB_PASSWORD=1234
DB_PORT=5432
DB_HOST=localhost
SECRET_KEY=secret_key

JWT_SECRET=une_chaine_secrete_tres_complexe
JWT_EXPIRES_IN=1d
BCRYPT_SALT_ROUNDS=10
```



## Utilisation

1. Démarrer le projet:

   ```
   npm start
   ```

2. Lancer et synchroniser la base de données: 

   ```
   nodemon config/db.js
   ```

   

Le serveur sera lancé sur le port 5000 par défaut. Vous pouvez accéder à l'API à l'adresse `http://localhost:5000`.

## Endpoints

### Users

- `POST /users/signUp` : Créer un nouvel utilisateur
- `POST /users/signIn` : Se connecter
- `GET /users` : Afficher tous les utilisateurs (nécessite une authentification)
- `GET /users/profile` : Afficher le profil de l'utilisateur connecté (nécessite une authentification)

### Movies

- `GET /movies` : Afficher tous les films
- `GET /movies/:id` : Afficher un film par ID
- `POST /movies` : Créer un nouveau film (nécessite une authentification)
- `PUT /movies/:id` : Mettre à jour un film par ID (nécessite une authentification)
- `DELETE /movies/:id` : Supprimer un film par ID (nécessite une authentification)



Vous pouvez aussi importer le fichier "tpFinalNode Postman requests"avec les requêtes dans le logiciel Postman 
