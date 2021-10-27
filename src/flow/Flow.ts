import ValidatorChainFactory from "../factories/ValidatorChainFactory";

class Flow {
  validateFlow(validatorFactory: ValidatorChainFactory) {
    const validatorItem = validatorFactory.createItemValidator();
    const validatorPackage = validatorFactory.createPackageValidator();
    
    if (validatorItem.validate() && validatorPackage.validate()) {
      console.log('Todas as validações deram bom');
    }
  }
}

export default Flow;
