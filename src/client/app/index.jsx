import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import {Button, ButtonToolbar, Col, Grid, Row, Jumbotron, PageHeader, Panel} from 'react-bootstrap';


class App extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <PageHeader>checkingout.com
            <small>&nbsp;freelance</small>
          </PageHeader>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <ButtonToolbar>
                {/* Standard button */}
                <Button>Default</Button>

                {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                <Button bsStyle="primary">Primary</Button>

                {/* Indicates a successful or positive action */}
                <Button bsStyle="success">Success</Button>

                {/* Contextual button for informational alert messages */}
                <Button bsStyle="info">Info</Button>

                {/* Indicates caution should be taken with this action */}
                <Button bsStyle="warning">Warning</Button>

                {/* Indicates a dangerous or potentially negative action */}
                <Button bsStyle="danger">Danger</Button>

                {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                <Button bsStyle="link">Link</Button>
              </ButtonToolbar>

              <AwesomeComponent/>

            </Col>
            <Col xs={6} md={8}>
              <Jumbotron>
                <h1>checkingout.com!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra
                  attention to featured content or information.</p>
                <p><Button bsStyle="primary">Learn more</Button></p>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={8} md={6}>
              <Panel header="Person" bsStyle="info">
                <Button bsSize="large" block>Meld deg på her</Button>
              </Panel>
            </Col>
            <Col xs={8} md={6}>
              <Panel header="Bedrift" bsStyle="success">
                <Button bsSize="large" block>Meld deg på her</Button>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
