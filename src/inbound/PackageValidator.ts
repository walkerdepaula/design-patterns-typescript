import { Package } from "../types/package.type";
import { doX, doY, fifthValidation, fistValidation, fourthValidation, secondValidation, sixthValidation, thirdValidation } from "../utils/ValidatorFunctions";
import PackageValidator from '../factories/PackageValidator';

class InboundPackageValidator implements PackageValidator<InboundPackageValidator> {
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

  private secondValidation(): InboundPackageValidator {
    try {
      if (secondValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  private thirdValidation(): InboundPackageValidator {
    try {
      if (thirdValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  private fourthValidation(): InboundPackageValidator {
    try {
      if (fourthValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  private fifthValidation(): InboundPackageValidator {
    try {
      if (fifthValidation()) {
        doX()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  private sixthValidation(): InboundPackageValidator {
    try {
      if (sixthValidation()) {
        doY()
      }
  
      return this;
    } catch(e) {
      throw e;
    }
  }

  public validate(meliPackage: Package): boolean {
    try {
      this
        .fistValidation()
        .secondValidation()
        .thirdValidation()
        .fourthValidation()
        .fifthValidation()
        .sixthValidation();

      return true;
    } catch(e) {
      return false;
    }
  }
}

export default InboundPackageValidator;
