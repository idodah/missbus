import { getApp } from '@firebase/app'
import { getAuth, onAuthStateChanged, signInAnonymously} from "@firebase/auth";

export default class AuthService {

    static setAuthChangeListener = (onAuthChange) => {
        const auth = getAuth(getApp())
        onAuthStateChanged(auth, (user) => {
            onAuthChange(user)
        });
    }

    static logout = async () => {
        const auth = getAuth(getApp())
        return auth.signOut()
    }

    static signIn = async () => {
        const auth = getAuth(getApp())
        signInAnonymously(auth)
            .then(() => {

                // Signed in -> redirect
            })
            .catch((error) => {
                // TODO: handle error
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

}