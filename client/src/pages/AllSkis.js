import React from "react";
import API from "../utils/API";
import { Container } from 'react-materialize';
import Skis from "../components/Skis";

class AllSkis extends React.Component {
    state = {
        skis: [],
        message: '',
        error: ''
    }

    componentDidMount() {
        this.loadSkis();
      }
    
      loadSkis = () => {
        API.getSkis()
          .then(res =>
            this.setState({ skis: res.data })
          )
          .catch(err => console.log(err));
      };
    render() {
        return (
            <Container>

                {this.state.skis.length ? (
                    <div className="container center">

                        {this.state.skis.map(result => (
                            <Skis
                                key={result._id}
                                brand={result.brand}
                                model={result.model}
                                image={result.image}
                                category={result.category}
                                snow_recommendation={result.snow_recommendation}
                                turns_recommendation={result.turns_recommendation}
                                pace_recommendation={result.pace_recommendation}
                            />
                        ))}

                    </div>
                ) : (
                        <h5>{this.state.message}</h5>
                    )}

            </Container>
        );

    }
}

export default AllSkis;