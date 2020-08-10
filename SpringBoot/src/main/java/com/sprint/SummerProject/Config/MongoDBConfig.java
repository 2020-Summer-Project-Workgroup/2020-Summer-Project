package com.sprint.SummerProject.Config;

import com.sprint.SummerProject.Models.Comment;
import com.sprint.SummerProject.Models.User;
import com.sprint.SummerProject.Repositories.CommentRepository;
import com.sprint.SummerProject.Repositories.UserRepository;
import org.bson.types.Binary;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Date;

import static java.lang.Byte.MAX_VALUE;

@EnableMongoRepositories(basePackageClasses = UserRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(CommentRepository commentRepository) {
        byte[] b = new byte[4];
        b[0] = (byte) (16 & 0xff);
        b[1] = (byte) (16 >> 8 & 0xff);
        b[2] = (byte) (16 >> 16 & 0xff);
        b[3] = (byte) (16 >> 24 & 0xff);


        return strings ->{
            commentRepository.save(new Comment("LSS", new Binary(b), new Binary(b), new Date()));
        };
    }
}
