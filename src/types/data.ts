import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const dataFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const data: any = {
    dataId: doc.id,
    title: doc.data()['title'],
    img: doc.data()['img'],
    content: doc.data()['content'].replaceAll('\\n', '\n'),
    author: doc.data()['author'],
    createdAt: doc.data()['createdAt'],
    abstract: doc.data()['abstract'],
  };

  return data;
};
