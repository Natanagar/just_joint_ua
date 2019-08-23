import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import {
  withFirebase, firebaseConnect, isLoaded, isEmpty,
} from 'react-redux-firebase';

// we are importing some of the beautiful semantic UI react components
import {
  Segment,
  Search,
  Divider,
  Button,
} from 'semantic-ui-react';

let FormForJobs = ({ firebase, handleSubmit }) => {
  console.log(handleSubmit);
  const newJob = {
    position: 'Javascript middle developer',
    city: 'Kharkiv',
    location: {
      lat: 50.45466,
      log: 30.5238,
    },
    stack: ['Javascript', 'GULP', 'Grunt', 'Webpack', 'Git', 'English'],
    company: 'Mohi.to',
    address: 'ul. Valentinoskaya,18 Kharkov',
    data: '22.09.2019',


  };
  const submitForm = () => firebase.push('new job in Kharkov', newJob);
  console.log(submitForm);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <Button
        onClick={submitForm}
        type="submit"
      >
      Submit

      </Button>
    </form>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
const mapDispatchToProps = dispatch => ({});
FormForJobs = reduxForm({
  // a unique name for the form
  form: 'formForEmployer',
})(FormForJobs);
FormForJobs = withFirebase(FormForJobs);
export default connect(mapStateToProps, mapDispatchToProps)(FormForJobs);
