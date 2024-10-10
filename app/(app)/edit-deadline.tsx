import useToast from "@/hooks/use-toast";
import { useLocalSearchParams } from "expo-router";
import SafeArea from "@/components/utils/safe-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "@/store/hooks";
import { DatePicker } from "@/components/inputs/date-picker";
import { ColorPicker } from "@/components/inputs/color-picker";
import { updateDeadline } from "@/store/slices/deadlines-slice";
import GroupSelect from "@/components/inputs/select/group-select";
import { ScreenHeader } from "@/components/surfaces/screen-header";
import { PrimaryButton } from "@/components/inputs/buttons/primary";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Fieldset, H4, Input, ScrollView, TextArea, YStack } from "tamagui";
import {
  AddDeadlineSchema,
  AddDeadlineSchemaType,
} from "@/types/validation/add-deadline";

export default function EditDeadline() {
  const { id } = useLocalSearchParams();
  const deadline = useSelector((state) =>
    state.deadlines.deadlines.find((deadline) => deadline.id === id),
  );
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<AddDeadlineSchemaType>({
    defaultValues: {
      color: deadline?.color,
      description: deadline?.description,
      due: new Date(deadline?.due as string),
      groupIds: deadline?.groupIds,
      title: deadline?.title,
    },
    resolver: zodResolver(AddDeadlineSchema),
  });
  const { success } = useToast();
  const onSubmit: SubmitHandler<AddDeadlineSchemaType> = (updatedData) => {
    dispatch(
      updateDeadline({
        data: {
          ...updatedData,
          due: updatedData.due.toISOString(),
        },
        id: deadline?.id as string,
      }),
    );
    success("Deadline updated successfully");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeArea childrenWrapperProps={{ gap: "$6", px: "$3" }}>
        <ScreenHeader showLeftAction size="sm" title="Update deadline" />
        <YStack gap="$5">
          <Fieldset gap="$3">
            <H4>Title</H4>
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

            <H4>Due datetime</H4>
            <Controller
              control={control}
              name="due"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  date={value}
                  setDate={(date) => onChange(date)}
                  withTime
                />
              )}
            />
            <H4>Groups</H4>
            <Controller
              control={control}
              name="groupIds"
              render={({ field: { onChange, value } }) => (
                <GroupSelect
                  selectedGroups={value}
                  setSelectedGroups={onChange}
                />
              )}
            />
            <H4>Color</H4>
            <Controller
              control={control}
              name="color"
              render={({ field: { onChange, value } }) => (
                <ColorPicker
                  color={value}
                  setColor={(color) => onChange(color)}
                />
              )}
            />
            <H4>Description</H4>
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
          </Fieldset>
          <PrimaryButton onPress={handleSubmit(onSubmit)} size={"$5"}>
            Save changes
          </PrimaryButton>
        </YStack>
      </SafeArea>
    </ScrollView>
  );
}
