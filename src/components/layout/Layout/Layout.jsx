import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Helmet} from 'react-helmet'
const Layout = ({children,title,description,keywords,author}) => {
    return (
        <div style={{background:"#3e3e3f"}}>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta  name='keywords' content={keywords}/>
                <meta  name='author' content={author}/>
                <title>{title}</title>
            </Helmet>
            <Header/>
            <main style={{minHeight:'80vh'}}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

Layout.defaultProps = {
title : 'Topzone app',
    description : "My project",
    keywords : "React js, node, mongoodb",
    author : "Mai Văn Đoàn"
}

export default Layout;