import React, { useEffect, useState } from 'react';
import Modal from './modal'; // Import your Modal component

interface EventData {
  type: 'SHOW_MODAL' | 'HIDE_MODAL';
  content?: string;
}

const WebSocketModalManager: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  useEffect(() => {
    // Establish the WebSocket connection
    const token = localStorage.getItem('jwtToken'); // Retrieve your auth token from local storage
    const ws = new WebSocket('wss://localhost:4200');

    ws.onopen = () => {
      // Send the token for authentication when the connection is open
      ws.send(JSON.stringify({ token }));
    };

    ws.onmessage = (event) => {
      // Handle incoming messages
      const data: EventData = JSON.parse(event.data);

      switch (data.type) {
        case 'SHOW_MODAL':
          setModalContent(data.content || 'No content provided.');
          setModalVisible(true);
          break;
        case 'HIDE_MODAL':
          setModalVisible(false);
          break;
        default:
          console.error('Received unknown event type');
      }
    };

    ws.onerror = (event) => {
      console.error('WebSocket error:', event);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <Modal isVisible={modalVisible} onClose={() => setModalVisible(false)}>
      {modalContent}
    </Modal>
  );
};

export default WebSocketModalManager;

