import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export interface User {
  uid: string;
  email: string | null;
  name: string | null;
  password?: string;
  createdAt?: Date;
}

export const userFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const user: User = {
    uid: doc.id,
    email: doc.data()['email'],
    name: doc.data()['name'],
  };
  return user;
};
