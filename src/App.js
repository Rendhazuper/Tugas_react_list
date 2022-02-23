import React from 'react';
import Utama from './Component/utama';
import {Link} from 'react-router-dom';
import Header from './header/header';


class App extends React.Component{
    render(){
        return(
       <div>
<Header />
<Utama />
</div>
        );
    }
}

export default App; 
