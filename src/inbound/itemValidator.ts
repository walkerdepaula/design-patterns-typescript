import ItemValidator from '../factories/ItemValidator';
import { doX, doY, fifthValidation, fistValidation, fourthValidation, secondValidation, sixthValidation, thirdValidation } from "../utils/ValidatorFunctions";

class InboundItemValidator implements ItemValidator {
  fistValidation(): InboundItemValidator {
    try {
      if (fistValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  secondValidation(): InboundItemValidator {
    try {
      if (secondValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  thirdValidation(): InboundItemValidator {
    try {
      if (thirdValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  fourthValidation(): InboundItemValidator {
    try {
      if (fourthValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  fifthValidation(): InboundItemValidator {
    try {
      if (fifthValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  sixthValidation(): InboundItemValidator {
    try {
      if (sixthValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  validate(item): boolean {
    try {
      this
        .fistValidation()
        .secondValidation()
        .thirdValidation()
        .fourthValidation()
        .fifthValidation()

      return true;
    } catch(e) {
      return false;
    }
  }
}

export default InboundItemValidator;
