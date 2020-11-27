import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/HelloWorld.vue'
// import assert from 'assert'
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
