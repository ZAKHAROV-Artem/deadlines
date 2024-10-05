import { useState } from "react";
import { YStack } from "tamagui";
import { BlurView } from "expo-blur";
import { Circle, View } from "tamagui";
import { ROUTES } from "@/constants/routes";
import { router, usePathname } from "expo-router";
import PlusRec from "@/components/data-display/icons/plus-rec";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import {
  GroupAdd,
  Groups,
  Home,
  Menu,
  X,
} from "@/components/data-display/icons";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <YStack bottom={10} gap="$3" pos={"absolute"} right={5}>
      {isOpen && (
        <>
          {!ROUTES.ADD_DEADLINE.endsWith(pathname) && (
            <Animated.View
              entering={FadeInDown.duration(200)}
              exiting={FadeOutDown.duration(200)}
            >
              <Circle
                borderColor={"$black"}
                borderWidth={"$1"}
                onPress={() => router.push(ROUTES.ADD_DEADLINE)}
                ov={"hidden"}
                size={"$6"}
              >
                <BlurView
                  intensity={70}
                  style={{ flex: 1, width: "100%" }}
                  tint="systemUltraThinMaterialLight"
                >
                  <View ai={"center"} f={1} jc={"center"}>
                    <PlusRec />
                  </View>
                </BlurView>
              </Circle>
            </Animated.View>
          )}
          {!ROUTES.GROUPS.endsWith(pathname) && (
            <Animated.View
              entering={FadeInDown.duration(200)}
              exiting={FadeOutDown.duration(200)}
            >
              <Circle
                borderColor={"$black"}
                borderWidth={"$1"}
                onPress={() => router.push(ROUTES.GROUPS)}
                ov={"hidden"}
                size={"$6"}
              >
                <BlurView
                  intensity={70}
                  style={{ flex: 1, width: "100%" }}
                  tint="systemUltraThinMaterialLight"
                >
                  <View ai={"center"} f={1} jc={"center"}>
                    <Groups />
                  </View>
                </BlurView>
              </Circle>
            </Animated.View>
          )}

          {!ROUTES.ADD_GROUP.endsWith(pathname) && (
            <Animated.View
              entering={FadeInDown.duration(200)}
              exiting={FadeOutDown.duration(200)}
            >
              <Circle
                borderColor={"$black"}
                borderWidth={"$1"}
                onPress={() => router.push(ROUTES.ADD_GROUP)}
                ov={"hidden"}
                size={"$6"}
              >
                <BlurView
                  intensity={70}
                  style={{ flex: 1, width: "100%" }}
                  tint="systemUltraThinMaterialLight"
                >
                  <View ai={"center"} f={1} jc={"center"}>
                    <GroupAdd />
                  </View>
                </BlurView>
              </Circle>
            </Animated.View>
          )}
          {!ROUTES.HOME.endsWith(pathname) && (
            <Animated.View
              entering={FadeInDown.duration(200)}
              exiting={FadeOutDown.duration(200)}
            >
              <Circle
                borderColor={"$black"}
                borderWidth={"$1"}
                onPress={() => router.push(ROUTES.HOME)}
                ov={"hidden"}
                size={"$6"}
              >
                <BlurView
                  intensity={70}
                  style={{ flex: 1, width: "100%" }}
                  tint="systemUltraThinMaterialLight"
                >
                  <View ai={"center"} f={1} jc={"center"}>
                    <Home />
                  </View>
                </BlurView>
              </Circle>
            </Animated.View>
          )}
        </>
      )}
      <Circle
        borderWidth={"$1"}
        onPress={toggleMenu}
        overflow="hidden"
        size={"$6"}
      >
        <BlurView
          intensity={70}
          style={{ flex: 1, width: "100%" }}
          tint="systemUltraThinMaterialLight"
        >
          <View ai={"center"} f={1} jc={"center"}>
            <View animation={"quick"} opacity={isOpen ? 1 : 0} pos={"absolute"}>
              <X />
            </View>

            <View animation={"quick"} opacity={isOpen ? 0 : 1} pos={"absolute"}>
              <Menu />
            </View>
          </View>
        </BlurView>
      </Circle>
    </YStack>
  );
}
