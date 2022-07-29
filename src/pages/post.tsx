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
import { tagListState } from '../store/tagListState';
import { projectListState } from '../store/projectListState';

const Post: NextPage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [tagList, setTagList] = useRecoilState(tagListState);
  const [projectList, setProjectList] = useRecoilState(projectListState);
  const [mdInput, setMdInput] = useState('');
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');
  const [markdownValue, setMarkdownValue] = useState('Initial value');
  const [newPost, setNewPost] = useState({
    title: '',
    author: '',
    createdAt: '',
    img: undefined,
    abstract: '',
    content: '',
    project: '',
    tags: '',
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
    let now: Date = new Date();
    let createdAt: Timestamp = Timestamp.fromDate(now);

    //contentの画像パスの変換
    let replaceUrlList: any[] = [];
    let content = mdInput;
    let imgUrlList = content.match(/https:\/\/drive.*?(?=\))/g);
    if (imgUrlList) {
      imgUrlList.forEach((imgUrl) => {
        let imgUrlId = imgUrl.match(/(?<=d\/).*?(?=\/view)/);
        let correctUrl = `https://drive.google.com/uc?export=view&id=${imgUrlId}`;
        replaceUrlList.push({
          oldUrl: imgUrl,
          correctUrl,
        });
      });
      replaceUrlList.forEach((data) => {
        content = content.replace(data.oldUrl, data.correctUrl);
      });
    }

    //トップの画像を設定
    let img = content.match(/https:\/\/drive.*?(?=\))/g)?.[0];

    //タグを配列に変換
    let tags = newPost.tags.split('#');
    tags.shift();

    const newMdData = {
      title: newPost.title,
      author: newPost.author,
      createdAt,
      img: img || './noImage.png',
      abstract: newPost.abstract,
      project: newPost.project,
      tags,
      content,
    };
    await addDoc(collection(db, 'mdData'), newMdData);

    //projectが新規ならば追加
    if (!projectList.some((project) => project.projectName === newPost.project)) {
      const newProject = {
        projectName: newPost.project,
        projectIcon: './favicon.ico',
        createdAt,
      };
      await addDoc(collection(db, 'projects'), newProject);
    }

    //タグが新規ならば追加
    tags.forEach((newTag) => {
      if (!tagList.some((tag) => tag.tagName === newTag)) {
        const newTagOb = {
          tagName: newTag,
          createdAt,
        };
        addDoc(collection(db, 'tags'), newTagOb);
      }
    });
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
            <Text>著者</Text>
            <Input value={newPost.author} onChange={handleInputChange} name="author" />
            <Text>project</Text>
            <Input value={newPost.project} onChange={handleInputChange} name="project" />
            <Text>タグ</Text>
            <Input value={newPost.tags} onChange={handleInputChange} name="tags" />
          </Box>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50%', marginRight: 10 }}>
            <ReactMde
              value={mdInput}
              onChange={setMdInput}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
            />
          </div>
          <div style={{ width: '50%' }}>
            Preview
            <ReactMarkdown components={ChakraUIRenderer()} children={mdInput} skipHtml />
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
