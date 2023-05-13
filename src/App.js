
import './App.css';

const Logo = () =>
  <a href="#"><img src="./logo.png" alt="logo" class="logo"/></a>

const Header = () =>
  <header>
    <Logo />
    <Menu />
  </header>  

const Menu = () =>
  <nav class="nav_menu">
    <p class="menu_item"><a href="#">Item 1</a></p>
    <p class="menu_item"><a href="#">Item 2</a></p>
    <p class="menu_item"><a href="#">Item 3</a></p>
    <p class="menu_item"><a href="#">Item 4</a></p>
    <p class="menu_item"><a href="#">Item 5</a></p>
  </nav>

const Description = () =>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolores error et consequuntur veritatis, excepturi odit officiis eveniet nihil, quae, quaerat obcaecati saepe deleniti nesciunt sunt doloribus veniam! At, sint?
      Modi recusandae nisi repellat explicabo ullam non delectus et perferendis! Distinctio, dignissimos voluptate. Numquam, nisi! Unde consequatur molestiae natus aliquid minus. In blanditiis sit numquam cum quasi vel enim culpa!
  </p>

const CardImg = () =>
  <img src="./card_img.jpg" alt="lake" class="card-img"/>

const Card = () =>
  <div class="card">
    <CardImg />
    <h3>Lorem ipsum dolor sit amet.</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum temporibus perferendis explicabo aliquid, commodi inventore sapiente vel repellendus nemo.</p>
    <CardButton />
  </div>

const CardButton = () =>
  <div class="card_button"><a href="#">Go</a></div>
const Main = () =>
  <main>
    <article>
        <Description />
        <h1>Our Work</h1>
        <div class="content_block-card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </article>
        <AsideLeft />
        <AsideRight />
  </main>

const AsideLeft = () =>  
  <aside class="aside_1 aside">
    <p>Aside 1</p>
  </aside>

const AsideRight = () =>  
  <aside class="aside_2 aside">
    <p>Aside 2</p>
  </aside>  

const Footer = () =>
  <footer>Footer</footer>

function App() {
  return (
      <> 
        <Header />
        <Main />
        <Footer />
      </>         
  ) ;

}

export default App;
