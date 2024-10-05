import { UpdateAction } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group, GroupsState } from "@/types/store/slices/groups";

const initialState: GroupsState = {
  groups: [],
};

export const groupsSlice = createSlice({
  initialState,
  name: "groups",
  reducers: {
    createGroup: (state, action: PayloadAction<Group>) => {
      state.groups.push(action.payload);
    },
    deleteGroup: (state, action: PayloadAction<string>) => {
      state.groups = state.groups.filter(
        (group) => group.id !== action.payload,
      );
    },
    updateGroup: (state, action: UpdateAction<string, Group>) => {
      state.groups = state.groups.map((group) => {
        if (group.id === action.payload.id) {
          return { ...group, ...action.payload.data };
        }
        return group;
      });
    },
  },
});

export const { createGroup, deleteGroup, updateGroup } = groupsSlice.actions;

export default groupsSlice.reducer;
