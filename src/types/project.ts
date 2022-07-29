import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export const projectFromDoc = (doc: QueryDocumentSnapshot<DocumentData>) => {
  const _project: Project = {
    dataId: doc.id,
    projectName: doc.data()['projectName'],
    projectIcon: doc.data()['projectIcon'],
    createdAt: new Date(doc.data()['createdAt'].seconds * 1000),
  };
  const project = JSON.parse(JSON.stringify(_project));
  return project;
};
export interface Project {
  dataId: string;
  projectName: string;
  projectIcon: string;
  createdAt: Date;
}
