import { create } from 'zustand';
import { UserData, Objection, PracticeSession } from '../types';

interface State {
  userData: UserData | null;
  objections: Objection[];
  currentSession: PracticeSession | null;
  isRecording: boolean;
  setUserData: (data: UserData) => void;
  setObjections: (objections: Objection[]) => void;
  setCurrentSession: (session: PracticeSession | null) => void;
  setIsRecording: (isRecording: boolean) => void;
}

export const useStore = create<State>((set) => ({
  userData: null,
  objections: [],
  currentSession: null,
  isRecording: false,
  setUserData: (data) => set({ userData: data }),
  setObjections: (objections) => set({ objections }),
  setCurrentSession: (session) => set({ currentSession: session }),
  setIsRecording: (isRecording) => set({ isRecording }),
}));