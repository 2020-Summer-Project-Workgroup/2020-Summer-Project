package com.sprint.SummerProject.config;

import com.sprint.SummerProject.models.Comment;
import com.sprint.SummerProject.repository.CommentRepository;
import com.sprint.SummerProject.repository.UserRepository;
import org.bson.types.Binary;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Date;

@EnableMongoRepositories(basePackageClasses = UserRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(CommentRepository commentRepository) {
        //这里只是为了制造一个用于测试的byte[]
        byte[] b = new byte[4];
        b[0] = (byte) (16 & 0xff);
        b[1] = (byte) (16 >> 8 & 0xff);
        b[2] = (byte) (16 >> 16 & 0xff);
        b[3] = (byte) (16 >> 24 & 0xff);

        return strings -> {
            commentRepository.save(new Comment("LSS", new Binary(b), new Binary(b), new Date()));
        };
    }
}
