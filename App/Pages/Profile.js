// Profile.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../Context/AuthContext';

const Profile = () => {
    const { user, signOut } = useAuth();

    if (!user) {
        // Handle the case where user is null
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Text style={styles.text}>Nama: {user?.name}</Text>
                <Text style={styles.text}>Email: {user?.email}</Text>
                <Text style={styles.text}>Id: {user?.id}</Text>
                <Text style={styles.text}>Password: {user?.password}</Text>
                {/* Additional user info if needed */}
            </View>
            <Button title="Logout" onPress={signOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    profileContainer: {
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default Profile;