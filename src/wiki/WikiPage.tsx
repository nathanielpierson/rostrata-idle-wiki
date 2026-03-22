import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPageMarkdown } from './wikiContent'
import WikiLink from './WikiLink'

export default function WikiPage() {
  const { slug } = useParams()
  const pageSlug = slug ?? 'index'
  const source = getPageMarkdown(pageSlug)

  if (source === null) {
    return (
      <div className="wiki-missing">
        <h1>Page not found</h1>
        <p>
          There is no wiki page for <code>/{slug ?? ''}</code>.
        </p>
        <p>
          Add <code>src/content/wiki/{slug ?? 'your-page'}.md</code> and refresh.
        </p>
        <Link to="/">← Home</Link>
      </div>
    )
  }

  return (
    <article className="wiki-article">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node: _node, ...props }) => <WikiLink {...props} />,
        }}
      >
        {source}
      </ReactMarkdown>
    </article>
  )
}
