import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Img, Stack, Text } from '@chakra-ui/react';
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
      <Img src="/biologyTop.jpg" opacity="0" />

      <Box>
        <Box p="10">
          <Text fontWeight="bold" fontSize="4xl" textAlign="center">
            Cell Festival
          </Text>
          <Flex justify="center" px="24" py="9">
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
                <Text fontSize="xl" fontWeight="semibold">
                  Members&apos; status
                </Text>
                <Text>本サイトの制作に関わっているメンバーの構成です。</Text>
                <HStack m="9" spacing="10">
                  <Img src="favicon.ico" w="100px" />
                  <Img src="favicon.ico" w="100px" />
                  <Img src="favicon.ico" w="100px" />
                </HStack>
                <Text fontSize="xl" fontWeight="semibold">
                  Article contributers
                </Text>
                <Text>本サイトの制作に関わっているメンバーの構成です。</Text>
                <HStack m="9" spacing="10">
                  <Img src="favicon.ico" w="100px" />
                  <Img src="favicon.ico" w="100px" />
                  <Img src="favicon.ico" w="100px" />
                </HStack>
              </Description>
            </Box>
          </Flex>
        </Box>

        <Box bgColor="gray.200" p="10">
          <Text fontWeight="bold" fontSize="4xl" textAlign="center">
            Recent Posts
          </Text>
          <Flex justifyContent="center" wrap="wrap" mx="200px" my="40px">
            <PostCard title="DNAについて" date="March 29,2022" img="/favicon.ico">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="/favicon.ico">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="/favicon.ico">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="/favicon.ico">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="/favicon.ico">
              <Text>概要 記事の〜</Text>
            </PostCard>
            <PostCard title="DNAについて" date="March 29,2022" img="/favicon.ico">
              <Text>概要 記事の〜</Text>
            </PostCard>
          </Flex>
        </Box>
        <Box p="10">
          <Text fontWeight="bold" fontSize="4xl" textAlign="center">
            Contents
          </Text>
          <Flex justifyContent="center" wrap="wrap" mx="200px" my="40px">
            <ContentCard icon="favicon.ico" title="Summary" content="学習用の要点を提供するページです。各分野のまとめを掲載しています。" />
            <ContentCard icon="favicon.ico" title="Summary" content="学習用の要点を提供するページです。各分野のまとめを掲載しています。" />
            <ContentCard icon="favicon.ico" title="Summary" content="学習用の要点を提供するページです。各分野のまとめを掲載しています。" />
            <ContentCard icon="favicon.ico" title="Summary" content="学習用の要点を提供するページです。各分野のまとめを掲載しています。" />
            <ContentCard icon="favicon.ico" title="Summary" content="学習用の要点を提供するページです。各分野のまとめを掲載しています。" />
            <ContentCard icon="favicon.ico" title="Summary" content="学習用の要点を提供するページです。各分野のまとめを掲載しています。" />
          </Flex>
        </Box>
        <Box bgColor="gray.200" p="10">
          <Text fontWeight="bold" fontSize="4xl" textAlign="center">
            Projects
          </Text>
          <Flex my="3" mx="auto" justify="center">
            <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
              All
            </Button>
            <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
              Study
            </Button>
            <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
              Academic
            </Button>
            <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
              Development
            </Button>
            <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
              Business
            </Button>
            <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
              Seminar
            </Button>
            <Button rounded="none" bgColor="gray.500" textColor="white" _hover={{ bgColor: 'teal.300' }}>
              Hobby
            </Button>
          </Flex>
          <Flex justifyContent="center" wrap="wrap" mx="200px" my="40px">
            <ProjectCard
              icon="favicon.ico"
              title="生物学の基礎解説"
              date="March 2022"
              memberNums={4}
              content="分子生物学、細胞生物学を中心とした分野の解説を行います。"
              topic={['study', 'seminar', 'summary']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="生物学の基礎解説"
              date="March 2022"
              memberNums={4}
              content="分子生物学、細胞生物学を中心とした分野の解説を行います。"
              topic={['study', 'seminar', 'summary']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="生物学の基礎解説"
              date="March 2022"
              memberNums={4}
              content="分子生物学、細胞生物学を中心とした分野の解説を行います。"
              topic={['study', 'seminar', 'summary']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="生物学の基礎解説"
              date="March 2022"
              memberNums={4}
              content="分子生物学、細胞生物学を中心とした分野の解説を行います。"
              topic={['study', 'seminar', 'summary']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="生物学の基礎解説"
              date="March 2022"
              memberNums={4}
              content="分子生物学、細胞生物学を中心とした分野の解説を行います。"
              topic={['study', 'seminar', 'summary']}
            />
            <ProjectCard
              icon="favicon.ico"
              title="生物学の基礎解説"
              date="March 2022"
              memberNums={4}
              content="分子生物学、細胞生物学を中心とした分野の解説を行います。"
              topic={['study', 'seminar', 'summary']}
            />
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
