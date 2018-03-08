/**
 * Created by devacc3 on 08/03/2018.
 */

import { Router, Scene, Actions } from 'react-native-mobx'
import { Provider }from 'mobx-react/native'

import MainPage from '../MainPage'
import SplashPage from '../SplashPage'

import store from '../Store'

const routes = ()=>{
    return(
    <Provider store={store} >
        <Router >
            <Scene
                key="Splash"
                component={SplashPage}
                hideNavbar
                initial>
            </Scene>
            <Scene
                key="Main"
                component={MainPage}
                hideNavBar>
            </Scene>
            </Router>
        </Provider>
    )
}

export default Routes = routes() 