import { Dimensions } from "react-native";
import { useSelector } from "@/store/hooks";
import LottieView from "lottie-react-native";
import { FlashList } from "@shopify/flash-list";
import { LinearGradient } from "tamagui/linear-gradient";
import { Deadline } from "@/types/store/slices/deadlines";
import { ScrollView, SizableText, View, YStack } from "tamagui";

import DeadlineItem from "./deadline-item";

type DeadlineItemProps = {
  deadlines: Deadline[];
};
export default function DeadlinesList({ deadlines }: DeadlineItemProps) {
  return (
    <ScrollView>
      {/* <View pos={"relative"} rotateZ="180deg">
        <LottieView
          autoPlay
          loop
          source={require("../../assets/lotties/fire-big.json")}
          style={{
            bottom: -110,
            height: Dimensions.get("window").width,
            position: "absolute",
            width: "100%",
          }}
        />
        <LinearGradient
          bottom={-5}
          colors={["transparent", "$bg"]}
          end={[0, 1]}
          h={"$5"}
          pos={"absolute"}
          start={[0, 0]}
          w={"100%"}
          zIndex={1}
        />
      </View> */}
      <YStack gap="$3" pos={"relative"}>
        <FlashList
          data={deadlines}
          estimatedItemSize={100}
          extraData={deadlines}
          ItemSeparatorComponent={() => <View h="$1" />}
          keyExtractor={(deadline) => deadline.id}
          ListEmptyComponent={() => (
            <View jc={"center"} px="$4">
              <LottieView
                autoPlay
                loop
                source={require("../../assets/lotties/ghost.json")}
                style={{ height: 200, width: "100%" }}
              />
              <SizableText ta="center">
                {`There are no deadlines yet.\nCreate one in the menu`}
              </SizableText>
            </View>
          )}
          // ListHeaderComponent={() => <View h="$3" />}
          renderItem={({ item }) => <DeadlineItem deadline={item} />}
        />
      </YStack>
    </ScrollView>
  );
}
