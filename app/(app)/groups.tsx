import { useSelector } from "@/store/hooks";
import { GroupsList } from "@/components/groups";
import SafeArea from "@/components/utils/safe-area";
import { H3, ScrollView, View, YStack } from "tamagui";

export default function GroupsScreen() {
  const { favoriteGroups, groups } = useSelector((state) => state.groups);
  return (
    <>
      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View h={"$8"} jc={"center"} pos={"relative"} px="$4">
            <H3>All groups</H3>
          </View>
          <YStack gap="$2" pos={"relative"} px="$4" zIndex={2}>
            <GroupsList favoriteGroups={favoriteGroups} groups={groups} />
          </YStack>
        </ScrollView>
      </SafeArea>
    </>
  );
}
