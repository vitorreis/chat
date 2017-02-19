package com.vitorreis.chat;

public class ChatMessageInput {

    private String content;

    private String sentBy;

    public ChatMessageInput() {
    }

    public ChatMessageInput(String content, String sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSentBy() {
        return sentBy;
    }

    public void setSentBy(String sentBy) {
        this.sentBy = sentBy;
    }
}
