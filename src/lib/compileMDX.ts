import { compile } from '@mdx-js/mdx';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import { run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { Fragment } from 'react';

export async function compileMDX(source: string) {
  const compiled = await compile(source, {
    outputFormat: 'function-body',
    rehypePlugins: [rehypePrism],
    remarkPlugins: [remarkGfm],
  });
  const { default: MDXContent } = await run(compiled, { ...runtime, Fragment });

  return {
    compiledSource: compiled.value,
    MDXContent,
  };
}
