package com.sprint.SummerProject.repositories;

import com.sprint.SummerProject.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    public User findUserByTel(String tel);
    public User findUserByEmail(String email);
}
