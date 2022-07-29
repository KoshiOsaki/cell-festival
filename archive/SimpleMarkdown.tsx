import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

export const SimpleMarkdown = () => {
  const [value, setValue] = useState('Initial value');
  const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  return (
    <>
      <SimpleMdeReact value={value} onChange={onChange} />;
    </>
  );
};
