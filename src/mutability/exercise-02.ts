type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes: ButtonAttributes = {
  type: "button",
};

modifyButton(buttonAttributes);

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange: ButtonAttributes[] = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange);
