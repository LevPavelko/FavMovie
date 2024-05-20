const { string, number } = require("prop-types");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                title: string,
                director: string,
                year: number,
                poster: string
            }
        };
    }

    render() {
        console.log("ss");
        return (
            
            <div>
                <Movie 
                    title={this.state.movie.title} 
                    director={this.state.movie.director} 
                    year={this.state.movie.year} 
                  
                />
            </div>
        );
    }
}
