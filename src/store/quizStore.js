import { create } from 'zustand'

export const useQuizStore = create((set) => ({
  answers: {}, // { [questionId]: 'A' | 'B' | 'C' }

  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),

  reset: () => set({ answers: {} }),
}))
