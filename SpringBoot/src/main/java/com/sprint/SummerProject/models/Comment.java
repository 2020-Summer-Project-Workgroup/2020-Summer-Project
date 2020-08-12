package com.sprint.SummerProject.models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class Comment {
    @Id
    String id;
    String reviewer;
    Binary reviewerIcon;
    Binary content;
    Date time;

    public Comment(String reviewer, Binary reviewerIcon, Binary content, Date time) {
        this.reviewer = reviewer;
        this.reviewerIcon = reviewerIcon;
        this.content = content;
        this.time = time;
    }

    public String getReviewer() {
        return reviewer;
    }

    public void setReviewer(String reviewer) {
        this.reviewer = reviewer;
    }

    public Binary getReviewerIcon() {
        return reviewerIcon;
    }

    public void setReviewerIcon(Binary reviewerIcon) {
        this.reviewerIcon = reviewerIcon;
    }

    public Binary getContent() {
        return content;
    }

    public void setContent(Binary content) {
        this.content = content;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
