import { mount } from "@vue/test-utils";
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
  const propsData = {
    header: 'sample header',
    description: 'sample description'
  }
  const wrapper = mount(Card, { propsData })

  it('displays props.header to h3 element', async () => {
    const h3El = await wrapper.find('h3')
    expect(h3El.text()).toBe('sample header')
  })

  it('displays props.description to p element', async () => {
    const pEl = await wrapper.find('p')
    expect(pEl.text()).toBe('sample description')
  })
})
