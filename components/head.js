import NextHead from 'next/head'

const image = ''

const Head = ({
  title = 'PokèDex',
  description = 'PokèDex Example',
  image,
  children,
}) => {

  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xis___" />
      <meta name="author" content="Xis" />
      <link rel="icon" href="/favicon.ico" />

      {children}
    </NextHead>
  )
}

export default Head
