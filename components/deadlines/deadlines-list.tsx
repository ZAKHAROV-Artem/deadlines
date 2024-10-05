import { useSelector } from "@/store/hooks";
import { ScrollView, YStack } from "tamagui";

import DeadlineItem from "./deadline-item";

export default function DeadlinesList() {
  const deadlines = useSelector((state) => state.deadlines.deadlines);

  return (
    <ScrollView>
      <YStack gap="$3">
        {deadlines.map((deadline) => (
          <DeadlineItem deadline={deadline} key={deadline.id} />
        ))}
      </YStack>
    </ScrollView>
  );
}
