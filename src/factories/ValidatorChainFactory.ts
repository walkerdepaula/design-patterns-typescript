import ItemValidator from "./ItemValidator";
import PackageValidator from "./PackageValidator";

abstract class ValidatorChainFactory {
  abstract createItemValidator(): ItemValidator;

  abstract createPackageValidator(): PackageValidator;
}

export default ValidatorChainFactory;
