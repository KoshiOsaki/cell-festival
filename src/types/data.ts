import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const postFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const _post: Post = {
    dataId: doc.id,
    title: doc.data()['title'],
    img: doc.data()['img'],
    content: doc.data()['content'].replaceAll('\\n', '\n'),
    author: doc.data()['author'],
    createdAt: new Date(doc.data()['createdAt'].seconds * 1000),
    abstract: doc.data()['abstract'],
  };
  const post = JSON.parse(JSON.stringify(_post));
  return post;
};

export interface Post {
  dataId: string;
  abstract: string;
  author: string;
  content: string;
  createdAt: Date;
  img: string;
  title: string;
  category?: string;
}
