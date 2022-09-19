import { Translate } from "components";
import { errorsProperties, maxAndMinValues } from "constantStrings";
import validator from "validator";

const sectionName = "validateInput";

const validateInput = (inputName, value, noErrorOnEmpty = false) => {
  switch (inputName) {
    default:
      break;

    case "login":
      if (!value && noErrorOnEmpty) return null;

      // validating email
      if (value.includes("@")) {
        if (!validator.isEmail(value))
          return (
            <Translate
              section={sectionName}
              text={errorsProperties.invalidEmail}
            />
          );
      }

      // validating username
      else {
        if (value.length < maxAndMinValues.minNameLength)
          return (
            <Translate
              section={sectionName}
              text={errorsProperties.tooShortUserName}
            />
          );

        if (value.length > maxAndMinValues.maxNameLength)
          return (
            <Translate
              section={sectionName}
              text={errorsProperties.tooShortUserName}
            />
          );
      }

      return null;

    case "password": {
      if (!value && noErrorOnEmpty) return "";

      let errors = null;

      if (
        !validator.isStrongPassword(value, {
          minLength: maxAndMinValues.minPasswordLength,
        })
      ) {
        if (value.length < 6) {
          if (!errors) errors = [];

          errors.push(
            <Translate
              section={sectionName}
              text={errorsProperties.passwordLength}
            />
          );
        }

        if (!/\d/.test(value)) {
          if (!errors) errors = [];

          errors.push(
            <Translate
              section={sectionName}
              text={errorsProperties.passwordNumber}
            />
          );
        }

        if (!/[a-z]/.test(value)) {
          if (!errors) errors = [];

          errors.push(
            <Translate
              section={sectionName}
              text={errorsProperties.passwordLowercase}
            />
          );
        }

        if (!/[A-Z]/.test(value)) {
          if (!errors) errors = [];

          errors.push(
            <Translate
              section={sectionName}
              text={errorsProperties.passwordUppercase}
            />
          );
        }

        if (!/[^a-zA-Z0-9]/.test(value)) {
          if (!errors) errors = [];

          errors.push(
            <Translate
              section={sectionName}
              text={errorsProperties.passwordSpecialCharacter}
            />
          );
        }
      }

      return errors;
    }

    case "userName":
      if (!value && noErrorOnEmpty) return "";

      if (value.length < maxAndMinValues.minNameLength)
        return (
          <Translate
            section={sectionName}
            text={errorsProperties.tooShortUserName}
          />
        );

      if (value.length > maxAndMinValues.maxNameLength)
        return (
          <Translate
            section={sectionName}
            text={errorsProperties.tooLongUserName}
          />
        );

      return "";

    case "email":
      if (!value && noErrorOnEmpty) return "";

      if (validator.isEmail(value)) return "";
      return (
        <Translate section={sectionName} text={errorsProperties.invalidEmail} />
      );

    case "productName":
    case "storageName":
    case "shoppingListName":
    case "shoppingListItemName":
      if (value.length > maxAndMinValues.maxNameLength)
        return (
          <Translate
            section={sectionName}
            text={errorsProperties.tooLongName}
          />
        );

      return "";

    case "labelName":
      if (value.length > maxAndMinValues.maxLabelLength)
        return (
          <Translate
            section={sectionName}
            text={errorsProperties.tooLongLabel}
          />
        );

      return "";

    case "amount":
      if (value.length > maxAndMinValues.maxNameLength)
        return (
          <Translate
            section={sectionName}
            text={errorsProperties.tooLongAmount}
          />
        );

      return "";

    case "numberOfDaysForWarning":
      if (noErrorOnEmpty && value === "") return "";

      const d = parseInt(value);

      if (!d || d <= 0 || value !== "" + d)
        return (
          <Translate
            section={sectionName}
            text={errorsProperties.daysForWarning}
          />
        );

      return "";

    case "quantity":
      if (value.length > maxAndMinValues.maxNameLength)
        return (
          <Translate
            section={sectionName}
            text={errorsProperties.tooLongQuantity}
          />
        );

      return "";
  }
};

export default validateInput;
