// 'use client'
// import React, { useEffect, useState } from 'react';

// const ChatDoc = () => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const styles = {
//     container: {
//       backgroundColor: '#121212',
//       height: '90.8vh',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       color: '#c6ffb3',
//       marginLeft: screenWidth > 768 ? "250px" : "0",
//       marginTop: screenWidth > 768 ? "88px" : "84px",
//     },
//     header: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       fontSize: '18px',
//       marginBottom: '20px',
//     },
//     backButton: {
//       color: '#c6ffb3',
//       cursor: 'pointer',
//     },
//     chatBody: {
//       backgroundColor: '#1a1a1a',
//       borderRadius: '15px',
//       padding: '10px',
//       overflowY: 'hidden',
//       // height: 'calc(100vh - 150px)',
//       height: '70vh'
//     },
//     messageRow: (isSender) => ({
//       display: 'flex',
//       alignItems: 'center',
//       marginBottom: '15px',
//       justifyContent: isSender ? 'flex-end' : 'flex-start',
//       gap: '10px',
//     }),
//     avatar: {
//       width: '35px',
//       height: '35px',
//       borderRadius: '50%',
//     },
//     avatarMargin: (isSender) => ({
//       margin: isSender ? '0 10px 0 0' : '0 0 0 10px',
//     }),
//     messageBubble: (isSender) => ({
//       backgroundColor: isSender ? '#2e4934' : '#1a1a1a',
//       borderRadius: '20px',
//       padding: '10px 20px',
//       color: '#fff',
//       maxWidth: '60%',
//       boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
//     }),
//     timeStamp: {
//       color: '#c6ffb3',
//       fontSize: '12px',
//     },
//     footer: {
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: '#1a1a1a',
//       padding: '10px',
//       borderRadius: '20px',
//       marginTop: '20px',
//     },
//     inputBox: {
//       flex: 1,
//       backgroundColor: 'transparent',
//       border: 'none',
//       color: '#fff',
//       outline: 'none',
//       fontSize: '16px',
//       paddingLeft: '10px',
//     },
//     smileIcon: {
//       fontSize: '24px',
//       marginRight: '10px',
//       color: '#c6ffb3',
//       cursor: 'pointer',
//     },
//     sendButton: {
//       fontSize: '24px',
//       marginLeft: '10px',
//       color: '#c6ffb3',
//       cursor: 'pointer',
//     },
//   };

//   const [messages, setMessages] = useState([
//     { id: 1, text: 'Hello, how can I assist you?', sender: false },
//     { id: 2, text: 'I need help with a prescription.', sender: true },
//     { id: 3, text: 'Sure, what do you need?', sender: false },
//     { id: 4, text: 'I want to renew my medication.', sender: true },
//   ]);

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <div style={styles.backButton}>← Dr. Yash Babbar</div>
//         <div style={styles.timeStamp}>45 mins ago</div>
//       </div>

//       <div style={styles.chatBody}>
//         {/* Dynamically render messages */}
//         {messages.map((message) => (
//           <div key={message.id} style={styles.messageRow(message.sender)}>
//             {!message.sender && (
//               <img
//                 src="/assets/user.png"
//                 alt="User Avatar"
//                 style={{ ...styles.avatar, ...styles.avatarMargin(false) }}
//               />
//             )}
//             <div style={styles.messageBubble(message.sender)}>
//               {message.text}
//             </div>
//             {message.sender && (
//               <img
//                 src="/assets/user.png"
//                 alt="User Avatar"
//                 style={{ ...styles.avatar, ...styles.avatarMargin(true) }}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Footer with input */}
//       <div style={styles.footer}>
//         <span style={styles.smileIcon}>😊</span>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           style={styles.inputBox}
//         />
//         <span style={styles.sendButton}>✈️</span>
//       </div>
//     </div>
//   );
// };

// export default ChatDoc;

'use client';
import React, { useEffect, useState } from 'react';

const ChatDoc = () => {
  const [screenWidth, setScreenWidth] = useState(0); // Initialize to 0

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth); // Set initial width after mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#121212',
      height: '90.8vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#c6ffb3',
      marginLeft: screenWidth > 768 ? "250px" : "0",
      marginTop: screenWidth > 768 ? "88px" : "84px",
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '18px',
      marginBottom: '20px',
    },
    backButton: {
      color: '#c6ffb3',
      cursor: 'pointer',
    },
    chatBody: {
      backgroundColor: '#1a1a1a',
      borderRadius: '15px',
      padding: '10px',
      overflowY: 'hidden',
      height: '70vh',
    },
    messageRow: (isSender) => ({
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      justifyContent: isSender ? 'flex-end' : 'flex-start',
      gap: '10px',
    }),
    avatar: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
    },
    avatarMargin: (isSender) => ({
      margin: isSender ? '0 10px 0 0' : '0 0 0 10px',
    }),
    messageBubble: (isSender) => ({
      backgroundColor: isSender ? '#2e4934' : '#1a1a1a',
      borderRadius: '20px',
      padding: '10px 20px',
      color: '#fff',
      maxWidth: '60%',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
    }),
    timeStamp: {
      color: '#c6ffb3',
      fontSize: '12px',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
      padding: '10px',
      borderRadius: '20px',
      marginTop: '20px',
    },
    inputBox: {
      flex: 1,
      backgroundColor: 'transparent',
      border: 'none',
      color: '#fff',
      outline: 'none',
      fontSize: '16px',
      paddingLeft: '10px',
    },
    smileIcon: {
      fontSize: '24px',
      marginRight: '10px',
      color: '#c6ffb3',
      cursor: 'pointer',
    },
    sendButton: {
      fontSize: '24px',
      marginLeft: '10px',
      color: '#c6ffb3',
      cursor: 'pointer',
    },
  };

  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how can I assist you?', sender: false },
    { id: 2, text: 'I need help with a prescription.', sender: true },
    { id: 3, text: 'Sure, what do you need?', sender: false },
    { id: 4, text: 'I want to renew my medication.', sender: true },
  ]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.backButton}>← Dr. Yash Babbar</div>
        <div style={styles.timeStamp}>45 mins ago</div>
      </div>

      <div style={styles.chatBody}>
        {/* Dynamically render messages */}
        {messages.map((message) => (
          <div key={message.id} style={styles.messageRow(message.sender)}>
            {!message.sender && (
              <img
                src="/assets/user.png"
                alt="User Avatar"
                style={{ ...styles.avatar, ...styles.avatarMargin(false) }}
              />
            )}
            <div style={styles.messageBubble(message.sender)}>
              {message.text}
            </div>
            {message.sender && (
              <img
                src="/assets/user.png"
                alt="User Avatar"
                style={{ ...styles.avatar, ...styles.avatarMargin(true) }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Footer with input */}
      <div style={styles.footer}>
        <span style={styles.smileIcon}>😊</span>
        <input
          type="text"
          placeholder="Type a message..."
          style={styles.inputBox}
        />
        <span style={styles.sendButton}>✈️</span>
      </div>
    </div>
  );
};

export default ChatDoc;
