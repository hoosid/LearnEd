const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

// Initialisation de PrismaClient avec l'URL de la base de données
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL // Assurez-vous que DATABASE_URL est correctement défini dans .env
    }
  }
});

// Vérification de la connexion à la base de données
prisma.$connect()
  .then(() => {
    console.log('DB connected :)');
  })
  .catch((error) => {
    console.error('DB connection failed:', error);
    process.exit(1); // Quitte le processus avec un code d'erreur
  });

module.exports = prisma;
