import { Dialog, XStack } from "tamagui";
import { DIALOGS } from "@/types/enums/dialogs";
import { useDispatch, useSelector } from "@/store/hooks";
import { ConfirmAction } from "@/types/store/slices/dialogs";
import {
  closeDialog,
  DialogState,
  setDialogOpen,
} from "@/store/slices/dialogs-slice";
import {
  PrimaryButton,
  PrimaryOutlinedButton,
} from "@/components/inputs/buttons/primary";

export default function ConfirmActionDialog() {
  const dispatch = useDispatch();
  const {
    data: { onCancel = () => {}, onConfirm = () => {} },
    open,
  }: DialogState<ConfirmAction> = useSelector(
    (state) => state.dialogs.confirmAction,
  );

  const handleOpenChange = (open: boolean) =>
    dispatch(
      setDialogOpen({
        clearData: false,
        dialogName: DIALOGS.CONFIRM_ACTION,
        open,
      }),
    );
  const handleClose = () => {
    dispatch(closeDialog(DIALOGS.CONFIRM_ACTION));
    onCancel();
  };
  return (
    <Dialog modal onOpenChange={handleOpenChange} open={open}>
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
          maxHeight={"90%"}
          w={"95%"}
        >
          <Dialog.Title size={"$9"} ta={"center"}>
            Are you sure you want to do this?
          </Dialog.Title>

          <XStack gap="$4">
            <Dialog.Close asChild>
              <PrimaryOutlinedButton aria-label="No" f={1} onPress={onCancel}>
                No
              </PrimaryOutlinedButton>
            </Dialog.Close>
            <Dialog.Close asChild>
              <PrimaryButton aria-label="Yes" f={1} onPress={onConfirm}>
                Yes
              </PrimaryButton>
            </Dialog.Close>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
