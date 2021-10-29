import { Package } from "../types/package.type";
import InboundItemValidator from "./itemValidator";
import InboundPackageValidator from "./PackageValidator";

class InboundFlow {
  packageValidator: InboundPackageValidator;
  itemValidator: InboundItemValidator;

  constructor(packageValidator: InboundPackageValidator, itemValidator: InboundItemValidator) {
    this.packageValidator = packageValidator;
    this.itemValidator = itemValidator;
  }

  canInbound(item, meliPackage: Package) {
    if (this.itemValidator.validate(item) && this.packageValidator.validate(meliPackage)) {

    }
  }
}

export default InboundFlow;
