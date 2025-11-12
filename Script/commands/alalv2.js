{
  "command": "alalv2",
  "description": "ইনবক্স চেক করার জন্য কমান্ড",
  "fallback": {
    "enabled": true,
    "messages": {
      "bn": "দুঃখিত, ইনবক্স তথ্য আনতে পারছি না। পরে আবার চেষ্টা করুন।",
      "en": "Sorry, unable to fetch inbox data. Please try again later."
    }
  },
  "response": {
    "success": {
      "bn": "আপনার ইনবক্সে নতুন বার্তা আছে।",
      "en": "You have new messages in your inbox."
    },
    "empty": {
      "bn": "আপনার ইনবক্স খালি।",
      "en": "Your inbox is empty."
    }
  },
  "debug": {
    "log": true,
    "verbose": true
  }
}
