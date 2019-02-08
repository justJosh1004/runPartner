import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

class RunForm extends Component {
  renderInput = ({ input, label, meta, id, placeholder, name, type }) => {
    return (
      <FormGroup>
        <Label for={id}>{label}</Label>
        <Input name={name} type={type} id={id} placeholder={placeholder} />
      </FormGroup>
    );
  };
  render() {
    return (
      <Form>
        <Field
          component={this.renderInput}
          name="runName"
          id="theRunName"
          label="Run Name"
          type="text"
          placeholder="Give your run a name"
        />
        <Field
          component={this.renderInput}
          name="runLocation"
          id="theRunLocation"
          label="Run Location"
          type="text"
          placeholder="Where is the run?"
        />
        <Row form>
          <Col md={6}>
            <Field
              component={this.renderInput}
              name="runTime"
              id="theRunTime"
              label="Run Time"
              type="time"
              placeholder="What time is the run?"
            />
          </Col>
          <Col md={6}>
            <Field
              component={this.renderInput}
              name="runDate"
              id="theRunDate"
              label="Run Day"
              type="date"
              placeholder="What day is the run?"
            />
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <Field
              component={this.renderInput}
              name="miles"
              id="theMiles"
              label="Miles"
              type="number"
              placeholder="How many miles?"
            />
          </Col>
          <Col md={4}>
            <Field
              component={this.renderInput}
              name="pace"
              id="thePace"
              label="Pace"
              type="text"
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  return errors;
};

export default reduxForm({
  form: 'runForm',
  validate
})(RunForm);
