import * as Crypto from "expo-crypto";
import { useDispatch } from "@/store/hooks";
import SafeArea from "@/components/utils/safe-area";
import { Fieldset, Input, TextArea } from "tamagui";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDeadline } from "@/store/slices/deadlines-slice";
import GroupSelect from "@/components/inputs/select/group-select";
import { ScreenHeader } from "@/components/surfaces/screen-header";
import { PrimaryButton } from "@/components/inputs/buttons/primary";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { DatePicker } from "@/components/feedback/dialogs/date-picker";
import {
  AddDeadlineSchema,
  AddDeadlineSchemaType,
} from "@/types/validation/add-deadline";

export default function AddDeadline() {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<AddDeadlineSchemaType>({
    defaultValues: {
      color: "#000000",
      description: "",
      due: new Date(),
      groupIds: [],
      title: "",
    },
    resolver: zodResolver(AddDeadlineSchema),
  });
  const onSubmit: SubmitHandler<AddDeadlineSchemaType> = (data) => {
    dispatch(
      createDeadline({
        ...data,
        id: Crypto.randomUUID(),
      }),
    );
    reset();
  };
  return (
    <SafeArea childrenWrapperProps={{ gap: "$3", px: "$3" }}>
      <ScreenHeader showLeftAction size="sm" title="Add deadline" />
      <Fieldset gap="$3">
        <Controller
          control={control}
          name="title"
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
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextArea
              borderColor={"$border"}
              borderWidth={"$1"}
              br={"$6"}
              onChangeText={onChange}
              placeholder="Description"
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="due"
          render={({ field: { onChange, value } }) => (
            <DatePicker date={value} setDate={(date) => onChange(date)} />
          )}
        />
        <Controller
          control={control}
          name="groupIds"
          render={({ field: { onChange, value } }) => (
            <GroupSelect selectedGroups={value} setSelectedGroups={onChange} />
          )}
        />
      </Fieldset>
      <PrimaryButton onPress={handleSubmit(onSubmit)} size={"$5"}>
        Add deadline
      </PrimaryButton>
    </SafeArea>
  );
}
