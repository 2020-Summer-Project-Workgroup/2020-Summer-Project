package com.sprint.SummerProject.Models;

import java.util.Calendar;

public class Code {

    private String code;
    private Calendar time;

    Code(String code) {
        this.code = code;
        this.time = Calendar.getInstance();
    }

    public boolean isValid() {
        Calendar now = Calendar.getInstance();
        now.add(Calendar.MINUTE, -10);
        return now.before(time);
    }

    @Override
    public String toString() {
        return "Code{" +
                "code='" + code + '\'' +
                ", time=" + time +
                '}';
    }
}
