### Bonjour Allan, voici le projet d'API sur le Pierre, Feuille, Ciseaux.
---
### Presentation du projet
Pour te faire une brief presentation du projet, il permets de jouer au celèbre jeu de **Pierre, Feuille, Ciseaux**, bien sur, tu doit très surement deja le savoir !

Ceci etant dit, je voici comment le projet ce compose en termes de dossier:
- **Controllers**: Ce dossier sert à gérer le controller de la route "game".
- **data**: Ce dossier contient la base de données dans un fichier au format JSON.
- **Middlewares**: Ce dossier sert à gérer le middleware de la route "game".
- **Routes**: Ce dossier sert à gérer la routes de la route "game".
- **Utils**: Ce dossier contient le code qui permets au serveur de jouer contre l'utilisateur.

##### 1- Les dépendences
Pour un peu mieux comprendre aussi comment ce projet tourne, il faut savoir que je l'ai créer avec NodeJS, Express, mais surtout TypeScript. De ce fait, il y'a un peu plus de dépendences que sur un projet en JavaScript, mais pas bien plus, en voici la listes:
- **cors**: 2.8.5
- **dotenv**: 16.4.5
- **express**: 4.19.2
- **express-validator**: 7.0.1
- **ts-node**: 10.9.2
- **typescript**: 5.4.5

Et ici, voici les dépendences de développement: 
- **@types/cors**: 2.8.17
- **@types/express**: 4.17.21
- **@types/node**: 20.12.7
- **@types/nodemon**: 1.19.6
- **nodemon**: 3.1.0

##### 2- Les endpoints
Afin de pouvoir experimenter ce jeu, il va aussi faloir présenter les differentes endpoints du port 
**"localhost:3001"** et comment ils doivent être utilisées:
- **"/api/game"**: 
  - Methode: GET
  - description: Renvoi le tableau de score de la partie.
- **"/api/game/play"**: 
  - Methode: POST
  - description: Permets de jouer à la partie.
  - body: { **move:** "prierre" | "feuille" | "ciseaux" }
- **"/api/game/reset"**: 
  - Methode: DELETE
  - description: Remets les points à zéro et renvoi le tableau des scores.
- **"/api/game/cheat"**: 
  - Methode: GET
  - description: Permets de paramettrer manuellement le tableau des score.
  - body: { **win?:** string, **lose?:** string, **draw?:** string, }

##### 3-  Lancer le projet
Alors maintenant que les detailles ont été expliqués, pour lancer le projet il suffira de faire cette instruction dans le terminal, dans la raçine du projet: 
```bash
  # Avec Yarn
  yarn && yarn dev

  # Avec NPM
  npm install && npm run dev
```
Une fois cette instruction lancer, le jeu commençera alors. Nodemon devrait normalement se relancer à chaque requête qui effectue une modification dans la base de donnée (fichier db.json), sinon les endpoints ne pourrais pas récupérer les nouveaux état de la BDD, c'est donc un effet tout à fait normal.

Je te souhaite une bonne partie avec ce petit jeu !