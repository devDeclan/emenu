import React from 'react';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from 'react-native-ui-kitten';
import { Provider } from "react-redux";
import store from "./store";

const ApplicationContent = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Welcome to UI Kitten</Text>
  </Layout>
);

const App = () => (
    <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <ApplicationContent />
        </ApplicationProvider>
    </Provider>
);

export default App;