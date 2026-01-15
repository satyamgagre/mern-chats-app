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

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data || [] });
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to load users";
      toast.error(message);
      set({ users: [] });
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data || [] });
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to load messages";
      toast.error(message);
      set({ messages: [] });
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
  const { selectedUser, messages } = get();
  if (!selectedUser?._id) return;

  try {
    const res = await axiosInstance.post(
      `/messages/send/${selectedUser._id}`,
      messageData
    );
    set({ messages: [...messages, res.data] });
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to send message");
  }
},


  subscribeToMessages: () => {
  const { selectedUser } = get();
  const socket = useAuthStore.getState().socket;

  if (!selectedUser || !socket) return;

  socket.off("newMessage"); // prevent duplicates
  socket.on("newMessage", (newMessage) => {
    const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
    if(isMessageSentFromSelectedUser) return;
    set({ messages: [...get().messages, newMessage] });
  });
},


  unsubscribeFromMessages: () => {
  const socket = useAuthStore.getState().socket;
  if (!socket) return;

  socket.off("newMessage");
},

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
