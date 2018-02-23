
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ContactList from './components/ContactList';
import ContactInfo from './components/ContactInfo';

const RouterComponent = () => (
        <Router>
            <Scene key="root" hideNavBar>
             <Scene key="Main">
               <Scene key="contactlist" component={ContactList} title="Contacts" initial />
               <Scene key="contactInfo" component={ContactInfo} title="Contact Info" />
             </Scene>
            </Scene>
        </Router>
    );

export default RouterComponent;
