// Libraries
import React, {PureComponent} from 'react'
// Components
import {ErrorHandling} from 'src/shared/decorators/errors'

// Types
import {StepStatus} from 'src/clockface/constants/wizard'
import {Button, ComponentColor, ComponentSize} from 'src/clockface'
import {OnboardingStepProps} from 'src/onboarding/containers/OnboardingWizard'

@ErrorHandling
class InitStep extends PureComponent<OnboardingStepProps> {
  public render() {
    return (
      <div className="wizard--bookend-step">
        <div className="splash-logo primary" />
        <h3 className="wizard-step--title">Welcome to InfluxDB 2.0</h3>
        <h5 className="wizard-step--sub-title">
          Get started in just a few easy steps
        </h5>
        <Button
          color={ComponentColor.Primary}
          text="Get Started"
          size={ComponentSize.Large}
          onClick={this.handleNext}
        />
      </div>
    )
  }

  private handleNext = () => {
    const {
      onSetStepStatus,
      currentStepIndex,
      onIncrementCurrentStepIndex,
    } = this.props
    onSetStepStatus(currentStepIndex, StepStatus.Complete)
    onIncrementCurrentStepIndex()
  }
}

export default InitStep
