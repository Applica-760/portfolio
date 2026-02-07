import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Fragment, type ReactNode, isValidElement, Children } from 'react';
import LinkCard from './LinkCard';
import LinkCardContainer from './LinkCardContainer';

interface MarkdownRendererProps {
  content: string;
}

// p タグ内にブロックレベル要素があるかチェック
function hasBlockLevelChild(children: ReactNode): boolean {
  const childArray = Children.toArray(children);
  return childArray.some(
    (child) =>
      isValidElement(child) &&
      (child.type === LinkCardContainer || 
       (typeof child.type === 'string' && child.type === 'linkcard-container'))
  );
}

function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }: { children: ReactNode }) => (
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0rem' }}>
            {children}
          </h1>
        ),
        h2: ({ children }: { children: ReactNode }) => (
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            {children}
          </h2>
        ),
        h3: ({ children }: { children: ReactNode }) => (
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            {children}
          </h3>
        ),
        p: ({ children }: { children: ReactNode }) => {
          // ブロックレベル要素が含まれている場合は Fragment を返す
          if (hasBlockLevelChild(children)) {
            return <Fragment>{children}</Fragment>;
          }
          return (
            <p style={{ marginBottom: '0rem', lineHeight: 1.6 }}>
              {children}
            </p>
          );
        },
        linkcard: ({ node, ...props }: any) => (
          <LinkCard
            url={props.url as string}
            title={props.title as string}
            description={props.description as string}
            image={props.image as string}
          />
        ),
        'linkcard-container': ({ children }: { children: ReactNode }) => (
          <LinkCardContainer>{children}</LinkCardContainer>
        ),
      } as any}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownRenderer;
