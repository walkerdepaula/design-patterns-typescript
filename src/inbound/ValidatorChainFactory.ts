import ValidatorChainFactory from "../factories/ValidatorChainFactory";
import InboundItemValidator from "./itemValidator";
import InboundPackageValidator from "./PackageValidator";

class InboundValidatorChainFactory extends ValidatorChainFactory {
  createItemValidator() {
    return new InboundItemValidator()
  }

  createPackageValidator() {
    return new InboundPackageValidator();
  }
}

export default InboundValidatorChainFactory;
