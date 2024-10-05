import { useSelector } from "@/store/hooks";
import { Circle, H4, XStack, YStack } from "tamagui";

export default function GroupsList() {
  const groups = useSelector((state) => state.groups.groups);
  return (
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
    </YStack>
  );
}
