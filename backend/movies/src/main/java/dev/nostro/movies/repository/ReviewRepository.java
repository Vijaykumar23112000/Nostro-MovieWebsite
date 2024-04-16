package dev.nostro.movies.repository;

import dev.nostro.movies.model.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewRepository extends MongoRepository<Review , ObjectId> {


}
