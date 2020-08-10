package com.sprint.SummerProject.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
    @Id
    String id;
    String schoolId;
    String name;

    public User(String schoolId, String name) {
        this.schoolId = schoolId;
        this.name = name;
    }

    public String getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(String schoolId) {
        this.schoolId = schoolId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "schoolId:\t" + schoolId + "name:\t" + name;
    }
}
