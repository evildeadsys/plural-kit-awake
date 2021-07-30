import React, {Component} from "react";
import './Home.css'
import {Grid, Typography} from "@material-ui/core";
class MemberCards extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid item xs={2}>
                <div style={{backgroundImage: "url(\"" + this.props.member.avatar_url + "\")"}} className="member-card-image">
                    <Typography component={'h5'} variant="h5">{this.props.member.display_name}></Typography>
                    <Typography component={'h6'} variant="h6">{this.props.member.pronouns}</Typography>
                </div>
            </Grid>

        );
    }
}

export default MemberCards;