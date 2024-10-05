import LottieView from "lottie-react-native";
import SafeArea from "@/components/utils/safe-area";
import {
  Circle,
  H3,
  H4,
  Image,
  ScrollView,
  View,
  XStack,
  YStack,
} from "tamagui";

export default function Index() {
  return (
    <>
      <SafeArea>
        <LottieView
          autoPlay
          loop
          source={require("../../assets/lotties/leaves.json")}
          style={{
            height: 170,
            position: "absolute",
            right: -25,
            top: -60,
            transform: [{ rotate: "20deg" }],
            width: 170,
            zIndex: 1,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View h={"$8"} jc={"center"} pos={"relative"} px="$4">
            <Image
              pos={"absolute"}
              source={require("../../assets/images/shapes/1.png")}
            />
            <H3>Groups</H3>
          </View>
          <YStack gap="$2" pos={"relative"} px="$4" zIndex={2}>
            <YStack gap="$3">
              <XStack gap="$5">
                <YStack bg="$blue-5" br="$6" f={1} gap="$2" p="$3">
                  <Circle bg="$white" size={"$2"} />
                  <XStack jc="space-between">
                    <H4>Project</H4>
                    <H4>4</H4>
                  </XStack>
                </YStack>
                <YStack bg="$teal-5" br="$6" f={1} gap="$2" p="$3">
                  <Circle bg="$white" size={"$2"} />

                  <XStack jc="space-between">
                    <H4>Project</H4>
                    <H4>4</H4>
                  </XStack>
                </YStack>
              </XStack>
              <XStack gap="$5">
                <YStack bg="$purple-5" br="$6" f={1} gap="$2" p="$3">
                  <Circle bg="$white" size={"$2"} />
                  <XStack jc="space-between">
                    <H4>Project</H4>
                    <H4>4</H4>
                  </XStack>
                </YStack>
                <YStack bg="$orange-5" br="$6" f={1} gap="$2" p="$3">
                  <Circle bg="$white" size={"$2"} />
                  <XStack jc="space-between">
                    <H4>Project</H4>
                    <H4>4</H4>
                  </XStack>
                </YStack>
              </XStack>
            </YStack>
            <H3>Deadlines</H3>
            <ScrollView>
              <YStack gap="$3">
                {Array.from({ length: 10 }).map((_, i) => (
                  <View
                    borderColor={"$border"}
                    borderWidth={"$1"}
                    br={"$4"}
                    h={"$8"}
                    key={i}
                    ov={"hidden"}
                    p={"$3"}
                    pos="relative"
                  >
                    <H3>Finish main part</H3>
                    <View
                      bg="$teal-5"
                      bottom={0}
                      left={0}
                      p="$2"
                      pos={"absolute"}
                      right={0}
                    />
                  </View>
                ))}
              </YStack>
            </ScrollView>
          </YStack>
        </ScrollView>
      </SafeArea>
    </>
  );
}
