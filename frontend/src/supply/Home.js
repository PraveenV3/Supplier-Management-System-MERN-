import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Request from '../supply/RequestSupply';
import { Link } from 'react-router-dom';

import '../styles/style.css';
import '@fortawesome/fontawesome-free/css/all.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    

    

    render() {
        const {  } = this.state;
        return (
            <div className={`{container}`}style={{marginTop:'-3.5%'}}>
                <Header />
                <Sidebar
                />
                
                <div className="home" style={{width: '90%', marginTop: '-45%',marginLeft: '2%' }}>
                {/* <div>
                    <Link to="/manage-suppliers" >
                    <button>
                    Manage Suppliers
                    </button>
                    </Link>
                    
                    <Link to="/request-history">
                    <button>
                    Request History
                    </button>
                    </Link>
                </div> */}
                    <Request />
                </div>
            </div>
        );
    }
}

export default Home;







