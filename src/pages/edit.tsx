import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { db } from './api/fire';
import { dataFromDoc } from '../types/data';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Button } from '@chakra-ui/react';
import * as Showdown from 'showdown';

const Edit: NextPage = () => {
  const [value, setValue] = useState('');
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');
  const [markdownValue, setMarkdownValue] = useState('Initial value');
  const onChange = (value: any) => {
    setMarkdownValue(value);
  };
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <>
      <Box p="20">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50%', marginRight: 10 }}>
            <ReactMde
              value={value}
              onChange={setValue}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
            />
          </div>
          <div style={{ width: '50%' }}>
            Preview
            <ReactMarkdown components={ChakraUIRenderer()} children={value} skipHtml />
          </div>
        </div>
        <Box textAlign="center" mt="16">
          <Button w="500px">Submit</Button>
        </Box>
      </Box>
    </>
  );
};

export default Edit;
