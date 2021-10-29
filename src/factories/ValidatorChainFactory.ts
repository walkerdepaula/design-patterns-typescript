import ItemValidator from "./ItemValidator";
import PackageValidator from "./PackageValidator";

interface ValidatorChainFactory<ItemValidatorType, PackageValidatorType> {
  createItemValidator(): ItemValidator<ItemValidatorType>;

  createPackageValidator(): PackageValidator<PackageValidatorType>;
}

export default ValidatorChainFactory;
