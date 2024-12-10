import { useDispatch, useSelector } from 'react-redux';
import { change } from '../state/slices/phoneNumber.js';

export function PhoneNumber() {
    // we take the value out of the slice
    const phoneNumber = useSelector(state => state.phoneNumber.value);
    const dispatch = useDispatch();

    function changePhoneNumber() {
        // in the real scenario we'd pass here the new value
        dispatch(change('New phone number'));
    }

    return (
        <div>
            <p>Your phone number</p>
            <p>{phoneNumber}</p>

            <button onClick={changePhoneNumber}>Change phone number</button>
        </div>
    )
}