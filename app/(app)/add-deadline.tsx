import { Input, TextArea, YStack } from "tamagui";
import SafeArea from "@/components/utils/safe-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScreenHeader } from "@/components/surfaces/screen-header";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { DatePicker } from "@/components/feedback/dialogs/date-picker";
import {
  AddDeadlineSchema,
  AddDeadlineSchemaType,
} from "@/types/validation/add-deadline";

export default function AddDeadline() {
  const { control, handleSubmit } = useForm<AddDeadlineSchemaType>({
    defaultValues: {
      color: "#000000",
      description: "",
      due: new Date(),
      title: "",
    },
    resolver: zodResolver(AddDeadlineSchema),
  });
  const onSubmit: SubmitHandler<AddDeadlineSchemaType> = (data) => {};
  return (
    <SafeArea childrenWrapperProps={{ gap: "$3", px: "$3" }}>
      <ScreenHeader showLeftAction size="sm" title="Add deadline" />
      <YStack gap="$3">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <Input onChangeText={onChange} placeholder="Title" value={value} />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextArea
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
      </YStack>
    </SafeArea>
  );
}
