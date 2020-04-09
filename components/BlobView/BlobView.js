import { Fragment } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/languages/prism';

export default function BlobView({ path, content }) {
  const contentBuffer = Buffer.from(content.data);
  return (
    <Fragment>
      <p className='text-muted'>{path}</p>
      <div>
        <SyntaxHighlighter showLineNumbers={true} style={prism}>
          {contentBuffer.toString()}
        </SyntaxHighlighter>
      </div>
    </Fragment>
  );
}
