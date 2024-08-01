import './style.css';

import BsTopNav from '../../components/TopNav/BsTopNav';

function HomePage() {

    const pageId ="home"

    return (
        <div id={pageId}>
            <div className='container-struct'>
                <header>
                    
                        <BsTopNav />
                    
                </header>
            </div>
        </div>
    )
}

export default HomePage