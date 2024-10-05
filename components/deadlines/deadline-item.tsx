import { H3, View } from "tamagui";
import { Deadline } from "@/types/store/slices/deadlines";

type DeadlineItemProps = {
  deadline: Deadline;
};
export default function DeadlineItem({ deadline }: DeadlineItemProps) {
  return (
    <View
      borderColor={"$border"}
      borderWidth={"$1"}
      br={"$4"}
      h={"$8"}
      key={deadline.id}
      ov={"hidden"}
      p={"$3"}
      pos="relative"
    >
      <H3>{deadline.title}</H3>
      <View
        bg="$teal-5"
        bottom={0}
        left={0}
        p="$2"
        pos={"absolute"}
        right={0}
      />
    </View>
  );
}
