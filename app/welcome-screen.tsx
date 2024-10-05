import { router } from "expo-router";
import { ROUTES } from "@/constants/routes";
import { ImageBackground } from "react-native";
import SafeArea from "@/components/utils/safe-area";
import { ArrowRight } from "@/components/data-display/icons";
import { Button, H1, SizableText, XStack, YStack } from "tamagui";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/images/gradients/1.png")}
      style={{ flex: 1, height: "100%", width: "100%" }}
    >
      <SafeArea pure>
        <YStack ai={"center"} gap="$4" h={"90%"} jc={"center"} px="$4" py="$4">
          <H1 color={"$textPrimary"}>Deadlines</H1>
          <SizableText
            color={"$textPrimary"}
            fontStyle="italic"
            size="$6"
            ta={"center"}
          >
            {`Innovative, user-friendly,\nand easy.`}
          </SizableText>
          <Button
            bg={"$white-15"}
            borderColor={"$gray-7"}
            borderWidth={"$0.5"}
            color={"$textPrimary"}
            onPress={() => router.push(ROUTES.HOME)}
            size={"$6"}
          >
            <XStack ai={"center"} gap="$3">
              <SizableText>Get started</SizableText>
              <ArrowRight />
            </XStack>
          </Button>
        </YStack>
      </SafeArea>
    </ImageBackground>
  );
}
