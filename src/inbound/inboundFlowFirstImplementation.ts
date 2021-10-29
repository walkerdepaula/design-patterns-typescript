import { Package } from "../types/package.type";
import PackageValidator from "./PackageValidator";
import { doX, doY, fifthValidation, fistValidation, fourthValidation, secondValidation, sixthValidation, thirdValidation } from "../utils/ValidatorFunctions";

class InboundFlow {
  validateItem(item):boolean {
    try {
      if (fistValidation()) {
        return doX()
      }
    } catch(e) {
      throw e
    }

    try {
      if (secondValidation()) {
        return doY()
      }
    } catch(e) {
      throw e
    }

    try {
      if (thirdValidation()) {
        return doX()
      }
    } catch(e) {
      throw e
    }

    try {
      if (fourthValidation()) {
        return doY()
      }
    } catch(e) {
      throw e
    }

    try {
      if (fifthValidation()) {
        return doX()
      }
    } catch(e) {
      throw e
    }

    try {
      if (sixthValidation()) {
        return doY()
      }
    } catch(e) {
      throw e
    }

    return true
  }

  validatePackage(meliPackage):boolean {
    try {
      if (fistValidation()) {
        return doX()
      }
    } catch(e) {
      throw e
    }

    try {
      if (secondValidation()) {
        return doY()
      }
    } catch(e) {
      throw e
    }

    try {
      if (thirdValidation()) {
        return doX()
      }
    } catch(e) {
      throw e
    }

    try {
      if (fourthValidation()) {
        return doY()
      }
    } catch(e) {
      throw e
    }

    try {
      if (fifthValidation()) {
        return doX()
      }
    } catch(e) {
      throw e
    }

    try {
      if (sixthValidation()) {
        return doY()
      }
    } catch(e) {
      throw e
    }

    return true
  }

  canInbound(item, meliPackage: Package) {
    if (this.validateItem(item) && this.validatePackage(meliPackage)) {

    }
  }
}


export default InboundFlow;
