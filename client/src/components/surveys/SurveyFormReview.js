//
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import formField from "./formField";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formField, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please Confirm SurveyFormReview</h5>

      {reviewFields}

      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>

      <button
        className="green darken-1 right btn-flat white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function manStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(manStateToProps, actions)(withRouter(SurveyFormReview));
