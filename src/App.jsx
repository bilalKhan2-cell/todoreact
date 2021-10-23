import Firebase from './components/firebase.jsx'
import React from 'react'
import Crud from './components/FireCrud.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx';

class App extends React.Component {
    render()
    {
  return(
    <>
    <Header />
    <br/>
    <br/>
      <Crud />
     <Footer /> 
    </>
  );
    }
}

export default App;
