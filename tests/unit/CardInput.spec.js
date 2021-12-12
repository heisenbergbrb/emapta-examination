import { mount } from "@vue/test-utils";
import CardInput from '@/components/CardInput.vue'

describe('CardInput.vue', () => {
  const propsData = {
    placeholder: 'Enter an agile core value'
  }
  const wrapper = mount(CardInput, { propsData })

  it('set props.placeholder to input text element', async () => {
    const input = await wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('Enter an agile core value')
  })
  it('sets the value', async () => {
    const input = await wrapper.find('input')
    await input.setValue('sample value')
    expect(input.element.value).toBe('sample value')
  })
  it('emits "submit" event when form is submitted', async () => {
    const input = await wrapper.find('input')
    await input.setValue('test value')
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.emitted('submit')[0][0]).toStrictEqual('test value')
  })
})
