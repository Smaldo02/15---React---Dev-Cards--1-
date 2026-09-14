import devs from './data/devs'
import Header from './components/Header'
import CardList from './components/CardList'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <CardList devs={devs} />
      <Footer />
    </div>
  )
}

export default App
