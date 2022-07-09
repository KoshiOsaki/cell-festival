import { Container, Flex, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ResizeTextarea from 'react-textarea-autosize';
import styles from '../styles/Markdown.module.scss';

const EditTest = () => {
  const [content, setContent] = useState<string>('');
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList justifyContent="end">
          <Tab _focus={{ _focus: 'none' }}>編集</Tab>
          <Tab _focus={{ _focus: 'none' }}>プレビュー</Tab>
          <Tab _focus={{ _focus: 'none' }}>ハーフ</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <EditBox editerStatus="edit" content={content} setContent={setContent} />
          </TabPanel>
          <TabPanel>
            <EditBox editerStatus="preview" content={content} setContent={setContent} />
          </TabPanel>
          <TabPanel>
            <EditBox editerStatus="half" content={content} setContent={setContent} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default EditTest;

const EditBox = ({ editerStatus, content, setContent }: any) => {
  return (
    <Flex w="full" direction="column">
      {editerStatus === 'edit' && (
        <Container minW="full" bg="white" rounded="8px" px="4" py="6" boxShadow="sm">
          <Flex direction="column" w="full" px="4">
            <Textarea
              minH="140"
              fontSize="lg"
              fontWeight="bold"
              lineHeight={1.5}
              variant="unstyled"
              overflow="hidden"
              resize="none"
              minRows={1}
              as={ResizeTextarea}
              placeholder="マークダウンで入力..."
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
          </Flex>
        </Container>
      )}
      {editerStatus === 'preview' && (
        <Container minW="full" bg="white" rounded="8px" px="4" py="6" boxShadow="sm">
          <Flex direction="column" w="full" px="4">
            <ReactMarkdown className={styles.markdown}>{content}</ReactMarkdown>
          </Flex>
        </Container>
      )}
      {editerStatus === 'half' && (
        <HStack w="full" align="start">
          <Container flex="1" bg="white" rounded="8px" px="4" py="6" boxShadow="sm">
            <Flex direction="column" w="full" px="4">
              <Textarea
                minH="140"
                fontSize="lg"
                fontWeight="bold"
                lineHeight={1.5}
                variant="unstyled"
                overflow="hidden"
                resize="none"
                minRows={1}
                as={ResizeTextarea}
                placeholder="マークダウンで入力..."
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              />
            </Flex>
          </Container>
          <Container flex="1" bg="white" rounded="8px" px="4" py="6" boxShadow="sm">
            <ReactMarkdown className={styles.markdown}>{content}</ReactMarkdown>
          </Container>
        </HStack>
      )}
    </Flex>
  );
};
