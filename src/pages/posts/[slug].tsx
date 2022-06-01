import { Box, Img, Text } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

const Post: NextPage = ({ data }: any) => (
  <>
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
        {/* <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
      </div>
    </Box>
  </>
);

export default Post;
