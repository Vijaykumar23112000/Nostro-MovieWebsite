package dev.nostro.movies.service;


import dev.nostro.movies.model.Movie;
import dev.nostro.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repo;

    public List<Movie> getAllMovies(){
        return repo.findAll();
    }

    public Optional<Movie> getMovieById(String imdbId){
        return repo.findByImdbId(imdbId);
    }

}
