import { format } from "date-fns";
import { Deadline } from "@/types/store/slices/deadlines";
import { Edit, Trash } from "@/components/data-display/icons";
import { useCountProgress } from "@/hooks/use-count-progress";
import { ProgressBar2 } from "@/components/data-display/charts";
import {
  Circle,
  H4,
  SizableText,
  useTheme,
  View,
  XStack,
  YStack,
} from "tamagui";

type DeadlineItemProps = {
  deadline: Deadline;
};
export default function DeadlineItem({ deadline }: DeadlineItemProps) {
  const theme = useTheme();
  const progress = useCountProgress(deadline.due);
  return (
    <XStack
      ai={"center"}
      bg={"$bg"}
      borderColor={"$border"}
      borderWidth={"$1"}
      br={"$7"}
      ov={"hidden"}
      pos="relative"
      px={"$4"}
      py={"$3"}
    >
      <View f={1} left="$2" pos={"absolute"} right="$2" top="$2">
        <ProgressBar2 progress={progress} />
      </View>
      <XStack
        ai="center"
        jc={"space-between"}
        pos={"relative"}
        w="100%"
        zIndex={2}
      >
        <Circle borderColor={"$border"} borderWidth="$1" size="$2" />
        <YStack>
          <H4>{deadline.title}</H4>
          <SizableText>
            Due: {format(deadline.due, "MMMM dd, yyyy HH:MM")}
          </SizableText>
        </YStack>
        <XStack gap="$2">
          <Edit stroke={theme["gray-7"].val} />
          <Trash fill={theme["red-6"].val} />
        </XStack>
      </XStack>
    </XStack>
  );
}
