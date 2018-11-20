// Libraries
import React, {PureComponent} from 'react'

// Components
import {Form, Columns, Radio, ButtonShape} from 'src/clockface'

// Constants
import {AXES_SCALE_OPTIONS} from 'src/dashboards/constants/cellEditor'

interface Props {
  base: string
  onUpdateYAxisBase: (base: string) => void
}

const {BASE_2, BASE_10} = AXES_SCALE_OPTIONS

class YAxisBase extends PureComponent<Props> {
  public render() {
    const {base, onUpdateYAxisBase} = this.props

    return (
      <Form.Element label="Y-Value's Format" colsSM={Columns.Three}>
        <Radio shape={ButtonShape.StretchToFit}>
          <Radio.Button
            id="y-values-format-tab--raw"
            value=""
            active={base === ''}
            titleText="Don't format values"
            onClick={onUpdateYAxisBase}
          >
            Raw
          </Radio.Button>
          <Radio.Button
            id="y-values-format-tab--kmb"
            value={BASE_10}
            active={base === BASE_10}
            titleText="Thousand / Million / Billion"
            onClick={onUpdateYAxisBase}
          >
            K/M/B
          </Radio.Button>
          <Radio.Button
            id="y-values-format-tab--kmg"
            value={BASE_2}
            active={base === BASE_2}
            titleText="Kilo / Mega / Giga"
            onClick={onUpdateYAxisBase}
          >
            K/M/G
          </Radio.Button>
        </Radio>
      </Form.Element>
    )
  }
}

export default YAxisBase
