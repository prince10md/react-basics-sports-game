class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
    }

    shotHandler = () => {
        let score = this.state.score

        if (Math.random() > 0.5) {
            score += 1
        }

        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }

    render() {
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                <img src={this.props.logo} alt={this.props.name}/>
            </div>
            
            <div>
                <strong>shots:</strong> {this.state.shots}
            </div>

            <div>
                <strong>score:</strong> {this.state.score}
            </div>

            <button onClick={this.shotHanndler}>shoot!</button>
        </div>
        )
    }
}

function App(props) { 
    return (
      <div className="App">
          <Team 
          name="Russiaville Raccoons" 
          logo="./assets/images/raccoon.png"
          />
       
      </div>
    )
  } 
  
 
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );