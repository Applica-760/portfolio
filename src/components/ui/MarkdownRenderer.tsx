import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p style={{ marginBottom: '0rem', lineHeight: 1.6 }}>
            {children}
          </p>
        ),
      }}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownRenderer;
