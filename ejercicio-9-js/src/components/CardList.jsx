import Title from './Title'
import Card from './Card'

function CardList({ devs }) {
  return (
    <section className="py-4">
      <Title text="Nuestros desarrolladores" />
      <div className="row g-4 mt-2">
        {devs.map((dev) => (
          <div className="col-12 col-sm-6 col-lg-4" key={dev.id}>
            <Card dev={dev} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardList
