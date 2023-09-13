// SurveyField contains logic to reder a single
// Label and text input

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      {label}
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
