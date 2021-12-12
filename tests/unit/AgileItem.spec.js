import { mount } from "@vue/test-utils";
import AgileItem from '@/components/AgileItem.vue'

describe('AgileItem.vue', () => {
  const propsData = {
    item: {
      id: '1',
      name: 'Sample agile item name',
      isEditing: false
    }
  }
  const wrapper = mount(AgileItem, { 
    propsData,
    attachTo: document.body
  })
  it('displays the item name', async () => {
    const pEl = await wrapper.find('p')
    expect(pEl.text()).toBe('Sample agile item name')
  })

  it('emits "confirm:remove" event when remove button is clicked', async () => {
    const editButton = await wrapper.find('[data-test="remove-button"]')
    await editButton.trigger('click')
    expect(wrapper.emitted('confirm:remove')[0][0]).toStrictEqual('1')
  })
})
