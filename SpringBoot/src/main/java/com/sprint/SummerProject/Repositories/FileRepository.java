package com.sprint.SummerProject.Repositories;

import com.sprint.SummerProject.Models.File;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends MongoRepository<File, String> {
}
