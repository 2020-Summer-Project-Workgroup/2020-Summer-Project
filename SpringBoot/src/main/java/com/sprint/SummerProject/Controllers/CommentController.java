package com.sprint.SummerProject.Controllers;

import com.sprint.SummerProject.Models.Comment;
import com.sprint.SummerProject.Repositories.CommentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {
    private final CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @GetMapping("/all")
    public List<Comment> getAll() {
        return commentRepository.findAll();
    }
}
