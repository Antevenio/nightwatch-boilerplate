module.exports = {
    elements: {
        movieTitle: '#main',
        movieYear: '#main'
    },
    commands: [{
        checkMovieName () {
            this.assert.containsText('@movieTitle', this.api.globals.movieName);
            return this.api;
        },
        checkMovieYear (year) {
            this.assert.containsText('@movieYear', year);
            return this.api;
        }
    }]
};
