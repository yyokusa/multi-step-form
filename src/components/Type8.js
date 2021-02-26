import React from "react";

import ItemForm from "./ItemForm";

const Type8 = ({ setForm, formData, navigation, questions1, questions2 }) => {
  const { previous, next } = navigation;
  let question_phrase;
  if (formData.serviceName === "Ferforje") {
    question_phrase = questions1[2].label;
    option = (
      <div key={questions1[2].id}>
        <ItemForm
          label={questions1[2].value}
          placeholder={questions1[2].placeholder}
          type="textarea"
          name="type8"
          onChange={setForm}
        />
      </div>
    );
  } else {
    question_phrase = questions2[2].label;
    option = (
      <div key={questions2[2].id}>
        <ItemForm
          label={questions2[2].value}
          placeholder={questions2[2].placeholder}
          type="textarea"
          name="type8"
          onChange={setForm}
        />
      </div>
    );
  }

  return (
    <div className="form">
      <h3>{question_phrase}</h3>
      <div>
        {option}
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Type8;
