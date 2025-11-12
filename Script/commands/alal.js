{
  "command": "alal",
  "description": "ইনবক্স চেক করার জন্য কমান্ড",
  "language_support": ["bn", "en"],
  "response": {
    "success": {
      "bn": "✅ আপনার ইনবক্সে নতুন বার্তা আছে।",
      "en": "✅ You have new messages in your inbox."
    },
    "empty": {
      "bn": "📭 আপনার ইনবক্স খালি।",
      "en": "📭 Your inbox is empty."
    },
    "error": {
      "bn": "⚠️ ইনবক্স তথ্য আনতে সমস্যা হচ্ছে। পরে আবার চেষ্টা করুন।",
      "en": "⚠️ Unable to fetch inbox data. Please try again later."
    }
  },
  "fallback_logic": {
    "enabled": true,
    "conditions": [
      "API timeout",
      "Invalid token",
      "Network error"
    ],
    "default_message": {
      "bn": "🔁 কিছু ভুল হয়েছে। দয়া করে আবার চেষ্টা করুন।",
      "en": "🔁 Something went wrong. Please try again."
    }
  },
  "debug": {
    "log": true,
    "verbose": true
  }
}
