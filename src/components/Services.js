import React from "react";

import ItemForm from "./ItemForm";

const Services = ({ setForm, servicesJson, navigation }) => {
  const { next } = navigation;

  const all_services = servicesJson.map((service) => (
    <React.Fragment key={service.serviceId}>
      <ItemForm
        label={service.name}
        name="serviceName"
        type="button"
        value={service.name}
        onMouseUp={setForm}
        onClick={next}
      />
    </React.Fragment>
  ));
  return <div className="form">{all_services}</div>;
};

export default Services;
