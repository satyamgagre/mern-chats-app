import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";

const formatTime = (date) =>
  new Date(date).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

const formatDateSeparator = (date) => {
  const messageDate = new Date(date);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  // Reset time parts for comparison
  const resetTime = (d) => new Date(d.setHours(0, 0, 0, 0));
  const messageDateOnly = resetTime(new Date(messageDate));
  const todayOnly = resetTime(new Date(today));
  const yesterdayOnly = resetTime(new Date(yesterday));

  if (messageDateOnly.getTime() === todayOnly.getTime()) {
    return "Today";
  } else if (messageDateOnly.getTime() === yesterdayOnly.getTime()) {
    return "Yesterday";
  } else {
    return messageDate.toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year: messageDate.getFullYear() !== today.getFullYear() ? "numeric" : undefined,
    });
  }
};

const shouldShowDateSeparator = (currentMessage, previousMessage) => {
  if (!previousMessage) return true;

  const currentDate = new Date(currentMessage.createdAt);
  const previousDate = new Date(previousMessage.createdAt);

  return currentDate.toDateString() !== previousDate.toDateString();
};

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeFromMessages } =
    useChatStore();
  const { authUser } = useAuthStore();
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);

      subscribeToMessages();
      return () => unsubscribeFromMessages()
    }
  }, [selectedUser?._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="bg-base-200 rounded-full p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-base-content opacity-40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
            <p className="text-sm text-base-content opacity-60 max-w-xs">
              Start a conversation with {selectedUser?.fullName || "this user"} by
              sending a message below!
            </p>
          </div>
        ) : (
          messages.map((message, index) => {
            const isMe = message.senderId === authUser._id;
            const showDateSeparator = shouldShowDateSeparator(
              message,
              messages[index - 1]
            );

            return (
              <div key={message._id}>
                {/* Date separator */}
                {showDateSeparator && (
                  <div className="flex items-center justify-center my-4">
                    <div className="bg-base-200 text-base-content opacity-60 text-xs px-3 py-1 rounded-full">
                      {formatDateSeparator(message.createdAt)}
                    </div>
                  </div>
                )}

                {/* Message with animation */}
                <div
                  className={`chat ${isMe ? "chat-end" : "chat-start"} animate-fadeIn`}
                  ref={messagesEndRef}
                >
                  <div className="chat-image avatar">
                    <div className="size-10 rounded-full border">
                      <img
                        src={
                          isMe
                            ? authUser.profilePic || "/avatar.png"
                            : selectedUser.profilePic || "/avatar.png"
                        }
                        alt="Profile"
                      />
                    </div>
                  </div>

                  <div className="chat-bubble flex flex-col">
                    {/* Image message */}
                    {message.image && (
                      <img
                        src={message.image}
                        alt="Attachment"
                        className="max-w-xs rounded-md mb-2 cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => window.open(message.image, "_blank")}
                      />
                    )}

                    {/* Text message */}
                    {message.text && <p>{message.text}</p>}

                    {/* Timestamp */}
                    <div className="text-[11px] opacity-50 text-right mt-1">
                      {formatTime(message.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;