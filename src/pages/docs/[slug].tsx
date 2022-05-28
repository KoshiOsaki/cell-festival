import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { NextPage, InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import markdownToHtml from '../api/markdownToHtml';
import { getAllPosts, getPostBySlug } from '../api/md';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'date', 'tags', 'content']);
  // ここで変換
  const content = await markdownToHtml(post.content);

  // 変換結果をpropsとして渡す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => (
  <>
    <div className="md">
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <ul>
        {post.tags?.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <section>
        {/* ここでdangerouslySetInnerHTMLを使ってHTMLタグを出力する */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
    </div>
  </>
);

export default Post;
