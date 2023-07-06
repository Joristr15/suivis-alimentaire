import { Database } from 'sqlite3';

// Chemin vers votre fichier de base de données SQLite
const databasePath = './data/database.db';

// Fonction pour établir la connexion à la base de données
function connectToDatabase(): Database {
  return new Database(databasePath);
}

// Fonction pour exécuter une requête SELECT
async function executeQuery(query: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const db = connectToDatabase();

    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
      db.close();
    });
  });
}

export { executeQuery };
