import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  // ================= USERS =================
  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data || [] });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load users");
      set({ users: [] });
    } finally {
      set({ isUsersLoading: false });
    }
  },

  // ================= MESSAGES =================
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data || [] });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load messages");
      set({ messages: [] });
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  // ❌ DO NOT append here (socket handles it)
  sendMessage: async (messageData) => {
    const { selectedUser } = get();
    if (!selectedUser?._id) return;

    try {
      await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message");
    }
  },

  // ================= SOCKET =================
  subscribeToMessages: () => {
    const socket = useAuthStore.getState().socket;
    const { selectedUser } = get();

    if (!socket || !selectedUser) return;

    socket.off("newMessage");

    socket.on("newMessage", (newMessage) => {
      set((state) => {
        // ✅ 1. Prevent duplicates by _id
        if (state.messages.some((m) => m._id === newMessage._id)) {
          return state;
        }

        // ✅ 2. Only add if message belongs to current chat
        const isCurrentChat =
          newMessage.senderId === selectedUser._id ||
          newMessage.receiverId === selectedUser._id;

        if (!isCurrentChat) return state;

        return {
          messages: [...state.messages, newMessage],
        };
      });
    });
  },

  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    if (socket) socket.off("newMessage");
  },

  // ================= UI =================
  setSelectedUser: (selectedUser) =>
    set({ selectedUser, messages: [] }),
}));
