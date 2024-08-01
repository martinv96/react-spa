import './style.css';

import BsTopNav from '../../components/TopNav/BsTopNav';
import CarreRouge from '../../components/CarreRouge';

function HomePage() {

    const pageId ="home"

    return (
        <div id={pageId}>
            <div className='container-struct'>
                <header>
                    
                        <BsTopNav />
                    
                </header>
            </div>

            <div className='container-struct'>
                <CarreRouge />
            </div>
        </div>
    )
}

export default HomePage