import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from 'firebase/firestore';
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

export const recordTheScore = async (name, time) => {
  await addDoc(collection(db, 'scoreboard'), {
    name,
    time,
  });
};

export const getScoreboard = async (setScoresCb) => {
  const querySnapshot = await getDocs(collection(db, 'scoreboard'));

  const tempData = [];
  querySnapshot.forEach((entry) => {
    tempData.push(entry);
  });

  const scores = tempData.map((item) => item.data());

  scores.sort((a, b) => a.time - b.time);

  setScoresCb(scores);
};
