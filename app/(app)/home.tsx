import LottieView from "lottie-react-native";
import { GroupsList } from "@/components/groups";
import SafeArea from "@/components/utils/safe-area";
import { DeadlinesList } from "@/components/deadlines";
import { useDispatch, useSelector } from "@/store/hooks";
import { H3, Image, ScrollView, View, YStack } from "tamagui";
import { setIsShown } from "@/store/slices/welcome-screen-slice";

export default function Index() {
  const dispatch = useDispatch();
  const { favoriteGroups, groups } = useSelector((state) => state.groups);
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
            <H3>Favorite groups</H3>
          </View>
          <YStack gap="$2" pos={"relative"} px="$4" zIndex={2}>
            <GroupsList
              favoriteGroups={favoriteGroups}
              groups={groups.filter((group) =>
                favoriteGroups.includes(group.id),
              )}
            />
            <H3 onPress={() => dispatch(setIsShown(true))}>Deadlines</H3>
            <DeadlinesList />
          </YStack>
        </ScrollView>
      </SafeArea>
    </>
  );
}
