import "./style.css"
import BsTopNav from '../../components/TopNav/BsTopNav';


function ContactPage() {
    const pageId = "contact"
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
  export default ContactPage