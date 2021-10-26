import { Package } from "./package.type";

class ItemValidator {
  validateInbound(meliPackage: Package) {
    if (meliPackage.type === 'VRAU' ) {
      return false;
    }

    return true;
  }
}

export default ItemValidator;
