package com.vitorreis.chat;

import org.apache.log4j.Logger;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    private static final Logger logger = Logger.getLogger(ChatController.class);

    @MessageMapping("/chat")
    @SendTo("/topic/public-chat")
    public ChatMessage newMessage(ChatMessageInput message) throws Exception {
        return new ChatMessage(message.getContent(), message.getSentBy());
    }

}
