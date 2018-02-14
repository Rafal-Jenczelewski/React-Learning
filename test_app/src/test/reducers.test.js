import reducer from '../main/reducers/index'
import {changeName} from '../main/actions/index'

describe('reducer', () => {
    it('should handle CHANGE_NAME', () => {
        expect(reducer({}, changeName('World'))).toEqual({name: 'World'})
    })
})