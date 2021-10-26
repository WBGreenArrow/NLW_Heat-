import React from "react";

import { Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import avatarImg from "../../assets/avatar.png";

import { styles } from "./styles";
import { COLORS } from "../../theme";

const SIZES = {
    SMALL: {
        containerSize: 32,
        avataSize: 28,
    },
    NORMAL: {
        containerSize: 48,
        avataSize: 42,
    },
};

type Props = {
    imageUri: string | undefined;
    sizes?: "SMALL" | "NORMAL";
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export const UserPhoto = ({ imageUri, sizes = "NORMAL" }: Props) => {
    const { containerSize, avataSize } = SIZES[sizes];

    return (
        <LinearGradient
            colors={[COLORS.PINK, COLORS.YELLOW]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.9, y: 1 }}
            style={[
                styles.container,
                {
                    width: containerSize,
                    height: containerSize,
                    borderRadius: containerSize / 2,
                },
            ]}
        >
            <Image
                source={{
                    uri: imageUri || AVATAR_DEFAULT,
                }}
                style={[
                    styles.avatar,
                    {
                        width: avataSize,
                        height: avataSize,
                        borderRadius: avataSize / 2,
                    },
                ]}
            />
        </LinearGradient>
    );
};
