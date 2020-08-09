package com.sprint.SummerProject.Config;

import com.sprint.SummerProject.Models.User;
import com.sprint.SummerProject.Repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = UserRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return strings -> {
//            userRepository.save(new User("18000000", "Jerry"));
//            userRepository.save(new User("20200810", "Sam"));
        };
    }
}
