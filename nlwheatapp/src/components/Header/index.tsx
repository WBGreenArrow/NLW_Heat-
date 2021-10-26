import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";

export const Header = () => {
    const { user, signOut } = useAuth();

    return (
        <View style={styles.container}>
            <LogoSvg />
            <View style={styles.logoutButton}>
                {user && (
                    <TouchableOpacity>
                        <Text style={styles.logouText} onPress={signOut}>
                            Sair
                        </Text>
                    </TouchableOpacity>
                )}

                <UserPhoto imageUri={user?.avatar_url} />
            </View>
        </View>
    );
};
