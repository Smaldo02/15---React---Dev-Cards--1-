function Card({ dev }) {
  const { nombre, rol, stack, skills, disponible, github, avatar } = dev

  const badgeClass = stack === 'Frontend'
    ? 'bg-primary'
    : stack === 'Backend'
      ? 'bg-success'
      : 'bg-warning text-dark'

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body text-center">
        <img
          src={avatar}
          alt={nombre}
          className="rounded-circle mb-3"
          width={100}
          height={100}
        />
        <h5 className="card-title mb-1">{nombre}</h5>
        <p className="card-subtitle text-muted mb-2">{rol}</p>

        <span className={`badge ${badgeClass} mb-2`}>{stack}</span>

        {skills.length > 0 && (
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2 my-2">
            {skills.map((skill) => (
              <li key={skill} className="badge bg-light text-dark border">
                {skill}
              </li>
            ))}
          </ul>
        )}

        <p className={disponible ? 'text-success fw-bold' : 'text-danger fw-bold'}>
          {disponible ? 'Disponible' : 'No disponible'}
        </p>

        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="text-dark">
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
