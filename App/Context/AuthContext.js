// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword , signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { db} from '../../firebase'
import {doc,getDoc} from "firebase/firestore"

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
          const uid = userCredential.user.uid;
          console.log('Berhasil melakukan otentikasi. UID:', uid);
      
          const userRef = doc(db, "users", uid);
          console.log('Path referensi pengguna:', userRef.path);
      
          const userSnapshot = await getDoc(userRef);
          console.log(userSnapshot);
      
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            console.log('Data pengguna berhasil diambil:', userData);
      
            // Mengasumsikan `setUser` adalah fungsi yang mengatur data pengguna dalam state Anda
            setUser(userData);
          } else {
            alert("Pengguna tidak lagi ada.");
          }
        } catch (error) {
          console.error('Error saat login:', error.message);
          throw error; // Lempar kembali kesalahan untuk penanganan lebih lanjut, jika diperlukan
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