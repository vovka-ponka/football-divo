import { createSlice } from '@reduxjs/toolkit';

// изначальные условия
const initialState = {
  categoryId: { name: 'Головна', sortProperty: '/' },
};
// сам слайс
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // метод, который будет выбирать категорию
    setSort(state, action) {
      state.categoryId = action.payload;
    },
  },
});
// Экспорт самого метода из обекта с редюсарами
export const { setSort } = categorySlice.actions;

// Экспорт по умолчанию редюсера
export default categorySlice.reducer;
