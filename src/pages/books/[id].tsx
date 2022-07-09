import Head from 'next/head';
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post, postFromDoc } from '../../types/data';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../api/fire';
import { Box, Img, Text } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

// パスの構成要素を表す型 (/books/[id].tsx の id 部分など)
// (Note) Params という名前にすると曖昧なので、アクセス時のパスから抽出する
// 情報だということを示すために PathParams という名前にしています。
type PathParams = {
  id: string;
};

// ページコンポーネントに渡される props の型
// (Note) ページコンポーネント用の props であることを意識するために、
// 一般的な Props ではなく、PageProps という名前にしています。
type PageProps = {
  title: string;
  author: string;
};

// 事前生成するページのパス（URL のパラメータ部分）のリストを返します。
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  // /books/001、/books/002、/books/003 のページを事前生成するには、
  // 次のように paths プロパティの値を設定して返します。
  // 本来は id のリストを外部 API（getBookList など）で取得します。
  const postList: Post[] = [];
  const postCollection = collection(db, 'mdData');
  const postQuery = query(postCollection);
  const querySnapshot = await getDocs(postQuery);
  querySnapshot.forEach((doc) => {
    postList.push(postFromDoc(doc));
  });
  const paths = postList.map((post: Post) => ({
    params: {
      id: post.dataId,
    },
  }));

  return {
    paths,
    fallback: false, // 上記以外のパスでアクセスした場合は 404 ページにする
  };
};

// URL のパラメータ情報（プレースホルダー部分に指定された値）をもとに、
// ページコンポーネントに渡す props データを生成します。
// context.params プロパティでこれらのパラメータを参照できるので、
// その値に応じて props データを生成して返すように実装します。
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  // ファイル名が [id].tsx なので id パラメーターを取り出すことができる
  const { id } = context.params as PathParams;

  // 本来はここで getBook(id) のように API を呼び出してデータを取得する
  const postDocRef = doc(db, 'mdData', id);
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
  const props = {
    title: post.title,
    abstract: post.abstract,
    author: post.author || null,
  };

  return { props };

  // ページコンポーネントに渡す PageProps オブジェクトを
  // props プロパティに設定したオブジェクトを返す
};

// ページコンポーネントの実装
const BookPage: React.FC<PageProps> = ({ ...props }: PageProps) => {
  console.log(props);
  return (
    <>
      <Box>
        <Img src={props.title} w="full" h="40vh"></Img>
        <Text textAlign="center" fontWeight="bold" fontSize="5xl">
          {props.title}
        </Text>
        <Text textAlign="center" textColor="gray.500">
          posted on {props.title}
        </Text>
        <ul></ul>
        <ReactMarkdown components={ChakraUIRenderer()} children={props.title} skipHtml />

        <div className="md">
          {/* ここでdangerouslySetInnerHTMLを使ってHTMLタグを出力する
          <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
        </div>
      </Box>
    </>
  );
};
export default BookPage;
