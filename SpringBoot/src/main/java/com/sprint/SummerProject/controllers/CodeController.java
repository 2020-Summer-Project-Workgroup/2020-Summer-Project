package com.sprint.SummerProject.controllers;

import com.aliyuncs.exceptions.ClientException;
import com.sprint.SummerProject.services.CodeService;
import com.sprint.SummerProject.utils.Response;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CodeController {

    @PostMapping("/code/tel")
    public Response createCodeToTel(@RequestParam String tel) {
        try {
            CodeService.sendCode(tel);
            return new Response(200, "验证码发送成功！");
        } catch (ClientException e) {
            return new Response(0, "验证码发送失败！");
        }
    }

    @GetMapping("/code/tel")
    public Response checkCodeToTel(@RequestParam String tel, @RequestParam String code) {
        if (CodeService.checkCode(tel, code)) {
            return new Response(200, "验证成功！");
        } else {
            return new Response(0, "验证码不正确，请检查后输入！");
        }
    }

}
