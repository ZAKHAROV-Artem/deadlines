import { useDispatch } from "@/store/hooks";
import LottieView from "lottie-react-native";
import { FlashList } from "@shopify/flash-list";
import { DIALOGS } from "@/types/enums/dialogs";
import { Deadline } from "@/types/store/slices/deadlines";
import { openDialog } from "@/store/slices/dialogs-slice";
import { ScrollView, SizableText, View, YStack } from "tamagui";

import DeadlineItem from "./deadline-item";
import DeadlinesDetails from "../feedback/dialogs/deadline-details";
import ConfirmActionDialog from "../feedback/dialogs/confirm-action-dialog";

type DeadlineItemProps = {
  deadlines: Deadline[];
};
export default function DeadlinesList({ deadlines }: DeadlineItemProps) {
  const dispatch = useDispatch();
  const handleOpenDeadlineDetails = (deadline: Deadline) => {
    dispatch(
      openDialog({ data: deadline, dialogName: DIALOGS.DEADLINE_DETAILS }),
    );
  };
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
          renderItem={({ item }) => (
            <DeadlineItem
              deadline={item}
              onPress={() => handleOpenDeadlineDetails(item)}
            />
          )}
        />
      </YStack>
      <DeadlinesDetails />
      <ConfirmActionDialog />
    </ScrollView>
  );
}
