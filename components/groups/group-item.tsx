import { Group } from "@/types/store/slices/groups";
import { Circle, H4, XStack, YStack } from "tamagui";

type GroupItemProps = {
  group: Group;
};
export default function GroupItem({ group }: GroupItemProps) {
  return (
    <YStack bg={group.color} br="$6" f={1} gap="$2" p="$3">
      <Circle bg="$white" size={"$2"} />

      <XStack jc="space-between">
        <H4>{group.name}</H4>
        <H4>4</H4>
      </XStack>
    </YStack>
  );
}
