import { Package } from "../types/package.type";
import ItemValidator from '../factories/ItemValidator';

class InboundItemValidator extends ItemValidator {
  validateInbound(meliPackage: Package) {
    if (meliPackage.type === 'VRAU' ) {
      return false;
    }

    return true;
  }

  validate() {
    return true;
  }
}

export default InboundItemValidator;
