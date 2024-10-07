import { H5, View } from "tamagui";

type ErrorToastProps = {
  message: string;
};
export default function ErrorToast({ message }: ErrorToastProps) {
  return (
    <View
      alignSelf="center"
      bg={"$red-6"}
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
