import { useState } from 'react';
import PostPreview from './PostPreview';

export default function PostForm() {
  const [markdown, setMarkdown] = useState();

  const setData = (e: any) => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };

  return (
    <div className="post-form min-h-screen">
      <div className="h-screen flex flex-col">
        <div className="pl-9 pt-9">
          <a
            href="/"
            className="transition duration-500 flex items-center justify-center rounded-full hover:bg-white hover:shadow-xl"
            style={{ width: '50px', height: '50px' }}
          ></a>
        </div>
        <h1 className="text-center font-bold text-4xl py-10">投稿を作成</h1>
        <div className="editor flex-grow flex-shrink">
          <form className="h-full">
            <input
              type="text"
              id="post-title"
              placeholder="Title"
              className="px-5 block mx-auto w-4/5 rounded-lg border h-14 text-2xl font-bold focus:outline-none mb-8 shadow-lg"
            />
            <div className="flex justify-between h-3/5" style={{ maxHeight: '300px' }}>
              <div className="w-1/2 ml-10">
                <textarea
                  name="md"
                  id="md"
                  placeholder="Markdownで記述"
                  className="markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2"
                  value={markdown}
                  onChange={setData}
                ></textarea>
              </div>
              <div className="w-1/2 mr-10">
                <PostPreview markdown={markdown} />
              </div>
            </div>
            <input type="submit" className="submit-post w-36 h-10 my-8 rounded-md font-bold block mx-auto hover:opacity-70" />
          </form>
        </div>
      </div>
    </div>
  );
}
