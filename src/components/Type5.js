import React from "react";

import ItemForm from "./ItemForm";

const Type5 = ({ setForm, formData, navigation, questions1, questions2 }) => {
  let question_phrase;
  const { previous, next, go } = navigation;
  let options;
  if (formData.serviceName === "Ferforje") {
    question_phrase = questions1[0].label;
    options = questions1[0].values.map((option) => (
      <React.Fragment key={option.id}>
        <ItemForm
          type="radio"
          label={option.value}
          name="type5"
          value={option.valueOrder}
          onChange={setForm}
        />
      </React.Fragment>
    ));
  } else {
    question_phrase = questions2[0].label;
    options = questions2[0].values.map((option) => (
      <div key={option.id}>
        <img src={option.valueImageUrl} alt="img area" />
        <ItemForm
          type="radio"
          label={option.value}
          name="type5"
          value={option.valueOrder}
          onChange={setForm}
        />
      </div>
    ));
  }
  return (
    <div className="form">
      <button onClick={previous}>Previous</button>
      <button onClick={() => go("services")}>Services</button>
      <h3>{question_phrase}</h3>
      <div>
        {options}
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Type5;
