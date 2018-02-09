import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class ComposedTextField extends React.Component {
    state = {
        name: 'Leave Comments Here',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-simple">Comments</InputLabel>
                    <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
                </FormControl>
            </div>
        );
    }
}

ComposedTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);