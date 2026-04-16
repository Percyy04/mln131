import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Chào đồng hữu FPTers, hệ thống AI (Gemma) đã sẵn sàng phục vụ! Tôi có thể giúp gì cho đồng hữu ở môn MLN131?", sender: "bot" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const chatSessionRef = useRef(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Initialize the chat session once
    if (!chatSessionRef.current) {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY
        if (!apiKey) {
          console.error("VITE_GEMINI_API_KEY is missing in .env")
          return
        }
        
        const genAI = new GoogleGenerativeAI(apiKey)
        // Fallback to gemini-1.5-flash since gemma models often return 404 on some API keys for generateContent
        const model = genAI.getGenerativeModel({ 
          model: "gemini-2.5-flash-lite",
          systemInstruction: "Bạn là Gemma, nữ trợ lý ảo thân thiện, xưng hô là 'tôi' và gọi người dùng là 'đồng hữu FPTers'. Bạn đang hỗ trợ sinh viên môn Mác-Lênin (MLN131). Hãy trả lời ngắn gọn, vui vẻ và mạch lạc."
        })
        chatSessionRef.current = model.startChat({
          history: [],
          generationConfig: {
            maxOutputTokens: 1000,
          },
        })
      } catch (err) {
        console.error("Failed to initialize AI:", err)
      }
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async (e, customText = null) => {
    e?.preventDefault()
    const messageText = customText || input
    if (!messageText.trim() || !chatSessionRef.current || isLoading) return
    
    setInput("")
    setMessages(prev => [...prev, { text: messageText.trim(), sender: "user" }])
    setIsLoading(true)

    try {
      const result = await chatSessionRef.current.sendMessage(messageText.trim())
      const responseText = result.response.text()
      
      setMessages(prev => [...prev, { text: responseText, sender: "bot" }])
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, { text: "Ops có lỗi không mong muốn xảy ra thưa đồng hữu! Vui lòng thử lại sau.", sender: "bot" }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button Group */}
      <div className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 ${isOpen ? 'hidden' : 'flex'}`}>
        
        {/* Tooltip / Suggestion Bubble */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
          className="bg-[#EBE5D9] text-[#111] px-4 py-3 border-[4px] border-[#111] shadow-[6px_6px_0_0_#111] relative cursor-pointer hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#D32F2F] transition-all"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-[#D32F2F] block mb-1">Gemma Trợ Lý</span>
          <p className="text-xs font-bold whitespace-nowrap">Đồng hữu cần gợi ý gì không?</p>
          {/* Arrow pointing right */}
          <div className="absolute top-1/2 -right-[12px] -translate-y-1/2 border-[6px] border-transparent border-l-[#111]"></div>
          <div className="absolute top-1/2 -right-[5px] -translate-y-1/2 border-[4px] border-transparent border-l-[#EBE5D9]"></div>
        </motion.div>

        <button
          onClick={() => setIsOpen(true)}
          className="p-4 border-[4px] border-[#111] bg-[#D32F2F] text-[#EBE5D9] shadow-[8px_8px_0_0_#111] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#111] transition-all animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <Bot size={32} strokeWidth={2.5} />
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col border-[6px] border-[#111] bg-[#EBE5D9] shadow-[16px_16px_0_0_#D32F2F]"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-[#111] text-[#EBE5D9] p-4 border-b-[6px] border-[#D32F2F]">
              <div className="flex items-center gap-3">
                <div className="bg-[#D32F2F] p-2 border-[2px] border-[#EBE5D9]">
                  <Bot size={20} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-sm">Gemma Trợ Lý</h3>
                  <p className="text-[10px] text-[#EBE5D9]/70 uppercase tracking-widest">Sẵn sàng phản hồi</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:scale-110 hover:text-[#D32F2F] transition-transform"
              >
                <X size={28} strokeWidth={3} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-white bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px]">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] border-[4px] border-[#111] p-3 shadow-[4px_4px_0_0_#111] ${
                      msg.sender === 'user' 
                        ? 'bg-[#111] text-[#EBE5D9]' 
                        : 'bg-[#EBE5D9] text-[#111]'
                    }`}>
                      {msg.sender === 'user' && (
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b-[2px] border-[#EBE5D9]/20">
                          <User size={16} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Đồng chí</span>
                        </div>
                      )}
                      <p className="text-sm font-bold leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}

                {/* Prompt Suggestions */}
                {messages.length === 1 && !isLoading && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Tôn giáo là gì?",
                      "Bản chất của tôn giáo?",
                      "Mê tín dị đoan là gì?",
                      "Chính sách tôn giáo ở VN?"
                    ].map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(null, prompt)}
                        className="border-[3px] border-[#111] bg-white text-[11px] font-black uppercase text-[#111] px-3 py-2 shadow-[3px_3px_0_0_#111] hover:bg-[#D32F2F] hover:text-[#EBE5D9] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#111] transition-all text-left"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}

                {isLoading && (
                  <div className="flex justify-start w-full">
                    <div className="border-[4px] border-[#111] bg-[#EBE5D9] p-3 flex gap-2 items-center shadow-[4px_4px_0_0_#111]">
                      <div className="w-3 h-3 bg-[#D32F2F] rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-[#111] rounded-full animate-bounce delay-100"></div>
                      <div className="w-3 h-3 bg-[#D32F2F] rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-[#EBE5D9] border-t-[6px] border-[#111] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập tín hiệu..."
                className="flex-1 border-[4px] border-[#111] bg-white p-3 font-bold text-[#111] focus:outline-none focus:border-[#D32F2F] placeholder:uppercase placeholder:text-gray-400 placeholder:font-black placeholder:text-xs"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#D32F2F] text-[#EBE5D9] px-4 border-[4px] border-[#111] shadow-[4px_4px_0_0_#111] hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={24} strokeWidth={3} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
