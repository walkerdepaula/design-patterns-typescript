import ValidatorChain from './ValidatorChain';

interface PackageValidator<ValidatorType> extends ValidatorChain {
  fistValidation(): ValidatorType;
}

export default PackageValidator;
