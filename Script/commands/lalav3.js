{
  command: "lalav3",
  description: "ইনবক্স দেখার জন্য কমান্ড",
  trigger: ["inbox", "i-x", "i-x tlajhar bore"],
  fallback: {
    enabled: true,
    message_bn: "দুঃখিত, আমি আপনার ইনবক্স আনতে পারিনি। আবার চেষ্টা করুন বা 'help' টাইপ করুন।",
    message_en: "Sorry, I couldn’t fetch your inbox. Please try again or type 'help'."
  },
  response: {
    type: "text",
    content_bn: "আপনার ইনবক্স এখানে দেখানো হচ্ছে...",
    content_en: "Here’s your inbox..."
  },
  metadata: {
    author: "MZ",
    version: "1.0",
    tags: ["inbox", "fallback", "multilingual"]
  }
}
