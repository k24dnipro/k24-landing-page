"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Plus } from "lucide-react";
import styles from "./AIAssistant.module.scss";

const QUICK_REPLIES = [
  { label: "💰 Розрахунок", text: "Скільки коштує ремонт кузова? Хочу дізнатися орієнтовну вартість робіт." },
  { label: "📸 Оцінка по фото", action: "photo", text: "Оцініть пошкодження кузова на фото та орієнтовну вартість." },
  { label: "📅 Записатися", text: "Хочу записатися на огляд автомобіля майстром." },
  { label: "📍 Контакти", text: "Підкажіть вашу точну адресу, графік роботи та телефон." },
];

interface Message {
  id: string;
  sender: "assistant" | "user";
  text: string;
  imageUrl?: string;
}

const INITIAL_MESSAGE: Message = {
  id: "welcome-1",
  sender: "assistant",
  text: "Добрий день. AI-консультант кузовного центру готовий допомогти. Опишіть характер пошкоджень або оберіть послугу, щоб отримати попередній розрахунок.",
};

const TELEGRAM_CHAT_ID = '-4819273916';

// Parse [BOOK:name|phone] tag from AI response, fire Telegram silently, return clean text
// Accepts messages to extract client context (what they asked about before booking)
async function parseAndBook(rawText: string, messages: Message[]): Promise<string> {
  const bookMatch = rawText.match(/\[BOOK:([^|\]]+)\|([^\]]+)\]/);
  if (bookMatch) {
    const name = bookMatch[1].trim();
    const phone = bookMatch[2].trim();
    const cleanText = rawText.replace(/\[BOOK:[^\]]+\]/, '').trim();

    // Build context from user messages (skip welcome and booking flow messages)
    const bookingKeywords = ['ім\'я', 'звати', 'телефон', 'підтверджу', 'так', 'підтверджую', 'вірно', 'правильно'];
    const contextMessages = messages
      .filter((m) => m.sender === 'user' && m.id !== 'welcome-1')
      .filter((m) => !bookingKeywords.some((kw) => m.text.toLowerCase().includes(kw)))
      .map((m) => m.text.trim())
      .filter(Boolean)
      .slice(0, 5); // last 5 meaningful user messages

    const contextSummary = contextMessages.length > 0
      ? contextMessages.join(' / ')
      : '';

    try {
      await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          message: `📲 Заявка через AI-асистент сайту${contextSummary ? `\n\n📋 Запит клієнта:\n${contextSummary}` : ''}`,
          chatId: TELEGRAM_CHAT_ID,
        }),
      });
    } catch (e) {
      console.warn('Telegram booking notification failed:', e);
    }
    return cleanText;
  }
  return rawText;
}

