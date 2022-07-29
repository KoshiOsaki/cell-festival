import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const tagFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const _tag: Tag = {
    dataId: doc.id,
    tagName: doc.data()['tagName'],
    createdAt: new Date(doc.data()['createdAt'].seconds * 1000),
  };
  const tag = JSON.parse(JSON.stringify(_tag));
  return tag;
};
export interface Tag {
  dataId: string;
  tagName: string;
  createdAt: Date;
}
