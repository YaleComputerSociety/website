// import fs from 'fs';
// import path from 'path';
// import { MDXRemote } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';
// import { postLinksByRoute } from '../page';

// interface PostProps {
//   mdxSource: {
//     compiledSource: string;
//     renderedOutput: string;
//     scope?: Record<string, any>;
//     frontmatter?: Record<string, any>;
//   };
// }

// // const components = {};

// const Post = ({ mdxSource }: PostProps) => {
//   return (
//     <div>
//       <h1>obama</h1>
//       <MDXRemote {...mdxSource} />
//     </div>
//   );
// };

// export default Post;

// export async function getStaticProps({ params }) {
//   const postLinksByRoute = {
//     // Assuming postLinksByRoute is a dictionary where keys are IDs and values are links to MDX files
//     "1": "/path/to/post-1.mdx",
//     "2": "/path/to/post-2.mdx",
//     // Add more entries as needed
//   };

//   const filePath = path.join(process.cwd(), postLinksByRoute[params.id]);
//   const mdxContent = fs.readFileSync(filePath, 'utf-8');

//   const mdxSource = await serialize(mdxContent);

//   return {
//     props: {
//       mdxSource,
//     },
//   };
// }
