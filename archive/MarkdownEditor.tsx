import { useState } from 'react';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';

const MarkDownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

  return <SimpleMDE onChange={(e) => setMarkdown(e)} />;
};
export default MarkDownEditor;
