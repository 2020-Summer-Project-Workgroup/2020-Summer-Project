package com.sprint.SummerProject.controllers;

import com.sprint.SummerProject.models.Comment;
import com.sprint.SummerProject.repository.CommentRepository;
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
