import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Header as={"h1"}>Budget</Header>
        <Statistic size="small">
          <Statistic.Label>Your Balance</Statistic.Label>
          <Statistic.Value>45,00.54</Statistic.Value>
        </Statistic>

        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label style={{ textAlign: "center" }}>
                    Income
                  </Statistic.Label>
                  <Statistic.Value>45,00.54</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic size="tiny" color="red">
                  <Statistic.Label style={{ textAlign: "center" }}>
                    Expense
                  </Statistic.Label>
                  <Statistic.Value>45.78</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as={"h3"}>History </Header>
        <Segment color="red">
          <Grid columns={3} textAlign="center">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Something
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                $10
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit"></Icon>
                <Icon name="trash"></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment color="red">
          <Grid columns={3} textAlign="center">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Something
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                $10
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit"></Icon>
                <Icon name="trash"></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment color="green">
          <Grid columns={3} textAlign="center">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                bought
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                $10
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit"></Icon>
                <Icon name="trash"></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as={"h3"}>Add new transaction</Header>
        <Form unstackable>
          <Form.Group>
            <Form.Input
              width={12}
              icon={"tags"}
              label="Description"
              placeholder="New thing"
            />
            <Form.Input
              width={4}
              label="Value"
              placeholder="12.23"
              icon={"dollar"}
              iconPosition="left"
            />
          </Form.Group>
          <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>
      </Container>
    </>
  );
}

export default App;
