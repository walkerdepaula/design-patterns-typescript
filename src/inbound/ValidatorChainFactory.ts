import ValidatorChainFactory from "../factories/ValidatorChainFactory";
import InboundItemValidator from "./itemValidator";
import InboundPackageValidator from "./PackageValidator";

class InboundValidatorChainFactory implements ValidatorChainFactory<InboundItemValidator, InboundPackageValidator> {
  createItemValidator() {
    return new InboundItemValidator()
  }

  createPackageValidator() {
    return new InboundPackageValidator();
  }
}

export default InboundValidatorChainFactory;
