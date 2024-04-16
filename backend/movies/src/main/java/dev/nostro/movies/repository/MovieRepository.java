package dev.nostro.movies.repository;

import dev.nostro.movies.model.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface MovieRepository  extends MongoRepository<Movie , ObjectId> {

    Optional<Movie> findByImdbId(String imdbId);

}
