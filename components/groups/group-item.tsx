import { useDispatch } from "@/store/hooks";
import { Group } from "@/types/store/slices/groups";
import { Circle, H4, XStack, YStack } from "tamagui";
import {
  addFavoriteGroup,
  removeFavoriteGroup,
} from "@/store/slices/groups-slice";

type GroupItemProps = {
  group: Group;
  isFavorite: boolean;
};
export default function GroupItem({ group, isFavorite }: GroupItemProps) {
  const dispatch = useDispatch();
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteGroup(group.id));
    } else {
      dispatch(addFavoriteGroup(group.id));
    }
  };
  return (
    <YStack bg={group.color} br="$6" f={1} gap="$2" p="$3">
      <Circle
        bg={isFavorite ? "$orange-5" : "$white"}
        onPress={toggleFavorite}
        size={"$2"}
      />

      <XStack jc="space-between">
        <H4>{group.name}</H4>
        <H4>{group.deadLinesIds.length}</H4>
      </XStack>
    </YStack>
  );
}
