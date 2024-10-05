import * as Crypto from "expo-crypto";
import { Fieldset, Input } from "tamagui";
import { useDispatch } from "@/store/hooks";
import SafeArea from "@/components/utils/safe-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { createGroup } from "@/store/slices/groups-slice";
import { ScreenHeader } from "@/components/surfaces/screen-header";
import { PrimaryButton } from "@/components/inputs/buttons/primary";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  AddGroupSchema,
  AddGroupSchemaType,
} from "@/types/validation/add-group";

export default function AddGroup() {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<AddGroupSchemaType>({
    defaultValues: {
      color: "#000000",
      name: "",
    },
    resolver: zodResolver(AddGroupSchema),
  });
  const onSubmit: SubmitHandler<AddGroupSchemaType> = (data) => {
    dispatch(
      createGroup({
        ...data,
        deadLinesIds: [],
        id: Crypto.randomUUID(),
      }),
    );
    reset();
  };
  return (
    <SafeArea childrenWrapperProps={{ gap: "$3", px: "$3" }}>
      <ScreenHeader showLeftAction size="sm" title="Add group" />
      <Fieldset gap="$3">
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              borderColor={"$border"}
              borderWidth={"$1"}
              br={"$6"}
              onChangeText={onChange}
              placeholder="Title"
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="color"
          render={({ field: { onChange, value } }) => (
            <Input
              borderColor={"$border"}
              borderWidth={"$1"}
              br={"$6"}
              onChangeText={onChange}
              placeholder="Color"
              value={value}
            />
          )}
        />
      </Fieldset>
      <PrimaryButton onPress={handleSubmit(onSubmit)} size={"$5"}>
        Add group
      </PrimaryButton>
    </SafeArea>
  );
}
