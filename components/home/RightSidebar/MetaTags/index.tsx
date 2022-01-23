import { MutableRefObject, useRef } from 'react'
import KeywordsTag from './KeywordsTag'
import MetaTag from './MetaTag'
import { useGetInputStates } from 'hooks/useGetInputStates'

export default function MetaTags() {
  const { descriptionTextarea, keywordsInput, ogTypeInput, titleInput, author, copyright, ogUrl, rating, robots } =
    useGetInputStates()

  const codeTagRef: MutableRefObject<HTMLElement> = useRef()

  const handleCopyText = () => {
    const nodeValue: string = codeTagRef.current.innerText
    navigator.clipboard.writeText(nodeValue)
  }

  return (
    <>
      <button onClick={handleCopyText}>copy</button>
      <code ref={codeTagRef}>
        <MetaTag tagTitle="Title" htmlTemplate={`<title>${titleInput}</title>`} />
        <MetaTag tagTitle="Description" htmlTemplate={`<meta name="description" content="${descriptionTextarea}" />`} />
        <KeywordsTag tagValue={keywordsInput} />
        <MetaTag tagTitle="Og:Type" htmlTemplate={`<meta property=”og:type” content="${ogTypeInput}" />`} />
        <MetaTag tagTitle="Author" htmlTemplate={`<meta name="author" content="${author}">`} />
        <MetaTag tagTitle="Copyright" htmlTemplate={`<meta name="dcterms.rightsHolder" content="${copyright}">`} />
        <MetaTag tagTitle="OgUrl" htmlTemplate={`<meta property="og:url" content="${ogUrl}"/>`} />
        <MetaTag tagTitle="Rating" htmlTemplate={`<meta name="rating" content="${rating}">`} />
        <MetaTag tagTitle="Robots" htmlTemplate={`<meta name="robots" content="${robots}" />`} />
      </code>
    </>
  )
}
