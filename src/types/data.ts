import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const dataFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const data: any = {
    dataId: doc.id,
    title: doc.data()['title'],
    img: doc.data()['img'],
    content: doc.data()['content'],
    author: doc.data()['author'],
    createdAt: doc.data()['createdAt'],
  };

  return data;
};
