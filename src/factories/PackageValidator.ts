import ValidatorChain from './ValidatorChain';

abstract class PackageValidator extends ValidatorChain {
  abstract fistValidation(): PackageValidator;

  abstract validate(): boolean;
}

export default PackageValidator;
