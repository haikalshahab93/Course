// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword , signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../../firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Jika pengguna sudah login, ambil informasi pengguna dan atur ke state
                setUser({
                    uid: user.uid,
                    email: user.email,
                    // tambahkan informasi pengguna lainnya sesuai kebutuhan
                });
            } else {
                // Jika pengguna logout, setUser menjadi null
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser({
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                // tambahkan informasi pengguna lainnya sesuai kebutuhan
            });
        } catch (error) {
            console.error('Error signing in:', error.message);
            throw error;
        }
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    // const contextValue = { user, setUser, signIn, signOut };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };