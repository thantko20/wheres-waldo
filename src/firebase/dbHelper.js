import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from '.';

export const getHitBox = async (characterName) => {
  const docRef = doc(db, 'characters', characterName.toLowerCase());
  const characterDoc = await getDoc(docRef);

  const { horizontalHitBox, verticalHitBox } = characterDoc.data();

  return { horizontalHitBox, verticalHitBox };
};

export const getCharacters = async () => {
  const colRef = collection(db, 'characters');
  const q = query(colRef);

  const snapShot = await getDocs(q);
  const characters = [];
  snapShot.forEach((doc) => {
    characters.push(doc.data().name);
  });

  return characters;
};
