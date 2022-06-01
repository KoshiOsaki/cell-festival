import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { db } from './api/fire';

import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import * as Showdown from 'showdown';
import { useRouter } from 'next/router';

const Edit: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');
  const [markdownValue, setMarkdownValue] = useState('Initial value');
  const [newPost, setNewPost] = useState({
    title: '',
    auther: '',
    createdAt: '',
    img: undefined,
    abstract: '',
    content: '',
  });
  const onChange = (value: any) => {
    setMarkdownValue(value);
  };
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  const onClickAdd = async () => {
    const ob = {
      title: newPost.title,
      auther: newPost.auther || '名無しさん',
      createdAt: '2022-05-29',
      img: newPost.img || './noImage.png',
      abstract: newPost.abstract,
      content: value,
    };
    await addDoc(collection(db, 'mdData'), ob);
    router.push('/view');
  };
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewPost({ ...newPost, [name]: value });
  };

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
          <Box w="500px">
            <Text>タイトル</Text>
            <Input value={newPost.title} onChange={handleInputChange} name="title" />
            <Text>概要</Text>
            <Textarea value={newPost.abstract} onChange={handleInputChange} name="abstract" />
          </Box>
          <Button w="500px" onClick={onClickAdd}>
            Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Edit;
