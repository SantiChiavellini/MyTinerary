import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'


class Home extends React.Component {
    render() {
        return <>
        <div className='s12'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        </>
    }
}


export default Home