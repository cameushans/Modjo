# API de Transcription Audio/Vidéo en Texte

Bienvenue dans l'API de transcription audio/vidéo en texte ! Cette API vous permet de convertir des discussions audio ou vidéo, telles que des réunions ou des appels, en texte à l'aide de l'intelligence artificielle (IA). Elle offre une solution pratique pour obtenir des transcriptions précises et automatiques de vos enregistrements audio ou vidéo.

## Fonctionnalités

- Transcription automatique : Convertissez automatiquement des fichiers audio ou vidéo en texte.
- Précision élevée : Profitez d'une précision élevée dans la transcription grâce à l'utilisation de modèles d'apprentissage automatique performants.
- Formats pris en charge : Prend en charge une variété de formats audio et vidéo courants tels que MP3, WAV, MP4, etc.
- Facilité d'utilisation : Une API simple et intuitive pour une intégration facile dans vos applications et workflows existants.

## Utilisation

Pour utiliser l'API de transcription audio/vidéo en texte, suivez ces étapes simples :

1. **Inscription et Authentification** : Inscrivez-vous pour obtenir une clé d'API et un secret. Utilisez-les pour vous authentifier auprès de l'API.
2. **Transcription** : Envoyez vos fichiers audio ou vidéo à l'API pour démarrer le processus de transcription.
3. **Obtention du Résultat** : Obtenez les résultats de la transcription sous forme de texte structuré ou de fichier.

## Exemples d'Intégration

### Node.js avec TypeScript, io-ts et Fastify

```typescript
import * as fastify from 'fastify';
import { transcribe } from './transcription'; // Votre module de transcription
import * as t from 'io-ts';

const app = fastify();

// Définition du type de données pour la transcription
const TranscriptionRequest = t.type({
  file: t.string, // Chemin vers le fichier audio/vidéo
});

// Point d'entrée pour la transcription
app.post('/transcribe', async (request, reply) => {
  try {
    // Vérifie si les données de la requête correspondent au type défini
    const requestData = TranscriptionRequest.decode(request.body);
    if (requestData.isLeft()) {
      reply.code(400).send({ error: 'Données de requête invalides' });
      return;
    }

    // Transcription du fichier audio/vidéo
    const transcription = await transcribe(requestData.value.file);

    // Réponse avec le texte transcrit
    reply.send({ transcription });
  } catch (error) {
    console.error('Erreur de transcription:', error);
    reply.code(500).send({ error: 'Erreur de transcription' });
  }
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});


### I used webhook to:

- Eliminate the need for polling. This saves resources for the client application. 