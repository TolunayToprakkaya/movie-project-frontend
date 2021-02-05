import React from "react";
import PropTypes from "prop-types";
import {Grid, Image, Card} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {imageStyle} from "./css/CastCardStyle";

const CastCard = ({cast}) => {

    return (
        <Grid.Column>
            <Card>
                <Image style={imageStyle} src={cast.photo}/>
                <Card.Content>
                    <Card.Header>
                        {cast.name + ` ` + cast.lastname}
                    </Card.Header>
                    <Card.Meta>
                        <span>{cast.castFeature.isActor === 1 ? "Actor" : "Actress"}</span>
                    </Card.Meta>
                    <Card.Description>
                        {cast.biography.substring(0, 300) + "... "}
                        <Link as={Link} to={`/cast/updateCast/${cast.castId}`}>See full bio</Link>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

CastCard.propTypes = {
    cast: PropTypes.object.isRequired
}

export default CastCard;

/*
    1) Create Stateless Component
    2) propTypes
    3) Card
*/