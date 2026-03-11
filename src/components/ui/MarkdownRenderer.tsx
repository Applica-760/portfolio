import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Fragment, type ReactNode, isValidElement, Children, createContext, useContext } from 'react';
import LinkCard from './LinkCard';
import LinkCardContainer from './LinkCardContainer';
import ImageRow from './ImageRow';

const InsidePreContext = createContext(false);

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
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0rem', paddingLeft: '1.0rem' }}>
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
            <p style={{ marginBottom: '0rem', lineHeight: 1.6, paddingLeft: '1.5rem' }}>
              {children}
            </p>
          );
        },
        ul: ({ children }: { children: ReactNode }) => (
          <ul style={{ paddingLeft: '3rem', marginBottom: '1rem', lineHeight: 1.6 }}>
            {children}
          </ul>
        ),
        ol: ({ children }: { children: ReactNode }) => (
          <ol style={{ paddingLeft: '3rem', marginBottom: '1rem', lineHeight: 1.6 }}>
            {children}
          </ol>
        ),
        li: ({ children }: { children: ReactNode }) => (
          <li style={{ marginBottom: '0.5rem' }}>
            {children}
          </li>
        ),
        img: ({ src, alt, width, style }: { src?: string; alt?: string; width?: string; style?: any }) => (
          <img
            src={src}
            alt={alt || ''}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '1rem',
              marginBottom: '1rem',
              maxWidth: width || '100%',
              width: width || '100%',
              height: 'auto',
              borderRadius: '8px',
              ...style,
            }}
          />
        ),
        linkcard: ({ node, ...props }: any) => (
          <LinkCard
            url={props.url as string}
            title={props.title as string}
            description={props.description as string}
            image={props.image as string}
            imageFit={(props.imagefit || props.imageFit) as 'width' | 'height' | undefined}
          />
        ),
        'linkcard-container': ({ children }: { children: ReactNode }) => (
          <LinkCardContainer>{children}</LinkCardContainer>
        ),
        'image-row': ({ children }: { children: ReactNode }) => (
          <ImageRow>{children}</ImageRow>
        ),
        pre: ({ children }: { children: ReactNode }) => (
          <InsidePreContext.Provider value={true}>
            <pre style={{
              background: 'rgba(150, 158, 166, 0.2)',
              border: '1px solid #d0d7de',
              borderRadius: '6px',
              padding: '16px',
              overflowX: 'auto',
              marginLeft: '1.5rem',
              marginRight: '1.5rem',
              marginBottom: '1rem',
              fontSize: '85%',
              lineHeight: 1.45,
            }}>
              {children}
            </pre>
          </InsidePreContext.Provider>
        ),
        code: ({ children }: { children: ReactNode }) => {
          const insidePre = useContext(InsidePreContext);
          const githubMono = "'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
          return insidePre ? (
            <code style={{
              fontFamily: githubMono,
              color: '#24292f',
              background: 'transparent',
            }}>
              {children}
            </code>
          ) : (
            <code style={{
              fontFamily: githubMono,
              background: 'rgba(150, 158, 166, 0.2)',
              border: '1px solid #d0d7de',
              padding: '0.2em 0.4em',
              borderRadius: '6px',
              fontSize: '85%',
              color: '#24292f',
            }}>
              {children}
            </code>
          );
        },
      } as any}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownRenderer;
