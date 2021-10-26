import { Package } from "../types/package.type";
import { doX, doY, fifthValidation, fistValidation, fourthValidation, secondValidation, sixthValidation, thirdValidation } from "../utils/ValidatorFunctions";

class PackageValidator {
  fistValidation(): PackageValidator {
    try {
      if (fistValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  secondValidation(): PackageValidator {
    try {
      if (secondValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  thirdValidation(): PackageValidator {
    try {
      if (thirdValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  fourthValidation(): PackageValidator {
    try {
      if (fourthValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  fifthValidation(): PackageValidator {
    try {
      if (fifthValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  sixthValidation(): PackageValidator {
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
}

export default PackageValidator;
