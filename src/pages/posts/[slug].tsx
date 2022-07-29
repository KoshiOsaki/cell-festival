import { Box, Img, Text } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { NextPage } from 'next';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Post, postFromDoc } from '../../types/post';

import { dateToString } from '../../utils/date';
import { db } from '../api/fire';

export const getStaticPaths = async () => {
  const postList: Post[] = [];
  const postCollection = collection(db, 'mdData');
  const postQuery = query(postCollection);
  const querySnapshot = await getDocs(postQuery);
  querySnapshot.forEach((doc) => {
    postList.push(postFromDoc(doc));
  });

  const paths = postList.map((post: Post) => ({
    params: {
      slug: post.dataId,
    },
  }));
  return { paths, fallback: 'blocking' };
};

interface Params {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({ params }: Params) => {
  const postDocRef = doc(db, 'mdData', params.slug);
  const postDocData = await getDoc(postDocRef);
  if (!postDocData.exists()) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  const post: Post = postFromDoc(postDocData);
  return {
    props: {
      post: post,
    },
  };
};

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }: Props) => {
  const date = new Date(post.createdAt); //なぜか文字列でcreatedAtがくるのでDateに変換

  return (
    <>
      <Box w="80%" mx="auto" my="200px">
        <Text textAlign="center" fontWeight="bold" fontSize="5xl">
          {post.title}
        </Text>
        <Text textAlign="center" textColor="gray.500">
          posted on {dateToString(date)}
        </Text>
        <ul></ul>
        <ReactMarkdown components={ChakraUIRenderer()} children={post.content} skipHtml />
      </Box>
    </>
  );
};

export default Post;
