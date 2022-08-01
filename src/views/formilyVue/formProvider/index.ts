
import { connect, mapProps, mapReadPretty } from "@formily/vue";
import { Input } from "ant-design-vue";
import { composeExport, transformComponent } from "../commonScript";
import PreviewText from "./prevew-text";

const TransFormInput = transformComponent(Input, {change: 'update: modelValue'})

const InnerInput = connect(
    TransFormInput,
    mapProps({
        value: 'modelValue',
        readOnly: 'readonly',
    }),
    mapReadPretty(PreviewText.Input)
)

const TextArea = connect(
    InnerInput,
    mapProps((props) =>{
        return {
            ...props,
            type: 'textarea',
        }
    }),
  mapReadPretty(PreviewText.Input)
)

export const Inputs = composeExport(InnerInput, {
    TextArea 
})

export default Inputs