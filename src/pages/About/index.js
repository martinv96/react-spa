import "./style.css"
import BsTopNav from '../../components/TopNav/BsTopNav';


function AboutPage() {
    const pageId = "about"
    return(
      <div id={pageId}>
        <div className="container-struct">
        <header>
          <BsTopNav />
        </header>
        </div>
      </div>
    )
  }
  export default AboutPage