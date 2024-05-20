class Movie extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const content = {
            position: 'absolute', 
            top: '40%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '5px',
            fontSize: 30
        };
        return (
          
            <div style={{ position: 'relative' }}>
                <img src={this.props.poster} alt="Movie Poster" style={{ width: '100%', height: "70%" }} />
                <div style={content}>
                    <p><strong>Title:</strong> {this.props.title}</p>
                    <p><strong>Director:</strong> {this.props.director}</p>
                    <p><strong>Year:</strong> {this.props.year}</p>
                    <p><strong>Description:</strong> {this.props.description}</p>
                </div>
            </div>

           
        );
    }
}