// Exact Figma SVG: speech-bubble outline + fluent bot icon + triple neon glow
function BubbleRobotIcon({ width = 150, height = 128 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <g filter="url(#filter0_ddd_1_9)">
        <path
          d="M63.696 25.196H76.696C102.93 25.196 124.196 46.4625 124.196 72.696V102.196H63.696C42.4331 102.196 25.196 84.9589 25.196 63.696C25.196 42.433 42.4331 25.196 63.696 25.196Z"
          stroke="#F8ED52"
        />
        <path
          d="M75.821 46.071C75.821 45.7726 75.7025 45.4865 75.4915 45.2755C75.2806 45.0645 74.9944 44.946 74.696 44.946C74.3977 44.946 74.1115 45.0645 73.9005 45.2755C73.6896 45.4865 73.571 45.7726 73.571 46.071V47.196H66.821C65.727 47.196 64.6778 47.6306 63.9042 48.4042C63.1306 49.1778 62.696 50.227 62.696 51.321V59.571C62.696 60.665 63.1306 61.7142 63.9042 62.4878C64.2873 62.8708 64.742 63.1747 65.2425 63.382C65.7429 63.5893 66.2793 63.696 66.821 63.696H82.571C83.6651 63.696 84.7143 63.2614 85.4879 62.4878C86.2614 61.7142 86.696 60.665 86.696 59.571V51.321C86.696 50.227 86.2614 49.1778 85.4879 48.4042C84.7143 47.6306 83.6651 47.196 82.571 47.196H75.821V46.071ZM64.946 51.321C64.946 50.286 65.786 49.446 66.821 49.446H82.571C83.606 49.446 84.446 50.286 84.446 51.321V59.571C84.446 60.606 83.606 61.446 82.571 61.446H66.821C65.786 61.446 64.946 60.606 64.946 59.571V51.321ZM61.946 70.821C61.946 69.786 62.786 68.946 63.821 68.946H85.571C86.606 68.946 87.446 69.786 87.446 70.821V71.946C87.446 74.0805 86.45 75.8955 84.3965 77.226C82.2995 78.5865 79.0715 79.446 74.696 79.446C70.3205 79.446 67.0925 78.5865 64.9955 77.226C62.9405 75.897 61.946 74.082 61.946 71.946V70.821ZM63.821 66.696C62.727 66.696 61.6778 67.1306 60.9042 67.9042C60.1306 68.6778 59.696 69.727 59.696 70.821V71.946C59.696 74.9115 61.1375 77.409 63.7715 79.116C66.362 80.7915 70.0715 81.696 74.696 81.696C79.3205 81.696 83.03 80.793 85.6205 79.116C88.2545 77.4075 89.696 74.91 89.696 71.946V70.821C89.696 69.727 89.2614 68.6778 88.4879 67.9042C87.7143 67.1306 86.6651 66.696 85.571 66.696H63.821ZM72.446 55.446C72.446 55.7415 72.3878 56.034 72.2748 56.307C72.1617 56.58 71.996 56.828 71.787 57.037C71.5781 57.2459 71.3301 57.4116 71.0571 57.5247C70.7841 57.6378 70.4915 57.696 70.196 57.696C69.9006 57.696 69.608 57.6378 69.335 57.5247C69.062 57.4116 68.814 57.2459 68.6051 57.037C68.3961 56.828 68.2304 56.58 68.1173 56.307C68.0042 56.034 67.946 55.7415 67.946 55.446C67.946 54.8492 68.1831 54.2769 68.6051 53.855C69.027 53.433 69.5993 53.196 70.196 53.196C70.7928 53.196 71.3651 53.433 71.787 53.855C72.209 54.2769 72.446 54.8492 72.446 55.446ZM79.196 57.696C79.7928 57.696 80.3651 57.4589 80.787 57.037C81.209 56.615 81.446 56.0427 81.446 55.446C81.446 54.8492 81.209 54.2769 80.787 53.855C80.3651 53.433 79.7928 53.196 79.196 53.196C78.5993 53.196 78.027 53.433 77.6051 53.855C77.1831 54.2769 76.946 54.8492 76.946 55.446C76.946 56.0427 77.1831 56.615 77.6051 57.037C78.027 57.4589 78.5993 57.696 79.196 57.696Z"
          fill="#F8ED52"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_9"
          x="4.57764e-05"
          y="-1.52588e-05"
          width="149.392"
          height="127.392"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="2.058" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.956389 0 0 0 0.65 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_9" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="7.056" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 0 0.321569 0 0 0 0.45 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_1_9" result="effect2_dropShadow_1_9" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="12.348" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 0 0.321569 0 0 0 0.45 0" />
          <feBlend mode="normal" in2="effect2_dropShadow_1_9" result="effect3_dropShadow_1_9" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_9" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

function HeaderRobotIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F8ED52"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 0 4px rgba(248, 237, 82, 0.6))" }}
    >
      <rect x="4" y="6" width="16" height="14" rx="3.5" />
      <circle cx="8.5" cy="12" r="1.5" fill="#F8ED52" stroke="none" />
      <circle cx="15.5" cy="12" r="1.5" fill="#F8ED52" stroke="none" />
      <path d="M8.5 16h7" />
      <path d="M12 6V3" />
      <circle cx="12" cy="2.5" r="1.2" fill="#F8ED52" stroke="none" />
      <path d="M2 13h2" />
      <path d="M20 13h2" />
    </svg>
  );
}

