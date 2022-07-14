import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query, Timestamp } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { db } from './api/fire';

import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import * as Showdown from 'showdown';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../store/currentUserState';

const Post: NextPage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [value, setValue] = useState('');
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');
  const [markdownValue, setMarkdownValue] = useState('Initial value');
  const [newPost, setNewPost] = useState({
    title: '',
    author: '',
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
    const getStringFromDate = (date: any): string => {
      let year_str = date.getFullYear();
      let month_str = 1 + date.getMonth();
      let day_str = date.getDate();
      month_str = ('0' + month_str).slice(-2);
      day_str = ('0' + day_str).slice(-2);
      return [year_str, month_str, day_str].join('-');
    };
    let now: Date = new Date();
    let createdAt: Timestamp = Timestamp.fromDate(now);
    // let createdAt = getStringFromDate(date);

    const ob = {
      title: newPost.title,
      author: newPost.author || currentUser!.name,
      createdAt,
      img: newPost.img || './noImage.png',
      abstract: newPost.abstract,
      content: value,
    };
    await addDoc(collection(db, 'mdData'), ob);
    router.push('/');
  };
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewPost({ ...newPost, [name]: value });
  };

  return (
    <>
      <Box p="20">
        <Box textAlign="center" mt="16">
          <Box w="500px" mx="auto" my="10">
            <Text>タイトル</Text>
            <Input value={newPost.title} onChange={handleInputChange} name="title" />
            <Text>概要</Text>
            <Textarea value={newPost.abstract} onChange={handleInputChange} name="abstract" />
          </Box>
        </Box>
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
        <Box textAlign="center">
          <Button w="500px" colorScheme="green" onClick={onClickAdd} my="10">
            Post
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Post;
