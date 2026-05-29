import { Navbar } from "@/components/navigation/TopNavigation";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView>
            <View>
                <Navbar />
            </View>
        </SafeAreaView>
    );
}