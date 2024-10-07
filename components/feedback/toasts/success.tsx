import { H5, View } from "tamagui";

type SuccessToastProps = {
  message: string;
};
export default function SuccessToast({ message }: SuccessToastProps) {
  return (
    <View
      alignSelf="center"
      bg={"$teal-7"}
      br={"$12"}
      m="$2"
      px={"$5"}
      py={"$3"}
    >
      <H5 color={"$white"} fontWeight={"700"}>
        {message}
      </H5>
    </View>
  );
}
