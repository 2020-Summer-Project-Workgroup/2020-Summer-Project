package com.sprint.SummerProject.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class User {
    @Id
    String id;
    String name;
    String email;
    String tel;
    String password;
    List<File> files;

    public User(String name, String email, String tel, String password, List<File> files) {
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.password = password;
        this.files = files;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getTel() {
        return tel;
    }

    public String getPassword() {
        return password;
    }

    public List<File> getFiles() {
        return files;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFiles(List<File> files) {
        this.files = files;
    }
}
