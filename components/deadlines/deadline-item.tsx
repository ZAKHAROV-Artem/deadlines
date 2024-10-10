import { format } from "date-fns";
import { router } from "expo-router";
import useToast from "@/hooks/use-toast";
import { cutText } from "@/utils/helpers";
import { ROUTES } from "@/constants/routes";
import { useDispatch } from "@/store/hooks";
import { DIALOGS } from "@/types/enums/dialogs";
import { Deadline } from "@/types/store/slices/deadlines";
import { openDialog } from "@/store/slices/dialogs-slice";
import { Edit, Trash } from "@/components/data-display/icons";
import { useCountProgress } from "@/hooks/use-count-progress";
import { ProgressBar2 } from "@/components/data-display/charts";
import { deleteDeadline } from "@/store/slices/deadlines-slice";
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
  onPress?: () => void;
};
export default function DeadlineItem({ deadline, onPress }: DeadlineItemProps) {
  const theme = useTheme();
  const progress = useCountProgress(deadline.due);
  const { success } = useToast();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      openDialog({
        data: {
          onCancel: () => {},
          onConfirm: () => {
            dispatch(deleteDeadline(deadline.id));
            success("Deadline deleted");
          },
        },
        dialogName: DIALOGS.CONFIRM_ACTION,
      }),
    );
  };
  return (
    <XStack
      ai={"center"}
      bg={"$bg"}
      borderColor={"$border"}
      borderWidth={"$1"}
      br={"$7"}
      onPress={onPress}
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
          <H4>{cutText(deadline.title, 20)}</H4>
          <SizableText>
            Due: {format(deadline.due, "MMMM dd, yyyy HH:MM")}
          </SizableText>
        </YStack>
        <XStack gap="$2">
          <Edit
            onPress={() =>
              router.push({
                params: { id: deadline.id },
                pathname: ROUTES.EDIT_DEADLINE,
              })
            }
            stroke={theme["gray-7"].val}
          />
          <Trash fill={theme["red-6"].val} onPress={handleDelete} />
        </XStack>
      </XStack>
    </XStack>
  );
}
