import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { menuGroups } from './config/sidebarLinks.data';

interface SidebarProps {
    onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
    return (
        <Modal transparent={true} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Menu</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <MaterialIcons name="close" size={28} color="black" onPress={onClose} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {menuGroups.map((group, index) => (
                            <View key={index} style={styles.group}>
                                {group.map((item) => (
                                    <TouchableOpacity key={item.id} style={styles.menuItem} activeOpacity={0.7} onPress={onClose}>
                                        <MaterialIcons name={item.icon as any} size={24} color="#333" style={styles.icon} />
                                        <Text style={styles.menuText}>{item.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.backdrop} activeOpacity={1} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    backdrop: {
        flex: 1,
    },
    container: {
        backgroundColor: '#fff',
        width: 280,
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: '#eee',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '700',
    },
    group: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    lastGroup: {
        borderBottomWidth: 0,
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    icon: {
        marginRight: 16,
    },
    menuText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
});