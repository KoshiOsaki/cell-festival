import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const postFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const post: any = {
    dataId: doc.id,
    title: doc.data()['title'],
    img: doc.data()['img'],
    content: doc.data()['content'].replaceAll('\\n', '\n'),
    author: doc.data()['author'],
    createdAt: doc.data()['createdAt'],
    abstract: doc.data()['abstract'],
  };

  return post;
};

export interface Post {
  dataId: string;
  abstract: string;
  author: string;
  content: string;
  createdAt: string;
  img: string;
  title: string;
  category: string;
}
