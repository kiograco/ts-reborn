import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './UserSlice';
import { auth } from '../firebase/firebase';
import { login, logout } from './UserSlice'

export const Authentication = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName,
                    })
                );
            } else {
                dispatch(logout());
            }
        })
    }, [user]);
    return {user}       
};