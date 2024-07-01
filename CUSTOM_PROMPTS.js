let customPrompts = [];
customPrompts.push({
    "enabled": true,
    "title": "提供反思",
    "altText": "",
    "prompt": "Review your answer and suggest any improvements to make it more accurate or natural.",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": true,
    "title": "優化回應",
    "altText": "",
    "prompt": "Using your reflections, improve the answer if needed",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": false,
    "title": "提升品質",
    "altText": "有時候 ChatGPT 會回答出錯誤、不合邏輯的答案，透過重新審視答案，可以大幅提昇回應品質，提高正確率。",
    "prompt": "請再審視一次你的回答，你確定你寫的是正確的嗎？",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": true,
    "title": "總結內容",
    "prompt": "請將我們剛剛的對話總結為一個清單，讓我可以更快的掌握重點。",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": false,
    "title": "舉例說明",
    "prompt": "請舉例說明",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": false,
    "title": "提供細節",
    "prompt": "請提供更多細節說明",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": true,
    "title": "翻成中文",
    "prompt": "請將上述回應內容翻譯成臺灣常用的正體中文",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": true,
    "title": "翻成英文",
    "prompt": "Please translate the above response into English.",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": false,
    "title": "翻成日文",
    "prompt": "Please translate the above response into Japanese.",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": false,
    "title": "搞笑寫作",
    "prompt": "請用喜劇演員的口語，將上述的回應重寫一次，讓它變得更有趣。",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": false,
    "title": "移除文字",
    "prompt": "請移除圖片中所有文字",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": true,
    "title": "",
    "prompt": "",
    "autoSubmit": true
});
customPrompts.push({
    "enabled": true,
    "title": "",
    "prompt": "",
    "autoSubmit": true
});

localStorage.setItem('chatgpttoolkit.customPrompts', JSON.stringify(customPrompts.filter(prompt => prompt.enabled && !!prompt.title)));