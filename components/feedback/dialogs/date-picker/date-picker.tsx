import { useState } from "react";
import { format } from "date-fns";
import DateTimePicker from "react-native-ui-datepicker";
import { CalendarSearch, X } from "@/components/data-display/icons";
import {
  Button,
  Dialog,
  SizableText,
  Unspaced,
  useTheme,
  XStack,
} from "tamagui";

type DatePickerProps = {
  date: Date;
  setDate: (date: Date) => void;
};

export default function DatePicker({ date, setDate }: DatePickerProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [localDate, setLocalDate] = useState<Date>(date);

  const theme = useTheme();

  const handleClose = () => setOpen(false);
  const handleSave = () => {
    setDate(localDate);
  };
  return (
    <Dialog modal onOpenChange={setOpen} open={open}>
      <Dialog.Trigger asChild>
        <XStack
          ai={"center"}
          borderWidth="$0.5"
          br={"$3"}
          jc={"space-between"}
          px="$4"
          py={"$3"}
        >
          <SizableText>
            {format(localDate || date, "MMMM dd , yyyy")}
          </SizableText>
          <CalendarSearch />
        </XStack>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          animation="slow"
          aria-label="Close"
          bg="$bg"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          key="overlay"
          onPress={handleClose}
          opacity={0.5}
        />

        <Dialog.Content
          animateOnly={["transform", "opacity"]}
          animation={[
            "quicker",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          bg="$bg"
          bordered
          elevate
          enterStyle={{ opacity: 0, scale: 0.9, x: 0, y: -20 }}
          exitStyle={{ opacity: 0, scale: 0.95, x: 0, y: 10 }}
          gap="$4"
          key="content"
          w={"95%"}
        >
          <Dialog.Title>
            {format(localDate || date, "MMMM dd , yyyy")}
          </Dialog.Title>
          <Dialog.Description>
            Pick up the date. Click save when you're done.
          </Dialog.Description>
          <DateTimePicker
            date={localDate}
            firstDayOfWeek={1}
            mode="single"
            onChange={(params) =>
              params.date && setLocalDate(new Date(params.date.toString()))
            }
            selectedItemColor={theme.primary.val}
            todayTextStyle={{ color: theme.textPrimary.val }}
          />

          <XStack gap="$3">
            <Dialog.Close asChild>
              <Button aria-label="Close" bg="$primary" color={"$white"} f={1}>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button
                aria-label="Close"
                bg="$primary"
                color={"$white"}
                f={1}
                onPress={handleSave}
              >
                Save changes
              </Button>
            </Dialog.Close>
          </XStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                circular
                icon={X}
                position="absolute"
                right="$3"
                size="$2"
                top="$3"
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
