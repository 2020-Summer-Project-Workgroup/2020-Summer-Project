package com.sprint.SummerProject.models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Document
public class File {
    @Id
    String id;
    String title;
    Binary content;
    Date time;
    List<Comment> comments;
    List<Map<String, String>> access;

    public File(String title, Binary content, Date time, List<Comment> comments, List<Map<String, String>> access) {
        this.title = title;
        this.content = content;
        this.time = time;
        this.comments = comments;
        this.access = access;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Map<String, String>> getAccess() {
        return access;
    }

    public void setAccess(List<Map<String, String>> access) {
        this.access = access;
    }
}
