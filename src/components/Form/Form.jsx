import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// we are importing some of the beautiful semantic UI react components
import {
  Segment,
  Search,
  Divider,
  Button,
} from 'semantic-ui-react';

const FormForJobs = (props) => {
  const { handleSubmit } = props;
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
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default reduxForm({
  form: 'formForEmployer',
})(FormForJobs);
