import { View } from "tamagui";

type ProgressBar2Props = {
  bg?: string;
  height?: string;
  progress: number;
  progressBg?: string;
  width?: string;
};
export default function ProgressBar2({
  bg = "$primaryTransparent20",
  height = "$0.75",
  progress,
  progressBg = "$primary",
  width = "100%",
}: ProgressBar2Props) {
  return (
    <View
      alignSelf="center"
      bg={bg}
      br="$12"
      h={height}
      overflow="hidden"
      p={"$1"}
      w={width}
    >
      <View
        animation={"medium"}
        bg={progressBg}
        br="$12"
        h={"100%"}
        scaleX={progress / 100}
      />
    </View>
  );
}
