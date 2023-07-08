import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
    FaAndroid,
    FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";
import { Platform } from "../services/gameService";
import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const color = useColorModeValue("gray.500", "gray.300");

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        mac: FaApple,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
        nintendo: SiNintendo,
    };

    return (
        <HStack marginBottom="10px">
            {platforms.map((platform) => (
                <Icon as={iconMap[platform.slug]} color={color} />
            ))}
        </HStack>
    );
};

export default PlatformIconList;
