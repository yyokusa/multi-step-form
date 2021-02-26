import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Services from "./components/Services";
import Type5 from "./components/Type5";
import Type6 from "./components/Type6";
import Type8 from "./components/Type8";
import Submit from "./components/Submit";

import "../public/styles.css";

const steps = [
  { id: "services" },
  { id: "type5" },
  { id: "type6" },
  { id: "type8" },
  { id: "submit" }
];

const servicesJson = require("../data/services.json");
const questions1 = require("../data/262-questions.json");
const questions2 = require("../data/399-questions.json");

const defaultData = {
  serviceName: "",
  type5: "",
  type6: "",
  type8: ""
};

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = {
    formData,
    setForm,
    navigation,
    servicesJson,
    questions1,
    questions2
  };

  switch (id) {
    case "services":
      return <Services {...props} />;
    case "type5":
      return <Type5 {...props} />;
    case "type6":
      return <Type6 {...props} />;
    case "type8":
      return <Type8 {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
