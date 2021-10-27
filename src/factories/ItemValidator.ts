import ValidatorChain from './ValidatorChain';

abstract class ItemValidator extends ValidatorChain {
  abstract validate(): boolean;
}

export default ItemValidator;
