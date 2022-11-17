import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "Author1" },
  { id: "1", name: "Author2" },
  { id: "2", name: "Author3" }
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
