import { View, XStack, YStack } from "tamagui";
import { FlashList } from "@shopify/flash-list";
import { Group } from "@/types/store/slices/groups";

import GroupItem from "./group-item";

type GroupItemProps = {
  favoriteGroups: string[];
  groups: Group[];
};
export default function GroupsList({ favoriteGroups, groups }: GroupItemProps) {
  return (
    <YStack gap="$3">
      <XStack gap="$5">
        <FlashList
          data={groups}
          estimatedItemSize={100}
          extraData={favoriteGroups}
          ItemSeparatorComponent={() => <View h="$1" />}
          numColumns={2}
          renderItem={({ index, item }) => (
            <View
              f={1}
              pl={index % 2 === 0 ? 0 : "$2"}
              pr={index % 1 === 0 ? "$2" : 0}
            >
              <GroupItem
                group={item}
                isFavorite={favoriteGroups.includes(item.id)}
              />
            </View>
          )}
        />
      </XStack>
    </YStack>
  );
}
