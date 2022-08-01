import { composeExport } from '../commonScript/index';
import { observe } from '@formily/reactive';
import { isArr, isValid } from '@formily/shared'
import { computed, defineComponent, Ref, h } from 'vue';
import { Input } from 'ant-design-vue';



// const PlaceholderContext = createContext('N/A')

export const usePlaceholder = (value?: Ref<any>) => {
//   const placeholderCtx = useContext(PlaceholderContext)
  const placeholder = computed(() => {
    return isValid(value?.value) && value?.value !== ''
      ? value?.value
      : 'N/A'
  })
  return placeholder
}

const Text = defineComponent({
    name: 'FPreviewText',
    setup(_props, { attrs }) {
      const placeholder = usePlaceholder()
  
      return () => {
        return h(
          'div',
          {  
            style: attrs.style,
          },
          {
            default: () => placeholder.value,
          }
        )
      }
    },
  })

const PreviewText = composeExport(Text, {
    Input
}) as any

export default PreviewText