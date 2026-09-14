function Title({ text, subtitle }) {
  return (
    <div>
      <h1>{text}</h1>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  )
}

export default Title
