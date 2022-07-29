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

export const projectFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const _project: Project = {
    dataId: doc.id,
    projectName: doc.data()['projectName'],
    projectImg: doc.data()['projectImg'],
    createdAt: new Date(doc.data()['createdAt'].seconds * 1000),
  };
  const project = JSON.parse(JSON.stringify(_project));
  return project;
};
export interface Project {
  dataId: string;
  projectName: string;
  projectImg: string;
  createdAt: Date;
}

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
