import React from "react";

import ItemForm from "./ItemForm";

const Type6 = ({ setForm, formData, navigation, questions1, questions2 }) => {
  const { previous, next } = navigation;
  let question_phrase;
  let options;
  if (formData.serviceName === "Ferforje") {
    question_phrase = questions1[1].label;
    options = questions1[1].values.map((option) => (
      <React.Fragment key={option.id}>
        <ItemForm
          type="radio"
          label={option.value}
          name="type6"
          value={option.valueOrder}
          onChange={setForm}
        />
      </React.Fragment>
    ));
  } else {
    question_phrase = questions2[1].label;
    options = questions2[1].values.map((option) => (
      <div key={option.id}>
        <ItemForm
          type="radio"
          label={option.value}
          name="type6"
          value={option.valueOrder}
          onChange={setForm}
        />
      </div>
    ));
  }

  return (
    <div className="form">
      <h3>{question_phrase}</h3>
      <div>
        {options}
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Type6;
