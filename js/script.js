var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?cs=srgb&dl=beats-book-design-1005012.jpg&fm=jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=animal-big-big-cat-247502.jpg&fm=jpg'
	},
	{
		id: 3,
		title: 'Szybcy i wściekli',
		desc: 'o nielegalnych wyścigach',
		img: 'https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?cs=srgb&dl=action-automobile-automotive-50704.jpg&fm=jpg'
  	},
	{
		id: 4,
		title: 'Jaś Fasola',
		desc: 'o zabawnych przygodach Pana Jasia',
		img: 'https://images.pexels.com/photos/768093/pexels-photo-768093.jpeg?cs=srgb&dl=bean-food-green-768093.jpg&fm=jpg'
  	}
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieImg, {
                    img: this.props.movie.img
                })
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', {
            src: this.props.img
        });
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = movies.map(function(movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        });
        return React.createElement('ul', {}, moviesElements);
    }
});

var element = React.createElement(MovieList, {
    movies: movies
});

ReactDOM.render(element, document.getElementById('app'));

//var GalleryItem = React.createClass({
//	propTypes: {
//		image: React.PropTypes.object.isRequired,
//	},
//
//	render: function() {
//		return (
//			React.createElement('div', {},
//				React.createElement('h2', {}, this.props.image.name),
//				React.createElement('img', {src: this.props.image.src})
//			)
//		)
//	},
//});
//
//var image = {
//	name: 'Kotek',
//	src: 'http://imgur.com/n8OYCzR.png'
//};
//
//var element = React.createElement(GalleryItem, {image: image});
//
//ReactDOM.render(element, document.getElementById('app'));