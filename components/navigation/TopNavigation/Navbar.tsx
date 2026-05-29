import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
        <>
            <View style={styles.navbar}>
                <View style={styles.leftSection}>
                    <MaterialIcons name="menu-open" size={32} color="black" />
                    <Text style={styles.logoText}>SyncDesk</Text>
                </View>

                <View style={styles.rightSection}>
                    <FontAwesome5 name="search" size={22} color="blue" />
                    <Ionicons name="notifications" size={26} color="red" />
                    <EvilIcons name="user" size={34} color="black" />
                </View>
            </View>
        </>
    )
}


// Styles  -
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
    },

    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },

    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },

    logoText: {
        fontSize: 23,
        fontWeight: '700',
    },
})