const withIcon = icon => {
  const Icon = ({ size = 30 }) => {
    return (
      <svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    )
  }

  return Icon
}

export default withIcon
