package com.sprint.SummerProject.models;

import com.sprint.SummerProject.Models.Code;
import org.junit.jupiter.api.Test;

public class CodeTest {

    @Test
    public void test() {
        System.out.println(new Code("111111").isValid());
    }
}
