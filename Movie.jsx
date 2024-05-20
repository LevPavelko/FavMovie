class Movie extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            // console.log(this.props.Movie)
            <div>
                
                <p><strong>Title:</strong>{this.props.title}</p>
                <p><strong>Director:</strong> {this.props.director}</p>
                <p><strong>Year:</strong> {this.props.year}</p>
              
            </div>
           
        );
    }
}