package com.sprint.SummerProject.utils;

import java.util.Random;

public class CodeGenerator {

    public static String generateCode() {
        Random random = new Random(System.currentTimeMillis());
        StringBuilder stringBuilder = new StringBuilder();
        for(int i = 0; i < 6; i++) {
            stringBuilder.append(random.nextInt(10));
        }
        return stringBuilder.toString();
    }

}
