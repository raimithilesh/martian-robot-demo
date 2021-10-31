import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import { Form, Input, Icon, Button } from 'antd';

import '../css/InputForm.css';
import { setInput } from "../redux/actions";
const { TextArea } = Input;

const FormItem = Form.Item;

class InputForm extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.setInput(values.commands)
        // console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Commands</h1>
        <FormItem>
          {getFieldDecorator('commands', {
          })(
            <TextArea style={{minHeight: '300px'}}>
              5 3
              
              1 1 E
              RFRFRFRF

              3 2 N
              FRRFLLFFRRFLL

              0 3 W
              LLFFFLFLFL
            </TextArea>
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Order
          </Button>
        </FormItem>
      </Form>
    );
  }
}
InputForm = Form.create()(InputForm);

const mapDispatchToProps = dispatch => {
  return {
    setInput: input => dispatch(setInput(input)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(InputForm);
