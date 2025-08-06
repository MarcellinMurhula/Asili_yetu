interface Message {
  name: string;
  email: string;
  message: string;
  receivedAt: Date;
}

// This is a simple in-memory store.
// In a real application, you would use a database.
const messages: Message[] = [];

export function addMessage(message: { name: string; email: string; message: string }) {
  messages.push({
    ...message,
    receivedAt: new Date(),
  });
}

export function getMessages() {
  return messages;
}
