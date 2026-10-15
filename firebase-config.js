// Pegá acá los datos de TU proyecto de Firebase (los copiás desde la consola de Firebase, ver README, paso 4).
// Reemplazá cada texto entre comillas que dice PEGAR_AQUI por el valor que te muestra Firebase.
export const firebaseConfig = {
  apiKey: "PEGAR_AQUI",
  authDomain: "PEGAR_AQUI",
  projectId: "PEGAR_AQUI",
  storageBucket: "PEGAR_AQUI",
  messagingSenderId: "PEGAR_AQUI",
  appId: "PEGAR_AQUI",
};

// Emails que solo pueden MIRAR el stock, sin cambiarlo (en minúscula).
// Tienen que ser los mismos que pongas en la función esLector de firestore.rules.
// Ejemplo: ["contador@gmail.com"]
export const soloLectura = [];
