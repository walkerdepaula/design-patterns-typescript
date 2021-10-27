import { Package } from "../types/package.type";
import { doX, doY, fifthValidation, fistValidation, fourthValidation, secondValidation, sixthValidation, thirdValidation } from "../utils/ValidatorFunctions";
import PackageValidator from '../factories/PackageValidator';

class InboundPackageValidator extends PackageValidator {
  fistValidation(): InboundPackageValidator {
    try {
      if (fistValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  secondValidation(): InboundPackageValidator {
    try {
      if (secondValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  thirdValidation(): InboundPackageValidator {
    try {
      if (thirdValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  fourthValidation(): InboundPackageValidator {
    try {
      if (fourthValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  fifthValidation(): InboundPackageValidator {
    try {
      if (fifthValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  sixthValidation(): InboundPackageValidator {
    try {
      if (sixthValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  validateInbound(meliPackage: Package): boolean {
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

  validate() {
    return true;
  }
}

export default InboundPackageValidator;
