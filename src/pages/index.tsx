import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Img, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ContentCard } from '../components/ContentCard';
import { Description } from '../components/Description';
import { Layout } from '../components/Layout';
import { PostCard } from '../components/PostCard';
import { ProjectCard } from '../components/ProjectCard';

const Home: NextPage = () => {
  return (
    <Layout>
      <Box position="absolute" top="0" zIndex="-1">
        <Img src="/biologyTop.jpg" />
        <Box zIndex="1000" left="50%" top="50%" position="absolute" m="-73px" textAlign="center">
          <Img src="cellfes-icon.png" rounded="full" />
          <Text textColor="white" fontSize="4xl" fontWeight="bold" mx="-242px" display="inline-block">
            Thanks for visiting our site! Cell Festival
          </Text>
          <ChevronDownIcon w={20} color="white" />
        </Box>
      </Box>
      <Box mt="1400px">
        <Flex justify="center">
          <Stack w="40%" mx="10">
            <Description title="platform for biology">
              <Text>
                Cell
                Festivalは、生物系の知見を必要とする学習機会のプラットフォーム確立を目的にしているサイトです。分子生物学や細胞生物学などを基盤に、様々な学問のまとめを提供するだけでなく、演習問題とその解答例を提供することで、アウトプットが難しい生物学の学習の手助けを目標にしています。
              </Text>
            </Description>
            <Description title="objective">
              <Text>
                Cell
                Festivalは、生物系の知見を必要とする学習機会のプラットフォーム確立を目的にしているサイトです。分子生物学や細胞生物学などを基盤に、様々な学問のまとめを提供するだけでなく、演習問題とその解答例を提供することで、アウトプットが難しい生物学の学習の手助けを目標にしています。
              </Text>
            </Description>
            <Description title="recruitment">
              <Text>
                Cell
                Festivalは、生物系の知見を必要とする学習機会のプラットフォーム確立を目的にしているサイトです。分子生物学や細胞生物学などを基盤に、様々な学問のまとめを提供するだけでなく、演習問題とその解答例を提供することで、アウトプットが難しい生物学の学習の手助けを目標にしています。
              </Text>
            </Description>
          </Stack>
          <Box w="40%">
            <Description title="Organization Chart">
              <Text>Members&apos; status</Text>
              <Text>本サイトの制作に関わっているメンバーの構成です。</Text>
            </Description>
          </Box>
        </Flex>
        <Box bgColor="gray.200" p="10">
          <Text fontWeight="bold" fontSize="2xl" textAlign="center">
            Recent Posts
          </Text>
          <Flex justifyContent="center" wrap="wrap" mx="200px" my="40px">
            <PostCard title="DNAについて" date="March 29,2022" img="">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="">
              <Text>概要 記事の〜</Text>
            </PostCard>
          </Flex>
        </Box>
        <Box p="10">
          <Text fontWeight="bold" fontSize="2xl" textAlign="center">
            Contents
          </Text>
          <Flex justifyContent="center" wrap="wrap" mx="200px" my="40px">
            <ContentCard icon="string" title="Summary" content="" />
          </Flex>
        </Box>
        <Box bgColor="gray.200" p="10">
          <Text fontWeight="bold" fontSize="2xl" textAlign="center">
            Projects
          </Text>
          <Flex justifyContent="center" wrap="wrap" mx="200px" my="40px">
            <ProjectCard icon="string" title="" date="" memberNums={3} content="" topic={[]} />
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
