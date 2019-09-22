import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Carousel,
  Card
} from 'App/Components'

import { Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired
  }

  render () {
    const { onDone } = this.props

    return (
      <Container>
        <Carousel
          buttons={['Next', 'Next', 'Done']}
          onPress={[null, null, null]}
          onDone={onDone}>
          <Card
            image={Images.onboarding.one}
            title='Welcome to the Otto DIY App'
            text='Where your Otto comes alive'
            style={{titleViewText: {fontSize: 22}}}
          />
          <Card
            image={Images.onboarding.two}
            title='Otto awaits your commands'
            text='Otto DIY+ & Humanoid supported out of the box, more robots coming soon!'
            style={{titleViewText: {fontSize: 22}}}
          />
          <Card
            image={Images.onboarding.three}
            title='Lots more to come! 🎉'
            text='Learn to code, customize your Otto and so much more...'
            style={{titleViewText: {fontSize: 22}}}
          />
        </Carousel>
      </Container>
    )
  }
}
