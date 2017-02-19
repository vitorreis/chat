package com.vitorreis.chat;

import java.time.OffsetDateTime;

public class ChatMessage {

    private String content;

    private OffsetDateTime sentAt;

    private String sentBy;

    public ChatMessage() {
    }

    public ChatMessage(String content, String sentBy) {
        this.content = content;
        this.sentBy = sentBy;
        this.sentAt = OffsetDateTime.now();
    }

    public String getContent() {
        return content;
    }

    public OffsetDateTime getSentAt() {
        return sentAt;
    }

    public String getSentBy() {
        return sentBy;
    }
}
