import { format } from "date-fns";
import { Deadline } from "@/types/store/slices/deadlines";
import { Edit, Trash } from "@/components/data-display/icons";
import { Circle, H4, SizableText, useTheme, XStack, YStack } from "tamagui";

type DeadlineItemProps = {
  deadline: Deadline;
};
export default function DeadlineItem({ deadline }: DeadlineItemProps) {
  const theme = useTheme();
  return (
    <XStack
      ai={"center"}
      borderColor={"$border"}
      borderWidth={"$1"}
      br={"$7"}
      jc={"space-between"}
      key={deadline.id}
      ov={"hidden"}
      pos="relative"
      px={"$4"}
      py={"$3"}
    >
      <Circle borderColor={"$border"} borderWidth="$1" size="$2" />
      <YStack>
        <H4>{deadline.title}</H4>
        <SizableText>Due: {format(deadline.due, "MMMM dd, yyyy")}</SizableText>
      </YStack>
      <XStack gap="$2">
        <Edit stroke={theme["gray-7"].val} />
        <Trash fill={theme["red-6"].val} />
      </XStack>
    </XStack>
  );
}
