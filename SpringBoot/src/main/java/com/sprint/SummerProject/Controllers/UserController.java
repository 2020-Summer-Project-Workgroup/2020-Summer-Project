package com.sprint.SummerProject.Controllers;

import com.sprint.SummerProject.Models.User;
import com.sprint.SummerProject.Repositories.UserRepository;
import com.sprint.SummerProject.utils.Response;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users/all")
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @PostMapping("/users/tel")
    public Response addUserByTel(@RequestParam String tel, @RequestParam String password) {
        User user = userRepository.findUserByTel(tel);
        if(user == null) {
            userRepository.save(new User("手机用户" + tel,
                    null, tel, password, null));
            return new Response(200, "注册成功");
        } else {
            return new Response(403, "手机号已存在，请登录");
        }
    }

    @PostMapping("/users/email")
    public Response addUserByEmail(@RequestParam String email, @RequestParam String password) {
        User user = userRepository.findUserByEmail(email);
        if(user == null) {
            userRepository.save(new User(email.split("@")[0],
                    email, null, password, null));
            return new Response(200, "注册成功");
        } else {
            return new Response(403, "邮箱已存在，请登录");
        }
    }

}
