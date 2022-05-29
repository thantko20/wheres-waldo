import { doc, getDoc } from 'firebase/firestore';
import { db } from '.';

export const getHitBox = async (characterName) => {
  const docRef = doc(db, 'characters', characterName.toLowerCase());
  const characterDoc = await getDoc(docRef);

  const { horizontalHitBox, verticalHitBox } = characterDoc.data();

  return { horizontalHitBox, verticalHitBox };
};