// Markdown formatter to render **bold** properly without raw asterisks
function formatMessageText(text: string) {
  return text.split(/\n{2,}/).map((para, pIdx) => (
    <p key={pIdx}>
      {para.split("\n").map((line, lIdx) => (
        <React.Fragment key={lIdx}>
          {renderLineWithMarkdown(line)}
          {lIdx < para.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));
}

function renderLineWithMarkdown(line: string) {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.substring(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className={styles.boldText}>
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(line.substring(lastIndex));
  }

  return parts.length > 0 ? parts : line;
}

// Yellow Paper Plane Send Icon matching screenshot 1:1
function SendPlaneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f4e23c"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setSelectedImage(null);
    setInputValue("");
    setIsTyping(false);
  };

  const handleQuickReply = (item: (typeof QUICK_REPLIES)[0]) => {
    if (item.action === "photo") {
      fileInputRef.current?.click();
      return;
    }
    const text = item.text;
    setInputValue(text);
    // Auto-send after a tick so user sees the text flash in the input
    setTimeout(() => {
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: "user",
        text,
      };
      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      (async () => {
        try {
          const conversationHistory: { role: string; content: unknown }[] = messages
            .filter((m) => m.id !== "welcome-1")
            .map((m) => ({
              role: m.sender === "assistant" ? "assistant" : "user",
              content: m.text,
            }));
          conversationHistory.push({ role: "user", content: text });

          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: conversationHistory }),
          });

          if (res.ok) {
            const data = await res.json();
            const replyText = data?.choices?.[0]?.message?.content;
            if (replyText) {
              const cleanReply = await parseAndBook(replyText, messages);
              setIsTyping(false);
              setMessages((prev) => [
                ...prev,
                { id: `bot-${Date.now()}`, sender: "assistant", text: cleanReply },
              ]);
              return;
            }
          }
        } catch (err) {
          console.warn("AI chat API unavailable:", err);
        }

        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "assistant",
            text: "Дякую за запит! Зателефонуйте нам: +38 (093) 959-05-05 або завітайте: вул. Василя Сухомлинського 80А.",
          },
        ]);
      })();
    }, 50);
  };

  const showQuickReplies = messages.length === 1 && messages[0].id === "welcome-1" && !isTyping;

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = () => {
    const text = inputValue.trim();
    if (!text && !selectedImage) return;

    const currentImg = selectedImage;
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      imageUrl: currentImg || undefined,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setSelectedImage(null);
    setIsTyping(true);

    // Call /api/chat with multimodal vision and LLM support
    (async () => {
      try {
        const conversationHistory: { role: string; content: unknown }[] = messages
          .filter((m) => m.id !== "welcome-1")
          .map((m) => ({
            role: m.sender === "assistant" ? "assistant" : "user",
            content: m.text,
          }));

        const userContent = currentImg
          ? [
              {
                type: "text",
                text:
                  text ||
                  "Оцініть пошкодження кузова на цьому фото, необхідні роботи (рихтування / фарбування) та орієнтовну вартість.",
              },
              {
                type: "image_url",
                image_url: {
                  url: currentImg,
                },
              },
            ]
          : text;

        conversationHistory.push({
          role: "user",
          content: userContent,
        });

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: conversationHistory }),
        });

        if (res.ok) {
          const data = await res.json();
          const replyText = data?.choices?.[0]?.message?.content;
          if (replyText) {
            const cleanReply = await parseAndBook(replyText, messages);
            setIsTyping(false);
            setMessages((prev) => [
              ...prev,
              {
                id: `bot-${Date.now()}`,
                sender: "assistant",
                text: cleanReply,
              },
            ]);
            return;
          }
        }
      } catch (err) {
        console.warn("AI chat API unavailable, fallback used:", err);
      }

      // Fallback response if network or API key issue
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "assistant",
          text: currentImg
            ? "Дякую за фото! Бачу пошкодження кузовного елемента. Для точної калькуляції та огляду чекаємо вас за адресою: смт Слобожанське, вул. Василя Сухомлинського 80А. Телефон: +38 (093) 959-05-05."
            : "Дякую за запит! Наші майстри готові провести діагностику та розрахувати точну вартість робіт (рихтування / фарбування / полірування). Завітайте до нас за адресою: вул. Василя Сухомлинського 80А або зателефонуйте: +38 (093) 959-05-05.",
        },
      ]);
    })();
  };

  return (
    <div className={styles.assistantContainer}>
      {/* Hidden File Input for Damage Photos */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageSelect}
      />

      {/* Floating Trigger — exact Figma SVG, transparent button wrapper */}
      <div className={styles.triggerWrap}>
        <button
          type="button"
          className={`${styles.triggerButton} ${isOpen ? styles.active : ""}`}
          onClick={toggleOpen}
          aria-label="K24 Асистент"
          title="K24 Асистент"
        >
          {isOpen
            ? <X size={22} strokeWidth={2} color="#F8ED52" />
            : <BubbleRobotIcon width={130} height={111} />}
        </button>
      </div>

      {/* Chat Window Modal matching Image 2 (1 in 1) */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerTitleRow}>
              <div className={styles.headerRobotBadge}>
                <HeaderRobotIcon size={22} />
              </div>
              <span className={styles.headerTitle}>K24 Асистент</span>
            </div>

            <div className={styles.headerActions}>
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() => setIsOpen(false)}
                title="Закрити"
                aria-label="Закрити чат"
              >
                <X size={24} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className={styles.messagesBody}>
            {messages.map((msg) => (
              <React.Fragment key={msg.id}>
                {msg.sender === "assistant" ? (
                  <div className={styles.assistantBlock}>
                    <div className={styles.botBubble}>
                      {formatMessageText(msg.text)}
                    </div>
                  </div>
                ) : (
                  <div className={styles.userBlock}>
                    <div className={styles.userBubble}>
                      {msg.imageUrl && (
                        <div className={styles.attachedImagePreview}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={msg.imageUrl} alt="Пошкодження кузова" />
                        </div>
                      )}
                      {msg.text && <span>{msg.text}</span>}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Quick-reply chips */}
            {showQuickReplies && (
              <div className={styles.quickReplies}>
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.label}
                    type="button"
                    className={styles.quickReplyBtn}
                    onClick={() => handleQuickReply(qr)}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* High-tech thinking / analyzing animation */}
            {isTyping && (
              <div className={styles.thinkingBlock}>
                <div className={styles.thinkingCard}>
                  <div className={styles.thinkingScanBeam} />
                  <div className={styles.thinkingContent}>
                    <div className={styles.thinkingIconWrap}>
                      <span className={styles.thinkingPulseRing} />
                      <HeaderRobotIcon size={18} />
                    </div>
                    <span className={styles.thinkingLabel}>Аналізую запит</span>
                    <div className={styles.thinkingDots}>
                      <span className={styles.dot1} />
                      <span className={styles.dot2} />
                      <span className={styles.dot3} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Image Selected Preview without background box */}
          {selectedImage && (
            <div className={styles.imageSelectedBadge}>
              <div className={styles.imageThumbWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedImage} alt="Фото пошкодження" className={styles.imageThumb} />
                <button
                  type="button"
                  className={styles.removeImageBtn}
                  onClick={() => setSelectedImage(null)}
                  title="Видалити фото"
                  aria-label="Видалити фото"
                >
                  <X size={12} strokeWidth={2.5} />
                </button>
              </div>
              <span className={styles.imageSelectedLabel}>Фото прикріплено</span>
            </div>
          )}

          {/* Footer Input matching Image 2 */}
          <div className={styles.chatFooter}>
            <button
              type="button"
              className={styles.plusBtn}
              onClick={() => fileInputRef.current?.click()}
              title="Додати фото"
              aria-label="Додати фото"
            >
              <Plus size={24} strokeWidth={1.8} />
            </button>

            <input
              type="text"
              className={styles.chatInput}
              placeholder="Опишіть запит..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />

            <button
              type="button"
              className={styles.sendBtn}
              onClick={handleSendMessage}
              disabled={!inputValue.trim() && !selectedImage}
              aria-label="Надіслати"
            >
              <SendPlaneIcon size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
