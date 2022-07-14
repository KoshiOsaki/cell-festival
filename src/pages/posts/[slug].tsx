import { Box, Img, Text } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { Post, postFromDoc } from '../../types/data';
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
  return (
    <>
      <Box w="80%" mx="auto">
        <Img src={post.img} w="full" h="40vh"></Img>
        <Text textAlign="center" fontWeight="bold" fontSize="5xl">
          {post.title}
        </Text>
        <Text textAlign="center" textColor="gray.500">
          posted on {post.createdAt}
        </Text>
        <ul></ul>
        <ReactMarkdown components={ChakraUIRenderer()} children={post.content} skipHtml />

        <div className="md">
          {/* ここでdangerouslySetInnerHTMLを使ってHTMLタグを出力する
          <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
        </div>
      </Box>
    </>
  );
};

export default Post;
