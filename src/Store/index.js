/**
 * Created by devacc3 on 08/03/2018.
 */
import { observable} from 'mobx'

class Store {
    
    @observable data = ''
}
const store = new Store()

export default store