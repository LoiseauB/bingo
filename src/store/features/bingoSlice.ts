import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type BingoStateType = {
  cardsNumber: number;
  cards: {
    title: string;
    isChecked: boolean;
  }[];
  isPlaying: boolean;
};

const initialState: BingoStateType = {
  cardsNumber: 16,
  cards: Array.from({ length: 16 }, () => ({
    title: "",
    isChecked: false,
  })),
  isPlaying: false,
};

const bingoSlice = createSlice({
  name: "bingo",
  initialState,
  reducers: {
    setCardsNumber(state, action: PayloadAction<{ cardsNumber: number }>) {
      state.cardsNumber = action.payload.cardsNumber;
      state.cards = initialState.cards;
      state.cards = Array.from({ length: action.payload.cardsNumber }, () => ({
        title: "",
        isChecked: false,
      }));
    },
    setCardTitle(
      state,
      action: PayloadAction<{ index: number; title: string }>,
    ) {
      state.cards[action.payload.index].title = action.payload.title;
    },
    setCardChecked(state, action: PayloadAction<{ index: number }>) {
      state.cards[action.payload.index].isChecked =
        !state.cards[action.payload.index].isChecked;
    },
    resetCards(state) {
      state.cards = initialState.cards;
      state.cardsNumber = initialState.cardsNumber;
      state.isPlaying = initialState.isPlaying;
    },
    setIsPlaying(state) {
      state.isPlaying = !state.isPlaying
    },
  },
});

export const { setCardsNumber, setCardTitle, setCardChecked, resetCards, setIsPlaying } =
  bingoSlice.actions;
export default bingoSlice.reducer;
