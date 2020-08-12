package com.sprint.SummerProject.services;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.sprint.SummerProject.models.Code;
import com.sprint.SummerProject.utils.CodeGenerator;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class CodeService {

    private static Map<String, Code> codeMap = new ConcurrentHashMap<String, Code>();

    public static void sendCode(String tel) throws ClientException {
        DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", "<accessKeyId>", "<accessSecret>");
        IAcsClient client = new DefaultAcsClient(profile);

        CommonRequest request = new CommonRequest();
        String code = CodeGenerator.generateCode();
        Code codeItem = new Code(code);
        request.setSysMethod(MethodType.POST);
        request.setSysDomain("dysmsapi.aliyuncs.com");
        request.setSysVersion("2017-05-25");
        request.setSysAction("SendSms");
        request.putQueryParameter("RegionId", "cn-hangzhou");
        request.putQueryParameter("PhoneNumbers", tel);
        request.putQueryParameter("SignName", "轻松文档");
        request.putQueryParameter("TemplateCode", "SMS_199222535");
        request.putQueryParameter("TemplateParam", "{\"code\":\"" + code + "\"}");

        CommonResponse response = client.getCommonResponse(request);
        System.out.println(response.getData());
        codeMap.put(tel, codeItem);
    }

    public static boolean checkCode(String tel, String code) {
        Code codeItem;
        if ((codeItem = codeMap.get(tel)) != null) {
            return code.equals(codeItem.getCode());
        } else {
            return false;
        }
    }

}