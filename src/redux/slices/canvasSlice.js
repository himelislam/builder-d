import { createSlice } from '@reduxjs/toolkit';

const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    components: [],
  },
  reducers: {
    addComponent: (state, action) => {
      state.components.push(action.payload);
    },
    updateComponent: (state, action) => {
      const index = state.components.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state.components[index] = action.payload;
    },
  },
});

export const { addComponent, updateComponent } = canvasSlice.actions;
export default canvasSlice.reducer;
