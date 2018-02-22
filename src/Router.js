
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ContactList from './components/ContactList';

const RouterComponent = () => (
        <Router>
            <Scene key="root" hideNavBar>
             <Scene key="Main">
               <Scene key="contactlist" component={ContactList} title="Contacts" initial />
             </Scene>
            </Scene>
        </Router>
    );

export default RouterComponent;
