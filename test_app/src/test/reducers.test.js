import reducer from '../main/reducers/index';
import {changeName, addNote} from '../main/actions/index';

describe('reducer', () => {
    it('should handle CHANGE_NAME', () => {
        expect(reducer({}, changeName('World'))).toEqual({name: 'World', notes: []});
    });
    it('should handle ADD_NOTE', () => {
        expect(reducer({notes: ['Test1']}, addNote('Test2'))).toEqual({name: "", notes: ['Test1', 'Test2']})
    });
});