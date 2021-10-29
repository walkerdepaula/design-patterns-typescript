import Flow from './src/flow/Flow';
import InboundValidatorChainFactory from "./src/inbound/ValidatorChainFactory";

function executeInbound() {
  // new InboundFlow()
  //   .canInbound();

  new Flow()
    .validateFlow(
      new InboundValidatorChainFactory()
    )
}

function executePutaway() {
  new Flow()
    .validateFlow(
      new InboundValidatorChainFactory()
    )
}
