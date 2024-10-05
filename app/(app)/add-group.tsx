import SafeArea from "@/components/utils/safe-area";
import { ScreenHeader } from "@/components/surfaces/screen-header";

export default function AddGroup() {
  return (
    <SafeArea childrenWrapperProps={{ px: "$3" }}>
      <ScreenHeader showLeftAction size="sm" title="Add group" />
    </SafeArea>
  );
}
