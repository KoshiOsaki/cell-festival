import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Img, Text } from '@chakra-ui/react';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { db } from './api/fire';
import { dataFromDoc } from '../types/data';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { getAllPosts } from './api/md';
import markdownToHtml from './api/markdownToHtml';
import Link from 'next/link';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);

  return {
    props: { allPosts },
  };
};

const Test: NextPage<Props> = ({ allPosts }) => {
  const [dataList, setDataList] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const _dataList: any[] = [];
      const dataCollection = collection(db, 'mdData');
      const dataQuery = query(dataCollection);
      const querySnapshot = await getDocs(dataQuery);
      querySnapshot.forEach((doc) => {
        const _data = dataFromDoc(doc);
        _dataList.push(_data);
      });
      setDataList(_dataList);
    })();
  }, []);
  const content = async (data) => await markdownToHtml(data.content);

  return (
    <ul>
      {allPosts?.map((post) => (
        <Link href="/docs/example">
          <Box key={post.slug} mt={10}>
            <li>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <ul>
                {post.tags?.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          </Box>
        </Link>
      ))}
      {dataList.map((data: any) => (
        <Box>
          <Img src={data.img} w="full" h="40vh"></Img>
          <Text textAlign="center" fontWeight="bold" fontSize="5xl">
            {data.title}
          </Text>
          <Text textAlign="center" textColor="gray.500">
            posted on {data.createdAt}
          </Text>
          <ul></ul>
          <ReactMarkdown components={ChakraUIRenderer()} children={data.content} skipHtml />

          <div className="md">
            {/* ここでdangerouslySetInnerHTMLを使ってHTMLタグを出力する */}
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </Box>
      ))}
    </ul>
  );
};

export default Test;
