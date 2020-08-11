package com.sprint.SummerProject.repositories;

import com.sprint.SummerProject.models.File;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends MongoRepository<File, String> {
}
